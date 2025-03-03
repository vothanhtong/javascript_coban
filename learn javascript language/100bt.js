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

// Bài 11: Tính tổng các chữ số của một số nguyên dương
function sumOfDigits(n) {
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

function getSumOfDigits() {
    let n = parseInt(prompt("Nhập số nguyên dương:"));
    if (isNaN(n) || n <= 0) {
        console.log("Vui lòng nhập số nguyên dương hợp lệ!");
    } else {
        console.log(`Tổng các chữ số của ${n} là: ${sumOfDigits(n)}`);
    }
}

getSumOfDigits();


// Bài 12: Tìm số Fibonacci thứ n
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return n === 0 ? a : b;
}

function getFibonacci() {
    let n = parseInt(prompt("Nhập số nguyên dương:"));
    if (isNaN(n) || n < 0) {
        console.log("Vui lòng nhập số nguyên không âm!");
    } else {
        console.log(`Số Fibonacci thứ ${n} là: ${fibonacci(n)}`);
    }
}

getFibonacci();


// Bài 13: Đảo ngược số nguyên
function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}

function getReversedNumber() {
    let n = parseInt(prompt("Nhập số nguyên:"));
    if (isNaN(n)) {
        console.log("Vui lòng nhập số hợp lệ!");
    } else {
        console.log(`Số đảo ngược của ${n} là: ${reverseNumber(n)}`);
    }
}

getReversedNumber();


// Bài 14: Kiểm tra số đối xứng (Palindrome Number)
function isPalindromeNumber(n) {
    let str = n.toString();
    return str === str.split('').reverse().join('');
}

function checkPalindromeNumber() {
    let n = parseInt(prompt("Nhập số nguyên:"));
    if (isNaN(n)) {
        console.log("Vui lòng nhập số hợp lệ!");
    } else {
        console.log(`${n} ${isPalindromeNumber(n) ? "là" : "không phải"} số đối xứng.`);
    }
}

checkPalindromeNumber();


// Bài 15: In tam giác số Pascal
function generatePascalsTriangle(rows) {
    let triangle = [[1]];
    for (let i = 1; i < rows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [1];
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }
    return triangle;
}

function printPascalsTriangle() {
    let rows = parseInt(prompt("Nhập số hàng của tam giác Pascal:"));
    if (isNaN(rows) || rows <= 0) {
        console.log("Vui lòng nhập số nguyên dương!");
    } else {
        console.log("Tam giác Pascal:");
        generatePascalsTriangle(rows).forEach(row => console.log(row.join(" ")));
    }
}

printPascalsTriangle();


// Bài 16: Tìm số lớn thứ hai trong mảng
function secondLargest(arr) {
    let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

function findSecondLargest() {
    let arr = prompt("Nhập mảng số nguyên (cách nhau bằng dấu phẩy):")
        .split(",")
        .map(Number);
    
    let result = secondLargest(arr);
    console.log(result !== null ? `Số lớn thứ hai là: ${result}` : "Không có số lớn thứ hai hợp lệ.");
}

findSecondLargest();


// Bài 17: Kiểm tra một số có phải số hoàn hảo (Perfect Number) không
function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

function checkPerfectNumber() {
    let n = parseInt(prompt("Nhập số nguyên dương:"));
    if (isNaN(n) || n <= 0) {
        console.log("Vui lòng nhập số nguyên dương!");
    } else {
        console.log(`${n} ${isPerfectNumber(n) ? "là" : "không phải là"} số hoàn hảo.`);
    }
}

checkPerfectNumber();


// Bài 18: Chuyển đổi số thập phân sang nhị phân
function decimalToBinary(n) {
    return n.toString(2);
}

function convertDecimalToBinary() {
    let n = parseInt(prompt("Nhập số nguyên dương:"));
    if (isNaN(n) || n < 0) {
        console.log("Vui lòng nhập số nguyên dương hợp lệ!");
    } else {
        console.log(`Số nhị phân của ${n} là: ${decimalToBinary(n)}`);
    }
}

convertDecimalToBinary();


// Bài 19: Đếm số nguyên tố trong một khoảng
function countPrimesInRange(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}

function getPrimeCount() {
    let start = parseInt(prompt("Nhập số bắt đầu:"));
    let end = parseInt(prompt("Nhập số kết thúc:"));

    if (isNaN(start) || isNaN(end) || start > end) {
        console.log("Vui lòng nhập khoảng hợp lệ!");
    } else {
        console.log(`Số lượng số nguyên tố trong khoảng ${start}-${end} là: ${countPrimesInRange(start, end)}`);
    }
}

getPrimeCount();


// Bài 20: Kiểm tra chuỗi đối xứng (Palindrome String)
function isPalindromeString(str) {
    let cleanStr = str.replace(/\s+/g, "").toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

function checkPalindromeString() {
    let str = prompt("Nhập chuỗi:").trim();
    console.log(`"${str}" ${isPalindromeString(str) ? "là" : "không phải"} chuỗi đối xứng.`);
}

checkPalindromeString();

// Bài 1: Viết hàm tính tổng hai số
// Tách phần tính tổng thành một hàm riêng, xử lý nhập số hợp lệ.

function sum(a, b) {
    return a + b;
}

function getTwoNumbersAndSum() {
    let a = parseFloat(prompt("Nhập số thứ nhất:"));
    let b = parseFloat(prompt("Nhập số thứ hai:"));

    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập số hợp lệ!");
    } else {
        alert(`Tổng của ${a} và ${b} là: ${sum(a, b)}`);
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
        alert("Vui lòng nhập số hợp lệ!");
    } else {
        alert(`${n} là số ${isEven(n) ? "chẵn" : "lẻ"}.`);
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
        alert("Vui lòng nhập một số nguyên dương!");
    } else {
        alert(`Giai thừa của ${n} là: ${factorial(n)}`);
    }
}

calculateFactorial();

// Bài 4: In các số chẵn từ 1 đến 20
alert("Các số chẵn từ 1 đến 20: " + Array.from({length: 10}, (_, i) => (i + 1) * 2).join(", "));

// Bài 5: Kiểm tra mật khẩu
function checkPassword() {
    const correctPassword = "javascript";
    let input = prompt("Nhập mật khẩu:").trim();
    alert(input === correctPassword ? "Mật khẩu đúng." : "Mật khẩu sai.");
}

checkPassword();

// Bài 6: Tính diện tích hình tròn
function calculateCircleArea(r) {
    return (Math.PI * r * r).toFixed(2);
}

alert(`Diện tích hình tròn bán kính 7 là: ${calculateCircleArea(7)}`);

// Bài 7: Kiểm tra năm nhuận
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkLeapYear() {
    let year = parseInt(prompt("Nhập một năm:"));

    if (isNaN(year)) {
        alert("Vui lòng nhập một năm hợp lệ!");
    } else {
        alert(`${year} là năm ${isLeapYear(year) ? "nhuận" : "không nhuận"}.`);
    }
}

checkLeapYear();

// Bài 8: Kiểm tra số nguyên tố
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
        alert("Vui lòng nhập số nguyên dương lớn hơn hoặc bằng 2!");
    } else {
        alert(`${num} ${isPrime(num) ? "là" : "không phải là"} số nguyên tố.`);
    }
}

checkPrimeNumber();

// Bài 9: Kiểm tra số Fibonacci
function isFibonacci(n) {
    let a = 0, b = 1, temp;
    while (b < n) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b === n || n === 0;
}

function checkFibonacci() {
    let num = parseInt(prompt("Nhập số nguyên dương:"));
    if (isNaN(num) || num < 0) {
        alert("Vui lòng nhập số nguyên dương!");
    } else {
        alert(`${num} ${isFibonacci(num) ? "là" : "không phải là"} số Fibonacci.`);
    }
}

checkFibonacci();

// Bài 10: Kiểm tra số Armstrong
function isArmstrong(n) {
    let str = n.toString();
    let sum = str.split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), str.length), 0);
    return sum === n;
}

function checkArmstrong() {
    let num = parseInt(prompt("Nhập số nguyên dương:"));
    if (isNaN(num) || num < 0) {
        alert("Vui lòng nhập số nguyên dương!");
    } else {
        alert(`${num} ${isArmstrong(num) ? "là" : "không phải là"} số Armstrong.`);
    }
}

checkArmstrong();

