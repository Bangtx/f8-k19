const payBank = () => {
  console.log('Bank')
}

const payCash = () => {
  console.log('Cash')
}

const paymentHandlers = {
  cash:payBank,
  bank: payCash,
};

const pay = (type) => {
  const handler = paymentHandlers[type];
  if (!handler) {
    console.log(`Không hỗ trợ phương thức: ${type}`);
    return;
  }
  handler();
};

pay("cash"); // Thanh toán tiền mặt
pay("bank"); // Chuyển khoản
// pay("momo"); // Thanh toán qua Momo