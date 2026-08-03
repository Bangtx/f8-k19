import React, { useRef, useState } from 'react';

const API_URL = 'http://localhost:3000/rooms';

// Cấu hình máy chủ trung gian của Google (Miễn phí) để tìm đường truyền mạng
const servers = {
  iceServers: [
    { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] },
  ],
};

export default function App() {
  const [roomId, setRoomId] = useState('');
  const [status, setStatus] = useState('Chưa kết nối');

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const pc = useRef(new RTCPeerConnection(servers)); // Đối tượng xử lý WebRTC

  // 1. BẬT CAMERA
  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;

    // Đẩy luồng video/audio của mình vào WebRTC
    stream.getTracks().forEach((track) => {
      pc.current.addTrack(track, stream);
    });

    // Lắng nghe khi có luồng video của người kia truyền tới
    pc.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    setStatus('Đã bật camera. Sẵn sàng gọi!');
  };

  // 2. NGƯỜI A: TẠO PHÒNG VÀ GỌI
  const createRoom = async () => {
    const newRoomId = Math.random().toString(36).substring(7); // Tạo ID phòng ngẫu nhiên
    setRoomId(newRoomId);
    setStatus('Đang tạo phòng, đợi gom thông tin mạng...');

    // Lắng nghe: Khi đã thu thập XONG toàn bộ thông tin mạng (ICE Candidates) thì mới lưu lên db.json
    pc.current.onicegatheringstatechange = async () => {
      if (pc.current.iceGatheringState === 'complete') {
        const offer = pc.current.localDescription;

        // Lưu Offer (lời mời) lên json-server
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: newRoomId, offer: offer }),
        });

        setStatus(`Phòng đã tạo: ${newRoomId}. Đang đợi người kia vào...`);

        // Dùng Polling: Cứ 2 giây gọi API 1 lần để xem người B đã trả lời (Answer) chưa
        const interval = setInterval(async () => {
          const res = await fetch(`${API_URL}/${newRoomId}`);
          const roomData = await res.json();

          if (roomData.answer && !pc.current.currentRemoteDescription) {
            // Nếu có câu trả lời, nạp vào WebRTC để hoàn tất kết nối
            const answer = new RTCSessionDescription(roomData.answer);
            await pc.current.setRemoteDescription(answer);
            setStatus('Đã kết nối thành công!');
            clearInterval(interval); // Dừng việc gọi API liên tục
          }
        }, 2000);
      }
    };

    // Tạo lời mời (Offer)
    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);
  };

  // 3. NGƯỜI B: VÀO PHÒNG VÀ TRẢ LỜI
  const joinRoom = async () => {
    setStatus('Đang tham gia phòng...');

    // Lấy thông tin phòng từ json-server
    const res = await fetch(`${API_URL}/${roomId}`);
    const roomData = await res.json();

    if (!roomData || !roomData.offer) {
      setStatus('Phòng không tồn tại hoặc chưa có Offer!');
      return;
    }

    // Nạp Offer của người A vào máy mình
    const offer = new RTCSessionDescription(roomData.offer);
    await pc.current.setRemoteDescription(offer);

    // Lắng nghe: Khi thu thập xong mạng thì đẩy Answer lên db.json
    pc.current.onicegatheringstatechange = async () => {
      if (pc.current.iceGatheringState === 'complete') {
        const answer = pc.current.localDescription;

        // Cập nhật (PATCH) phòng trên json-server với câu trả lời của mình
        await fetch(`${API_URL}/${roomId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answer: answer }),
        });

        setStatus('Đã kết nối thành công!');
      }
    };

    // Tạo câu trả lời (Answer)
    const answer = await pc.current.createAnswer();
    await pc.current.setLocalDescription(answer);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Video Call Demo (WebRTC + json-server)</h2>

      <div style={{ marginBottom: '20px' }}>
        <strong>Trạng thái: </strong> <span style={{ color: 'blue' }}>{status}</span>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={startCamera} style={{ marginRight: '10px' }}>1. Bật Camera</button>
        <button onClick={createRoom} style={{ marginRight: '10px' }}>2. Tạo phòng (Người gọi)</button>

        <input
          placeholder="Nhập ID phòng..."
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={joinRoom}>3. Vào phòng (Người nghe)</button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h3>Bạn</h3>
          <video ref={localVideoRef} autoPlay playsInline muted style={{ width: '400px', background: 'black' }} />
        </div>
        <div>
          <h3>Người kia</h3>
          <video ref={remoteVideoRef} autoPlay playsInline style={{ width: '400px', background: 'black' }} />
        </div>
      </div>
    </div>
  );
}