
// Bài 1: Tính Tổng và Kiểm Tra Số Chẵn Lẻ

// 1. Tính tổng hai số do người dùng nhập vào:
    
    const t = parseFloat(prompt("Nhập số thứ nhất:"));
    const m = parseFloat(prompt("Nhập số thứ hai:"));
    console.log("Tổng của hai số là:", t + m);

// 2. Kiểm tra chẵn lẻ của một số:

    const number = parseInt(prompt("Nhập một số:"));
    if (number % 2 === 0) {
        console.log("Số " + number + " là số chẵn.");
    } else {
        console.log("Số " + number + " là số lẻ.");
    }


// Bài 2: Các Vòng Lặp Cơ Bản

// 1. In các số từ 1 đến 10:
   
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

// 2. In các số chẵn từ 1 đến 20:
   
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
    

// 3. Tính tổng các số từ 1 đến 100:
   
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("Tổng từ 1 đến 100 là:", sum);


//  Bài 3: Các Phép Toán và Kiểm Tra Năm Nhuận

// 1. Kiểm tra năm nhuận:

    const year = parseInt(prompt("Nhập một năm:"));
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Năm " + year + " là năm nhuận.");
    } else {
        console.log("Năm " + year + " không phải là năm nhuận.");
    }


// 2. Tính diện tích hình tròn với bán kính cho trước:

    const r = 7;
    const pi = Math.PI;
    console.log("Diện tích hình tròn là:", pi * r * r);


// Bài 4: Kiểm Tra Điều Kiện và Phân Loại

// 1. Kiểm tra mật khẩu người dùng:
    
    const password = prompt("Nhập mật khẩu:");
    console.log(password === "javascript" ? "Mật khẩu đúng" : "Mật khẩu sai");


// 2. Xác định độ tuổi:

    const age = parseInt(prompt("Nhập tuổi của bạn:"));
    console.log(age < 13 ? "Trẻ em" : "Người lớn");
    

// Bài 5: Các Tính Toán và Kiểm Tra Số Nguyên Tố

// 1. Kiểm tra số nguyên tố:
    
    const num = parseInt(prompt("Nhập một số nguyên dương:"));
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? "Là số nguyên tố" : "Không phải là số nguyên tố");


// 2.Tính giai thừa của một số:
    
    const n = parseInt(prompt("Nhập một số nguyên dương:"));
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`Giai thừa của ${n} là: ${factorial}`);
    

//  Bài 6: Thực Hành với Các Toán Tử

// 1. Chia lấy phần dư:
    
    const a = 10, b = 3;
    console.log("Phần dư của", a, "chia cho", b, "là:", a % b);


// 2. Tính lũy thừa:
    
    const base = 2, exponent = 3;
    console.log(base + " mũ " + exponent + " là:", base ** exponent);
    

//  Bài 7: Sử Dụng Cấu Trúc `switch-case` để Xác Định Ngày

// 1. Kiểm tra ngày trong tuần dựa trên số nhập vào:
    
    const day = parseInt(prompt("Nhập ngày trong tuần (1-7):"));
    switch (day) {
        case 1: console.log("Thứ 2"); break;
        case 2: console.log("Thứ 3"); break;
        case 3: console.log("Thứ 4"); break;
        case 4: console.log("Thứ 5"); break;
        case 5: console.log("Thứ 6"); break;
        case 6: console.log("Thứ 7"); break;
        case 7: console.log("Chủ Nhật"); break;
        default: console.log("Ngày không hợp lệ");
    }
    

