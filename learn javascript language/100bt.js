// Bài 1: Viết hàm tính tổng hai số
// Tách phần tính tổng thành một hàm riêng, xử lý nhập số hợp lệ.

function sum(a, b) {
    return a + b;
}

function getTwoNumbersAndSum() {
    let a = parseFloat(prompt("Nhập số thứ nhất:"));
    let b = parseFloat(prompt("Nhập số thứ hai:"));

    if (isNaN(a) || isNaN(b)) {
        console.log("Vui lòng nhập số hợp lệ!");
    } else {
        console.log(`Tổng của ${a} và ${b} là: ${sum(a, b)}`);
    }
}

getTwoNumbersAndSum();




// Bài 2: Kiểm tra số chẵn lẻ
// Sử dụng hàm để kiểm tra và hiển thị kết quả.

function isEven(n) {
    return n % 2 === 0;
}

function checkEvenOdd() {
    let n = parseInt(prompt("Nhập một số nguyên:"));

    if (isNaN(n)) {
        console.log("Vui lòng nhập số hợp lệ!");
    } else {
        console.log(`${n} là số ${isEven(n) ? "chẵn" : "lẻ"}.`);
    }
}

checkEvenOdd();




// Bài 3: Tính giai thừa
// Sử dụng vòng lặp `for` thay vì đệ quy để tối ưu hiệu suất.

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function calculateFactorial() {
    let n = parseInt(prompt("Nhập số nguyên dương:"));

    if (isNaN(n) || n < 0) {
        console.log("Vui lòng nhập một số nguyên dương!");
    } else {
        console.log(`Giai thừa của ${n} là: ${factorial(n)}`);
    }
}

calculateFactorial();




// Bài 4: In các số chẵn từ 1 đến 20
// Dùng `Array.from()` để tạo danh sách nhanh hơn.

console.log("Các số chẵn từ 1 đến 20:", Array.from({length: 10}, (_, i) => (i + 1) * 2).join(", "));


// Bài 5: Kiểm tra mật khẩu
// Sử dụng `trim()` để loại bỏ khoảng trắng không cần thiết.

function checkPassword() {
    const correctPassword = "javascript";
    let input = prompt("Nhập mật khẩu:").trim();

    console.log(input === correctPassword ? "Mật khẩu đúng." : "Mật khẩu sai.");
}

checkPassword();

// Bài 6: Tính diện tích hình tròn
// Fix lỗi nhân `Math.PI * r  2` thành `Math.PI * r * r`.

function calculateCircleArea(r) {
    return (Math.PI * r * r).toFixed(2);
}

console.log(`Diện tích hình tròn bán kính 7 là: ${calculateCircleArea(7)}`);


// Bài 7: Kiểm tra năm nhuận
// Viết hàm kiểm tra năm nhuận.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkLeapYear() {
    let year = parseInt(prompt("Nhập một năm:"));

    if (isNaN(year)) {
        console.log("Vui lòng nhập một năm hợp lệ!");
    } else {
        console.log(`${year} là năm ${isLeapYear(year) ? "nhuận" : "không nhuận"}.`);
    }
}

checkLeapYear();

// Bài 8: Kiểm tra số nguyên tố
// Sử dụng tối ưu kiểm tra số nguyên tố.

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function checkPrimeNumber() {
    let num = parseInt(prompt("Nhập số nguyên dương:"));

    if (isNaN(num) || num < 2) {
        console.log("Vui lòng nhập số nguyên dương lớn hơn hoặc bằng 2!");
    } else {
        console.log(`${num} ${isPrime(num) ? "là" : "không phải là"} số nguyên tố.`);
    }
}

checkPrimeNumber();

// Bài 9: Tính tổng các số chẵn từ 1 đến n
// Sử dụng công thức tính nhanh tổng số chẵn.

function sumEvenNumbers(n) {
    let lastEven = n % 2 === 0 ? n : n - 1;
    return (lastEven / 2) * (lastEven / 2 + 1);
}

function calculateSumEven() {
    let n = parseInt(prompt("Nhập số nguyên dương:"));

    if (isNaN(n) || n <= 0) {
        console.log("Vui lòng nhập số hợp lệ!");
    } else {
        console.log(`Tổng các số chẵn từ 1 đến ${n} là: ${sumEvenNumbers(n)}`);
    }
}

calculateSumEven();

// Bài 10: In bảng cửu chương
// Sử dụng `map()` và `join()` để tối ưu việc hiển thị.

function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        console.log(`\nBảng cửu chương ${i}`);
        console.log(Array.from({length: 10}, (_, j) => `${i} x ${j + 1} = ${i * (j + 1)}`).join("\n"));
    }
}

printMultiplicationTable();