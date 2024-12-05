//  I. LÝ THUYẾT VỀ HÀM
// 1. Khái niệm về Hàm
console.log("Hàm là khối mã thực thi một nhiệm vụ cụ thể.");

// 2. Cách khai báo hàm
// a. Hàm thường
function tinhTong(a, b) {
    return a + b;
}
console.log("Hàm thường - Tổng của 3 và 5:", tinhTong(3, 5));

// b. Hàm ẩn danh
const hamAnDanh = function(x) {
    return x * 2;
};
console.log("Hàm ẩn danh - Nhân đôi 4:", hamAnDanh(4));

// c. Arrow Function
const hamMuiTen = (x) => x * x;
console.log("Arrow Function - Bình phương của 5:", hamMuiTen(5));
// 3. Tham số và giá trị trả về
function chaoNguoiDung(name = "Bạn") {
    return `Xin chào, ${name}!`;
}
console.log(chaoNguoiDung());
console.log(chaoNguoiDung("Tòng"));

// Hàm với số lượng tham số không cố định
function tinhTongNhieuSo(...so) {
    return so.reduce((tong, giaTri) => tong + giaTri, 0);
}
console.log("Rest Parameters - Tổng của 1, 2, 3, 4:", tinhTongNhieuSo(1, 2, 3, 4));
// 4. Callback Function
function chayHam(callback) {
    console.log("Trước khi gọi hàm callback");
    callback();
    console.log("Sau khi gọi hàm callback");
}
function thongBao() {
    console.log("Đây là hàm callback.");
}
chayHam(thongBao);

// 5. Hàm tự chạy (IIFE)
(function() {
    console.log("Hàm tự chạy (IIFE)!");
})();

//  II. BÀI TẬP THỰC HÀNH 
// Bài 1: Tính tổng hai số
console.log("Bài 1: Tổng của 3 và 5 là:", tinhTong(3, 5));
// Bài 2: Kiểm tra số chẵn
function kiemTraChan(n) {
    return n % 2 === 0;
}
console.log("Bài 2: 4 có phải số chẵn không?", kiemTraChan(4));
// Bài 3: Tính giai thừa
function giaiThua(n) {
    if (n === 0) return 1;
    return n * giaiThua(n - 1);
}
console.log("Bài 3: Giai thừa của 5 là:", giaiThua(5));
// Bài 4: Kiểm tra số nguyên tố
function kiemTraNguyenTo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Bài 4: 7 có phải số nguyên tố không?", kiemTraNguyenTo(7));
// Bài 5: In bảng cửu chương
function bangCuuChuong(n) {
    console.log(`Bài 5: Bảng cửu chương ${n}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
bangCuuChuong(5);
// Bài 6: Đảo ngược chuỗi
function daoNguocChuoi(str) {
    return str.split("").reverse().join("");
}
console.log("Bài 6: Đảo ngược 'hello' là:", daoNguocChuoi("hello"));
// Bài 7: Tìm số lớn nhất trong mảng
function soLonNhat(arr) {
    return Math.max(...arr);
}
console.log("Bài 7: Số lớn nhất trong [1, 2, 3, 4, 5] là:", soLonNhat([1, 2, 3, 4, 5]));
// Bài 8: Đếm số lần xuất hiện của ký tự
function demKyTu(str, kyTu) {
    let dem = 0;
    for (let char of str) {
        if (char === kyTu) dem++;
    }
    return dem;
}
console.log("Bài 8: 'o' xuất hiện trong 'hello world' bao nhiêu lần?", demKyTu("hello world", "o"));
// Bài 9: Tính tổng các số trong mảng
function tongMang(arr) {
    return arr.reduce((tong, giaTri) => tong + giaTri, 0);
}
console.log("Bài 9: Tổng các số trong [1, 2, 3, 4] là:", tongMang([1, 2, 3, 4]));
// Bài 10: Kiểm tra chuỗi palindrome
function kiemTraPalindrome(str) {
    const daoNguoc = str.split("").reverse().join("");
    return str === daoNguoc;
}
console.log("Bài 10: 'madam' có phải là palindrome không?", kiemTraPalindrome("madam"));
console.log("Bài 10: 'hello' có phải là palindrome không?", kiemTraPalindrome("hello"));
