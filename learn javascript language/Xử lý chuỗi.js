//                                                              Xử lý chuỗi trong JavaScript

// 1. Tìm kiếm chuỗi con
// indexOf(substring): Tìm vị trí đầu tiên của chuỗi con.
// lastIndexOf(substring): Tìm vị trí cuối cùng của chuỗi con.
// search(substring): Tương tự indexOf nhưng hỗ trợ Regular Expressions.

// 2. Cắt chuỗi
// slice(start, end): Lấy chuỗi từ start đến end (không bao gồm end).
// substring(start, end): Giống slice, nhưng không hỗ trợ giá trị âm.
// substr(start, length): Lấy length ký tự từ vị trí start.

// 3. Thay thế chuỗi
// replace(searchValue, replaceValue): Thay thế chuỗi con bằng chuỗi khác.

// 4. Chuyển đổi chữ hoa/chữ thường
// toUpperCase(): Chuyển chuỗi thành chữ hoa.
// toLowerCase(): Chuyển chuỗi thành chữ thường.

// 5. Nối chuỗi
// Toán tử + hoặc concat(): Dùng để nối các chuỗi lại với nhau.

// 6. Lấy ký tự hoặc mã ASCII
// charAt(index): Trả về ký tự tại vị trí index.
// charCodeAt(index): Trả về mã ASCII của ký tự tại vị trí index.

// 7. Chuyển chuỗi thành mảng
// split(separator): Tách chuỗi thành mảng dựa trên ký tự separator.\

// 8. Lặp qua từng ký tự chuỗi
// Sử dụng vòng lặp để duyệt qua từng ký tự của chuỗi:


let str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}