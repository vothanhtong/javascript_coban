// Chương 6: Cấu Trúc Điều Khiển Vòng Lặp trong JavaScript

// 1. Vòng lặp `for`: In số từ 1 đến 5
for (let i = 1; i <= 5; i++) console.log(i);

// 2. Vòng lặp `while`: Lặp đến khi số > 10
let num = 0;
while (num <= 10) console.log(num++);

// 3. Vòng lặp `do...while`: Luôn chạy ít nhất 1 lần
let count = 0;
do {
    console.log(count);
} while (++count <= 10);

// 4. `break` và `continue`
for (let i = 1; i <= 10; i++) {
    if (i === 5) break; // Dừng khi i = 5
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; // Bỏ qua số chẵn
    console.log(i);
}

// 5. Lồng vòng lặp: Bảng cửu chương từ 1 đến 5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 6. Bài tập thực hành
// a. In số từ 10 đến 1
for (let i = 10; i >= 1; i--) console.log(i);

// b. Tính tổng từ 1 đến 100 bằng `while`
let sum = 0, numToSum = 1;
while (numToSum <= 100) sum += numToSum++;
console.log("Tổng từ 1 đến 100: " + sum);

// c. Duyệt mảng và in phần tử
let array = [1, 2, 3, 4, 5];
array.forEach((item, index) => console.log(`Phần tử ${index}: ${item}`));

// 🔥 Máy Tính Cơ Bản với `switch-case`
function calculator() {
    let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
    let num2 = parseFloat(prompt("Nhập số thứ hai:"));
    let operation = prompt("Chọn phép toán (+, -, *, /):");

    switch (operation) {
        case '+': console.log(`Kết quả: ${num1 + num2}`); break;
        case '-': console.log(`Kết quả: ${num1 - num2}`); break;
        case '*': console.log(`Kết quả: ${num1 * num2}`); break;
        case '/': console.log(num2 !== 0 ? `Kết quả: ${num1 / num2}` : "Không thể chia cho 0!"); break;
        default: console.log("Phép toán không hợp lệ!");
    }
}

// Gọi máy tính
calculator();
