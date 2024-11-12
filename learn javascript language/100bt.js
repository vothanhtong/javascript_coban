// BÀI 1: TÍNH TỔNG HAI SỐ 
const a = 5;
const b = 10;
cosole.log (a+b);
// yêu cầu người dùng nhập vào
const c = parseFloat(prompt("Nhập vào số thứ nhất (a):"));
const d = parseFloat(prompt("Nhập vào số thứ hai (b):"));
console.log("Tổng của hai số a và b là:", c + d);

// BÀI 2: KIỂM TRA SỐ CHẴN LẺ 
const s = prompt("Nhập vào số:");// Dòng 1: Khai báo biến s và gán giá trị từ hàm prompt
//  Dòng 2: Kiểm tra xem số s có phải là số chẵn không
if (s % 2 === 0) {    
    console.log("Đây là số chẵn");
// Dòng 4: Nếu s không phải là số chẵn, thì đó là số lẻ
} else {
    console.log("Đây là số lẻ");
}

// BÀI 3: Tính giai thừa của một số nguyên dương `n`
let v = parseInt(prompt("Nhập một số nguyên dương:"));
let factorial = 1;
for (let i = 1; i <= v; i++) {
    factorial *= i;
}
console.log(`Giai thừa của ${n} là ${factorial}`);


//  4. In ra các số chẵn từ 1 đến 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 5. Kiểm tra mật khẩu

let password = prompt("Nhập mật khẩu của bạn:");
if (password === "javascript") {
    console.log("Mật khẩu đúng");
} else {
    console.log("Mật khẩu sai");
}


// 6. Tính diện tích hình tròn có bán kính `r = 7`

let r = 7;
const pi = 3.14;
console.log("Diện tích hình tròn:", pi * r * r);


//  7. Kiểm tra xem một năm có phải là năm nhuận không

let year = parseInt(prompt("Nhập vào số năm:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Đây là năm nhuận");
} else {
    console.log("Đây không phải là năm nhuận");
}


// 8. Kiểm tra số nguyên tố

let num = parseInt(prompt("Nhập một số nguyên dương:"));
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Đây là số nguyên tố" : "Đây không phải là số nguyên tố");

// 9. Tính tổng các số chẵn từ 1 đến `n`

let n = parseInt(prompt("Nhập số nguyên dương n:"));
let sumEven = 0;
for (let i = 2; i <= n; i += 2) {
    sumEven += i;
}
console.log("Tổng các số chẵn từ 1 đến", n, "là:", sumEven);


// 10. In bảng cửu chương từ 1 đến 10

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-------------");
}

