//  I. LÝ THUYẾT VỀ HÀM
// 1. Khái niệm về Hàm
console.log("🔹 Hàm là một khối mã thực thi một nhiệm vụ cụ thể.");

// 2. Cách khai báo hàm
// a. Hàm thường
function tinhTong(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "❌ Lỗi: Nhập số hợp lệ!";
    return a + b;
}
console.log("✅ Hàm thường - Tổng của 3 và 5:", tinhTong(3, 5));

// b. Hàm ẩn danh
const hamAnDanh = function(x) {
    return typeof x === "number" ? x * 2 : "❌ Lỗi: Nhập số hợp lệ!";
};
console.log("✅ Hàm ẩn danh - Nhân đôi 4:", hamAnDanh(4));

// c. Arrow Function
const hamMuiTen = (x) => (typeof x === "number" ? x ** 2 : "❌ Lỗi: Nhập số hợp lệ!");
console.log("✅ Arrow Function - Bình phương của 5:", hamMuiTen(5));

// 3. Tham số và giá trị trả về
function chaoNguoiDung(name = "Bạn") {
    return `🌟 Xin chào, ${name}!`;
}
console.log(chaoNguoiDung());
console.log(chaoNguoiDung("Tòng"));

// Hàm với số lượng tham số không cố định
const tinhTongNhieuSo = (...so) => so.every(num => typeof num === "number") 
    ? so.reduce((tong, giaTri) => tong + giaTri, 0) 
    : "❌ Lỗi: Nhập số hợp lệ!";
console.log("✅ Tổng của 1, 2, 3, 4:", tinhTongNhieuSo(1, 2, 3, 4));

// 4. Callback Function
const chayHam = (callback) => {
    console.log("📌 Trước khi gọi hàm callback");
    callback();
    console.log("📌 Sau khi gọi hàm callback");
};
const thongBao = () => console.log("🔔 Đây là hàm callback.");
chayHam(thongBao);

// 5. Hàm tự chạy (IIFE)
(() => console.log("🚀 Hàm tự chạy (IIFE)!"))();

//  II. BÀI TẬP THỰC HÀNH 
// Bài 1: Tính tổng hai số
console.log("🎯 Bài 1: Tổng của 3 và 5 là:", tinhTong(3, 5));

// Bài 2: Kiểm tra số chẵn
const kiemTraChan = (n) => (typeof n === "number" ? n % 2 === 0 : "❌ Lỗi: Nhập số hợp lệ!");
console.log("🎯 Bài 2: 4 có phải số chẵn không?", kiemTraChan(4));

// Bài 3: Tính giai thừa
const giaiThua = (n) => (n === 0 ? 1 : [...Array(n).keys()].map(i => i + 1).reduce((a, b) => a * b, 1));
console.log("🎯 Bài 3: Giai thừa của 5 là:", giaiThua(5));

// Bài 4: Kiểm tra số nguyên tố
const kiemTraNguyenTo = (n) => {
    if (n <= 1 || typeof n !== "number") return false;
    return ![...Array(n - 2).keys()].map(i => i + 2).some(i => n % i === 0);
};
console.log("🎯 Bài 4: 7 có phải số nguyên tố không?", kiemTraNguyenTo(7));

// Bài 5: In bảng cửu chương (Sử dụng console.table)
const bangCuuChuong = (n) => {
    console.log(`📌 Bảng cửu chương ${n}`);
    console.table([...Array(10).keys()].map(i => `${n} x ${i + 1} = ${n * (i + 1)}`));
};
bangCuuChuong(5);

// Bài 6: Đảo ngược chuỗi
const daoNguocChuoi = (str) => (typeof str === "string" ? [...str].reverse().join("") : "❌ Lỗi: Nhập chuỗi hợp lệ!");
console.log("🎯 Bài 6: Đảo ngược 'hello' là:", daoNguocChuoi("hello"));

// Bài 7: Tìm số lớn nhất trong mảng
const soLonNhat = (arr) => (arr.every(num => typeof num === "number") ? Math.max(...arr) : "❌ Lỗi: Nhập mảng số hợp lệ!");
console.log("🎯 Bài 7: Số lớn nhất trong [1, 2, 3, 4, 5] là:", soLonNhat([1, 2, 3, 4, 5]));

// Bài 8: Đếm số lần xuất hiện của ký tự
const demKyTu = (str, kyTu) => {
    if (typeof str !== "string" || typeof kyTu !== "string" || kyTu.length !== 1) return "❌ Lỗi: Nhập đúng dữ liệu!";
    return [...str].filter(char => char === kyTu).length;
};
console.log("🎯 Bài 8: 'o' xuất hiện trong 'hello world' bao nhiêu lần?", demKyTu("hello world", "o"));

// Bài 9: Tính tổng các số trong mảng
const tongMang = (arr) => (arr.every(num => typeof num === "number") ? arr.reduce((tong, giaTri) => tong + giaTri, 0) : "❌ Lỗi: Nhập mảng số hợp lệ!");
console.log("🎯 Bài 9: Tổng các số trong [1, 2, 3, 4] là:", tongMang([1, 2, 3, 4]));

// Bài 10: Kiểm tra chuỗi palindrome
const kiemTraPalindrome = (str) => (typeof str === "string" ? str === [...str].reverse().join("") : "❌ Lỗi: Nhập chuỗi hợp lệ!");
console.log("🎯 Bài 10: 'madam' có phải là palindrome không?", kiemTraPalindrome("madam"));
console.log("🎯 Bài 10: 'hello' có phải là palindrome không?", kiemTraPalindrome("hello"));
