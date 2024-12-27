// Bài 1: Tính tổng hai số
console.log("=== Bài 1: Tính tổng hai số ===");
const a = 5, b = 10;
console.log(`Tổng của a và b là: ${a + b}`);
const c = Number(prompt("Nhập vào số thứ nhất (a):"));
const d = Number(prompt("Nhập vào số thứ hai (b):"));
if (isNaN(c) || isNaN(d)) {
    console.log("Vui lòng nhập số hợp lệ!");
} else {
    console.log(`Tổng của hai số bạn nhập là: ${c + d}`);
}
console.log("\n");

// Bài 2: Kiểm tra số chẵn lẻ
console.log("=== Bài 2: Kiểm tra số chẵn lẻ ===");
const s = Number(prompt("Nhập vào một số:"));
if (isNaN(s)) {
    console.log("Vui lòng nhập một số hợp lệ!");
} else {
    console.log(`${s} là số ${s % 2 === 0 ? "chẵn" : "lẻ"}.`);
}
console.log("\n");

// Bài 3: Tính giai thừa
console.log("=== Bài 3: Tính giai thừa ===");
const v = Number(prompt("Nhập vào một số nguyên dương:"));
if (isNaN(v) || v < 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {
    let factorial = 1;
    for (let i = 1; i <= v; i++) factorial *= i;
    console.log(`Giai thừa của ${v} là: ${factorial}`);
}
console.log("\n");

// Bài 4: In các số chẵn từ 1 đến 20
console.log("=== Bài 4: In các số chẵn từ 1 đến 20 ===");
for (let i = 2; i <= 20; i += 2) console.log(i);
console.log("\n");

// Bài 5: Kiểm tra mật khẩu
console.log("=== Bài 5: Kiểm tra mật khẩu ===");
const password = prompt("Nhập mật khẩu:");
console.log(password === "javascript" ? "Mật khẩu đúng." : "Mật khẩu sai.");
console.log("\n");

// Bài 6: Tính diện tích hình tròn
console.log("=== Bài 6: Tính diện tích hình tròn ===");
const r = 7;
console.log(`Diện tích hình tròn bán kính ${r} là: ${(Math.PI * r ** 2).toFixed(2)}`);
console.log("\n");

// Bài 7: Kiểm tra năm nhuận
console.log("=== Bài 7: Kiểm tra năm nhuận ===");
const year = Number(prompt("Nhập vào một năm:"));
if (isNaN(year)) {
    console.log("Vui lòng nhập một năm hợp lệ!");
} else {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(`${year} là năm ${isLeapYear ? "nhuận" : "không phải năm nhuận"}.`);
}
console.log("\n");

// Bài 8: Kiểm tra số nguyên tố
console.log("=== Bài 8: Kiểm tra số nguyên tố ===");
const num = Number(prompt("Nhập vào một số nguyên dương:"));
if (isNaN(num) || num < 2) {
    console.log("Vui lòng nhập một số nguyên dương lớn hơn hoặc bằng 2!");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${num} ${isPrime ? "là" : "không phải là"} số nguyên tố.`);
}
console.log("\n");

// Bài 9: Tính tổng các số chẵn từ 1 đến n
console.log("=== Bài 9: Tính tổng các số chẵn từ 1 đến n ===");
const n = Number(prompt("Nhập vào số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {
    let sumEven = 0;
    for (let i = 2; i <= n; i += 2) sumEven += i;
    console.log(`Tổng các số chẵn từ 1 đến ${n} là: ${sumEven}`);
}
console.log("\n");

// Bài 10: In bảng cửu chương từ 1 đến 10
console.log("=== Bài 10: In bảng cửu chương từ 1 đến 10 ===");
for (let i = 1; i <= 10; i++) {
    console.log(`--- Bảng cửu chương ${i} ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------------------------");
}
