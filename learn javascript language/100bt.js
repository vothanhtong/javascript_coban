// BÀI 1: TÍNH TỔNG HAI SỐ 
const a = 5;
const b = 10;
console.log("Tổng của hai số a và b là:", a + b);

// Yêu cầu người dùng nhập vào
const c = parseFloat(prompt("Nhập vào số thứ nhất (a):"));
const d = parseFloat(prompt("Nhập vào số thứ hai (b):"));
console.log("Tổng của hai số bạn nhập là:", c + d);

// BÀI 2: KIỂM TRA SỐ CHẴN LẺ
const s = parseInt(prompt("Nhập vào một số:"));
if (s % 2 === 0) {
    console.log(`${s} là số chẵn.`);
} else {
    console.log(`${s} là số lẻ.`);
}

// BÀI 3: TÍNH GIAI THỪA CỦA MỘT SỐ
const v = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (v < 0) {
    console.log("Vui lòng nhập một số nguyên dương!");
} else {
    let factorial = 1;
    for (let i = 1; i <= v; i++) {
        factorial *= i;
    }
    console.log(`Giai thừa của ${v} là: ${factorial}`);
}

// BÀI 4: IN RA CÁC SỐ CHẴN TỪ 1 ĐẾN 20
console.log("Các số chẵn từ 1 đến 20 là:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// BÀI 5: KIỂM TRA MẬT KHẨU
const password = prompt("Nhập mật khẩu:");
if (password === "javascript") {
    console.log("Mật khẩu đúng.");
} else {
    console.log("Mật khẩu sai.");
}

// BÀI 6: TÍNH DIỆN TÍCH HÌNH TRÒN
const r = 7;
const pi = Math.PI;
console.log(`Diện tích hình tròn có bán kính ${r} là:`, pi * r ** 2);

// BÀI 7: KIỂM TRA NĂM NHUẬN
const year = parseInt(prompt("Nhập vào một năm:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} là năm nhuận.`);
} else {
    console.log(`${year} không phải là năm nhuận.`);
}

// BÀI 8: KIỂM TRA SỐ NGUYÊN TỐ
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
    console.log(isPrime ? `${num} là số nguyên tố.` : `${num} không phải là số nguyên tố.`);
}

// BÀI 9: TÍNH TỔNG CÁC SỐ CHẴN TỪ 1 ĐẾN N
const n = parseInt(prompt("Nhập vào số nguyên dương n:"));
if (n < 1) {
    console.log("Vui lòng nhập số lớn hơn 0.");
} else {
    let sumEven = 0;
    for (let i = 2; i <= n; i += 2) {
        sumEven += i;
    }
    console.log(`Tổng các số chẵn từ 1 đến ${n} là: ${sumEven}`);
}

// BÀI 10: IN BẢNG CỬU CHƯƠNG TỪ 1 ĐẾN 10
console.log("Bảng cửu chương từ 1 đến 10:");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-------------");
}
