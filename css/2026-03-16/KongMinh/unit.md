# CSS Units – Khái niệm các đơn vị trong CSS

## 1. CSS Unit là gì

CSS Unit là đơn vị đo được sử dụng trong CSS để xác định kích thước của các thuộc tính giao diện như chiều rộng, chiều cao, khoảng cách, kích thước chữ hoặc vị trí của phần tử trên trang web.

Các đơn vị này giúp trình duyệt hiểu được kích thước hoặc tỷ lệ mà nhà phát triển muốn áp dụng cho các phần tử trong giao diện.

Trong CSS, các đơn vị được chia thành hai nhóm chính:

- Đơn vị tuyệt đối (Absolute Units)
- Đơn vị tương đối (Relative Units)

---

# 2. Absolute Units (Đơn vị tuyệt đối)

Đơn vị tuyệt đối là các đơn vị có kích thước cố định và không phụ thuộc vào kích thước màn hình, phần tử cha hoặc môi trường hiển thị. Khi sử dụng các đơn vị này, giá trị kích thước sẽ giữ nguyên trong mọi trường hợp.

Các đơn vị tuyệt đối thường được dùng trong các trường hợp cần kích thước chính xác hoặc trong thiết kế in ấn.

Các đơn vị tuyệt đối bao gồm:

- px
- pt
- pc
- cm
- mm
- in

---

## px (Pixel)

Pixel là đơn vị phổ biến nhất trong CSS. Pixel đại diện cho một điểm ảnh trên màn hình hiển thị. Đơn vị này thường được sử dụng để xác định kích thước cụ thể của phần tử, khoảng cách hoặc đường viền.

Pixel mang lại khả năng kiểm soát chính xác kích thước giao diện.

---

## pt (Point)

Point là đơn vị đo thường được sử dụng trong thiết kế in ấn. Một point tương đương với một phần bảy mươi hai của một inch. Trong CSS, đơn vị này chủ yếu được sử dụng khi thiết kế nội dung phục vụ cho việc in.

---

## pc (Pica)

Pica là đơn vị đo trong hệ thống in ấn truyền thống. Một pica tương đương với mười hai point. Đơn vị này ít được sử dụng trong thiết kế web hiện đại.

---

## cm (Centimeter)

Centimeter là đơn vị đo chiều dài trong hệ mét. Trong CSS, đơn vị này được sử dụng khi cần kích thước vật lý chính xác, đặc biệt trong các tài liệu cần in.

---

## mm (Millimeter)

Millimeter là đơn vị nhỏ hơn centimeter trong hệ đo lường mét. Đơn vị này được dùng trong các trường hợp cần độ chính xác cao về kích thước vật lý.

---

## in (Inch)

Inch là đơn vị đo chiều dài trong hệ đo lường Anh. Trong CSS, một inch thường được quy đổi tương đương với 96 pixel trên các trình duyệt hiện đại.

---

# 3. Relative Units (Đơn vị tương đối)

Đơn vị tương đối là các đơn vị có giá trị phụ thuộc vào một yếu tố khác như kích thước của phần tử cha, kích thước font gốc hoặc kích thước của cửa sổ trình duyệt.

Những đơn vị này giúp giao diện web trở nên linh hoạt và dễ thích nghi với nhiều kích thước màn hình khác nhau.

Các đơn vị tương đối bao gồm:

- %
- em
- rem
- vw
- vh
- vmin
- vmax
- ch
- ex

---

## %

Phần trăm là đơn vị tương đối dựa trên kích thước của phần tử cha. Giá trị phần trăm thể hiện tỷ lệ so với kích thước của phần tử chứa nó.

Đơn vị này thường được sử dụng để xây dựng các layout linh hoạt và responsive.

---

## em

Em là đơn vị tương đối dựa trên kích thước font của phần tử cha. Khi sử dụng em, giá trị kích thước sẽ được tính dựa trên kích thước chữ hiện tại của phần tử cha.

Đơn vị này thường được sử dụng cho khoảng cách hoặc kích thước liên quan đến typography.

---

## rem

Rem là viết tắt của Root Em. Đây là đơn vị tương đối dựa trên kích thước font của phần tử gốc của tài liệu, thường là phần tử html.

Rem giúp kiểm soát kích thước giao diện ổn định hơn và tránh các vấn đề về kế thừa kích thước phức tạp.

---

## vw (Viewport Width)

Viewport Width là đơn vị dựa trên chiều rộng của cửa sổ hiển thị của trình duyệt. Một vw tương đương với một phần trăm chiều rộng của viewport.

Đơn vị này thường được sử dụng để tạo các layout linh hoạt theo chiều rộng màn hình.

---

## vh (Viewport Height)

Viewport Height là đơn vị dựa trên chiều cao của cửa sổ hiển thị của trình duyệt. Một vh tương đương với một phần trăm chiều cao của viewport.

Đơn vị này thường được sử dụng cho các phần giao diện cần chiếm toàn bộ chiều cao màn hình.

---

## vmin

Vmin là đơn vị được tính dựa trên giá trị nhỏ hơn giữa chiều rộng và chiều cao của viewport. Điều này giúp đảm bảo kích thước phần tử không vượt quá chiều nhỏ nhất của màn hình.

---

## vmax

Vmax là đơn vị được tính dựa trên giá trị lớn hơn giữa chiều rộng và chiều cao của viewport. Đơn vị này giúp phần tử có thể mở rộng dựa trên kích thước lớn nhất của màn hình.

---

## ch

Ch là đơn vị tương đối dựa trên chiều rộng của ký tự số 0 trong font hiện tại. Đơn vị này thường được sử dụng để xác định chiều rộng của các vùng nhập liệu hoặc vùng văn bản.

---

## ex

Ex là đơn vị tương đối dựa trên chiều cao của chữ thường x trong font hiện tại. Đây là đơn vị ít được sử dụng hơn trong thực tế.

---

# 4. Tổng hợp các CSS Units

## Absolute Units

- px – Pixel
- pt – Point
- pc – Pica
- cm – Centimeter
- mm – Millimeter
- in – Inch

---

## Relative Units

- % – Tỷ lệ theo phần tử cha
- em – Theo kích thước font của phần tử cha
- rem – Theo kích thước font của phần tử gốc
- vw – Phần trăm chiều rộng viewport
- vh – Phần trăm chiều cao viewport
- vmin – Giá trị nhỏ hơn giữa viewport width và height
- vmax – Giá trị lớn hơn giữa viewport width và height
- ch – Chiều rộng ký tự số 0
- ex – Chiều cao chữ x

# CSS Units Cheatsheet

Tài liệu tóm tắt nhanh các đơn vị CSS thường dùng trong phát triển giao diện web.

---

# 1. Phân loại CSS Units

CSS units được chia thành 2 nhóm chính:

| Nhóm           | Mô tả                                  |
| -------------- | -------------------------------------- |
| Absolute Units | Đơn vị tuyệt đối, kích thước cố định   |
| Relative Units | Đơn vị tương đối, phụ thuộc môi trường |

---

# 2. Absolute Units (Đơn vị tuyệt đối)

Đơn vị tuyệt đối có kích thước cố định và không thay đổi theo phần tử cha hoặc viewport.

| Unit | Ý nghĩa    |
| ---- | ---------- |
| px   | Pixel      |
| pt   | Point      |
| pc   | Pica       |
| cm   | Centimeter |
| mm   | Millimeter |
| in   | Inch       |

### Đặc điểm

- Kích thước cố định
- Dễ kiểm soát layout
- Ít responsive

### Sử dụng phổ biến

- px là đơn vị phổ biến nhất
- các đơn vị còn lại chủ yếu dùng cho in ấn

---

# 3. Relative Units (Đơn vị tương đối)

Đơn vị tương đối phụ thuộc vào môi trường hiển thị như:

- kích thước phần tử cha
- kích thước font
- kích thước viewport

---

# 4. Nhóm đơn vị theo phần tử cha

## %

Đơn vị phần trăm phụ thuộc vào kích thước của phần tử cha.

### Đặc điểm

- linh hoạt
- responsive
- thường dùng cho layout

---

## em

Đơn vị dựa trên kích thước font của phần tử cha.

### Đặc điểm

- phụ thuộc parent
- có thể bị nhân nhiều lần khi lồng nhiều cấp

---

## rem

Đơn vị dựa trên kích thước font của phần tử gốc (root).

### Đặc điểm

- ổn định
- dễ scale toàn bộ website
- rất phổ biến trong thiết kế hiện đại

---

# 5. Nhóm đơn vị theo viewport

Viewport là kích thước cửa sổ hiển thị của trình duyệt.

---

## vw

Viewport width.

1vw tương đương 1% chiều rộng của viewport.

---

## vh

Viewport height.

1vh tương đương 1% chiều cao của viewport.

---

## vmin

Đơn vị dựa trên kích thước nhỏ hơn giữa:

- viewport width
- viewport height

---

## vmax

Đơn vị dựa trên kích thước lớn hơn giữa:

- viewport width
- viewport height

---

# 6. Nhóm đơn vị typography

## ch

Đơn vị dựa trên chiều rộng của ký tự "0".

Thường dùng để giới hạn chiều rộng văn bản.

---

## ex

Đơn vị dựa trên chiều cao của chữ "x".

Ít được sử dụng trong thực tế.

---

# 7. Bảng tổng hợp CSS Units

| Unit | Loại     | Phụ thuộc        |
| ---- | -------- | ---------------- |
| px   | absolute | không phụ thuộc  |
| %    | relative | parent           |
| em   | relative | font parent      |
| rem  | relative | root font        |
| vw   | relative | viewport width   |
| vh   | relative | viewport height  |
| vmin | relative | viewport nhỏ hơn |
| vmax | relative | viewport lớn hơn |
| ch   | relative | width ký tự      |
| ex   | relative | height chữ       |

---

# 8. Quy chuẩn dùng CSS Units hiện đại

## Typography

Sử dụng:

- rem

---

## Spacing

Sử dụng:

- rem
- em

---

## Layout

Sử dụng:

- %
- vw
- vh

---

## Full screen section

Sử dụng:

- vh

---

# 9. Design System phổ biến

Nhiều hệ thống thiết kế hiện đại sử dụng:

- rem cho typography
- rem cho spacing
- % cho layout
- vh/vw cho responsive

Các hệ thống sử dụng cách này:

- Tailwind CSS
- Material UI
- Apple Human Interface
- Shopify Polaris

---

# 10. Nguyên tắc ghi nhớ nhanh

Absolute units:

- px
- pt
- pc
- cm
- mm
- in

Relative units:

- %
- em
- rem
- vw
- vh
- vmin
- vmax
- ch
- ex

---

# 11. Quy tắc frontend developer nên dùng

Typography → rem  
Spacing → rem  
Layout → %  
Fullscreen → vh  
Component scale → em

---

# 12. Ghi nhớ nhanh

px → cố định  
% → theo parent  
em → theo font parent  
rem → theo root font  
vw → theo width màn hình  
vh → theo height màn hình
