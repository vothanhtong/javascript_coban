// Chương 6: Cấu Trúc Điều Khiển Vòng Lặp trong JavaScript
// Trong JavaScript, cấu trúc vòng lặp giúp lặp lại một đoạn mã nhiều lần dựa trên điều kiện nhất định.
//  Dưới đây là chi tiết về các vòng lặp thường dùng:

// 1. Vòng lặp `for`
// - Dùng khi số lần lặp đã biết trước.
// - Cú pháp:  

for (khởi_tạo; điều_kiện; bước_lặp) {
    // Các câu lệnh bên trong vòng lặp
}


// - Ví dụ: In các số từ 1 đến 5:  

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 2. Vòng lặp `while`
// - Dùng khi số lần lặp chưa biết trước, chỉ phụ thuộc vào điều kiện.
// - Cú pháp:  

while (điều_kiện) {
    // Các câu lệnh bên trong vòng lặp
}


// - Ví dụ: Lặp cho đến khi một số lớn hơn 10:  

let numm = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

//  3. Vòng lặp `do...while`
// - Tương tự `while`, nhưng luôn thực hiện ít nhất một lần trước khi kiểm tra điều kiện.
// - Cú pháp:  

do {
    // Các câu lệnh bên trong vòng lặp
} while (điều_kiện);
// - Ví dụ:  

let num = 0;
do {
    console.log(num);
    num++;
} while (num <= 10);


//  4. Sử dụng câu lệnh `break` và `continue`
//  a. `break`
// - Dùng để thoát khỏi vòng lặp ngay lập tức.

// - Ví dụ:  

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i); // In từ 1 đến 4
}


//  b. `continue`
// - Dùng để bỏ qua lần lặp hiện tại và chuyển sang lần lặp tiếp theo.

// - Ví dụ:  

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; // Bỏ qua số chẵn
    console.log(i); // In các số lẻ
}


//  5. Lồng Vòng Lặp
// - Vòng lặp có thể được lồng bên trong vòng lặp khác.

// - Ví dụ: In bảng cửu chương:  

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 6. Thực hành
// 1. Viết chương trình in các số từ 10 đến 1 bằng vòng lặp `for`.
// 2. Dùng `while` để tính tổng các số từ 1 đến 100.
// 3. Viết chương trình lặp qua một mảng và in từng phần tử của nó.
                                            // Máy Tính Cơ Bản (Cộng, Trừ, Nhân, Chia)

// Các số đã được gán sẵn
let num1 = 10;
let num2 = 5;

// Hàm cộng
function add(a, b) {
    return a + b;
}

// Hàm trừ
function subtract(a, b) {
    return a - b;
}

// Hàm nhân
function multiply(a, b) {
    return a * b;
}

// Hàm chia
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Không thể chia cho 0!";
    }
}

// Thực hiện các phép toán
console.log("Kết quả phép cộng: " + add(num1, num2));
console.log("Kết quả phép trừ: " + subtract(num1, num2));
console.log("Kết quả phép nhân: " + multiply(num1, num2));
console.log("Kết quả phép chia: " + divide(num1, num2));
