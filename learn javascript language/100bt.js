// Bài 1: Tính tổng hai số
console.log("Bài 1: Tính tổng hai số");
const a = 5, b = 10;
console.log(`Tổng của a và b là: ${a + b}`);
const c = parseFloat(prompt("Nhập vào số thứ nhất (a):"));
const d = parseFloat(prompt("Nhập vào số thứ hai (b):"));
console.log(`Tổng của hai số bạn nhập là: ${c + d}`);

// Bài 2: Kiểm tra số chẵn lẻ
console.log("\nBài 2: Kiểm tra số chẵn lẻ");
const s = parseInt(prompt("Nhập vào một số:"));
console.log(`${s} là số ${s % 2 === 0 ? "chẵn" : "lẻ"}.`);

// Bài 3: Tính giai thừa
console.log("\nBài 3: Tính giai thừa");
const v = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (v < 0) {
    console.log("Vui lòng nhập một số nguyên dương!");
} else {
    let factorial = 1;
    for (let i = 1; i <= v; i++) factorial *= i;
    console.log(`Giai thừa của ${v} là: ${factorial}`);
}

// Bài 4: In các số chẵn từ 1 đến 20
console.log("\nBài 4: In các số chẵn từ 1 đến 20");
for (let i = 2; i <= 20; i += 2) console.log(i);

// Bài 5: Kiểm tra mật khẩu
console.log("\nBài 5: Kiểm tra mật khẩu");
const password = prompt("Nhập mật khẩu:");
console.log(password === "javascript" ? "Mật khẩu đúng." : "Mật khẩu sai.");

// Bài 6: Tính diện tích hình tròn
console.log("\nBài 6: Tính diện tích hình tròn");
const r = 7;
console.log(`Diện tích hình tròn bán kính ${r} là: ${(Math.PI * r ** 2).toFixed(2)}`);

// Bài 7: Kiểm tra năm nhuận
console.log("\nBài 7: Kiểm tra năm nhuận");
const year = parseInt(prompt("Nhập vào một năm:"));
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`${year} là năm ${isLeapYear ? "nhuận" : "không phải năm nhuận"}.`);

// Bài 8: Kiểm tra số nguyên tố
console.log("\nBài 8: Kiểm tra số nguyên tố");
const num = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (num < 2) {
    console.log(`${num} không phải là số nguyên tố.`);
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

// Bài 9: Tính tổng các số chẵn từ 1 đến n
console.log("\nBài 9: Tính tổng các số chẵn từ 1 đến n");
const n = parseInt(prompt("Nhập vào số nguyên dương n:"));
let sumEven = 0;
for (let i = 2; i <= n; i += 2) sumEven += i;
console.log(`Tổng các số chẵn từ 1 đến ${n} là: ${sumEven}`);

// Bài 10: In bảng cửu chương từ 1 đến 10
console.log("\nBài 10: In bảng cửu chương từ 1 đến 10");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-------------");
}
