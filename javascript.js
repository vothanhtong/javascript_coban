let fullname;
let age;
let mail;
let number;

while (true) {
    fullname = prompt("Nhập tên người dùng (không được để trống): ");
    if (fullname.trim() !== "") break; // Điều kiện kiểm tra tên không trống
    console.log("Tên không được để trống. Vui lòng nhập lại.");
}

while (true) {
    age = prompt("Nhập tuổi của bạn: ");
    if (parseInt(age) > 0 && !isNaN(age)) break; // Kiểm tra tuổi là số dương hợp lệ
    console.log("Tuổi phải là một số dương. Vui lòng nhập lại.");
}

while (true) {
    mail = prompt("Nhập địa chỉ email của bạn: ");
    if (mail.endsWith("@gmail.com")) break; // Kiểm tra đuôi email
    console.log("Địa chỉ email phải có đuôi @gmail.com. Vui lòng nhập lại.");
}

while (true) {
    number = prompt("Nhập số điện thoại của bạn: ");
    if (number.length === 10 && !isNaN(number)) break; // Kiểm tra số điện thoại đúng 10 số
    console.log("Số điện thoại phải có 10 chữ số. Vui lòng nhập lại.");
}

// Phân loại tuổi
const ageGroup = parseInt(age) < 15 ? "nhỏ" : "người lớn"; // Sử dụng const cho biến không thay đổi

// In kết quả ra màn hình với định dạng đẹp
console.log(`
Chào ${fullname},
Bạn ${age} tuổi, thuộc nhóm ${ageGroup}.
Địa chỉ mail của bạn là: ${mail}.
Số điện thoại của bạn là: ${number}.
`);
