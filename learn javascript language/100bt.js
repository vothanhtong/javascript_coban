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


//11. Bài tập về toán tử chia lấy phần dư (%) (4 bài)

// Bài 1: Chia lấy phần dư của a = 10 cho b = 3.
let i = 10, f = 3;
console.log(i % f); // Output: 1

// Bài 2: Chia lấy phần dư với số âm, a = -15 chia cho b = 4.
a = -15;
b = 4;
console.log(a % b); // Output: -3

// Bài 3: Chia lấy phần dư với số lớn, a = 12345 chia cho b = 10.
a = 12345;
b = 10;
console.log(a % b); // Output: 5

// Bài 4: Chia lấy phần dư với số nhỏ, a = 7 chia cho b = 5.
a = 7;
b = 5;
console.log(a % b); // Output: 2

// 12. Bài tập về toán tử lũy thừa (**) (5 bài)

// Bài 1: Tính lũy thừa a = 2 mũ b = 3.
a = 2;
b = 3;
console.log(a ** b); // Output: 8

// Bài 2: Lũy thừa số âm, a = 5 mũ b = -1.
a = 5;
b = -1;
console.log(a ** b); // Output: 0.2

// Bài 3: Lũy thừa số lớn, a = 10 mũ b = 4.
a = 10;
b = 4;
console.log(a ** b); // Output: 10000

// Bài 4: Lũy thừa số nhỏ, a = 3 mũ b = 2.
a = 3;
b = 2;
console.log(a ** b); // Output: 9

// Bài 5: Lũy thừa của một, a = 7 mũ b = 0.
a = 7;
b = 0;
console.log(a ** b); // Output: 1


//13. Bài tập về toán tử chia lấy phần nguyên (//) (5 bài)

// Bài 1: Chia lấy phần nguyên của a = 10 cho b = 3.
a = 10;
b = 3;
console.log(Math.floor(a / b)); // Output: 3

// Bài 2: Chia lấy phần nguyên với số âm, a = -15 chia cho b = 4.
a = -15;
b = 4;
console.log(Math.floor(a / b)); // Output: -4

// Bài 3: Chia lấy phần nguyên với số lớn, a = 12345 chia cho b = 10.
a = 12345;
b = 10;
console.log(Math.floor(a / b)); // Output: 1234

// Bài 4: Chia lấy phần nguyên với số nhỏ, a = 7 chia cho b = 5.
a = 7;
b = 5;
console.log(Math.floor(a / b)); // Output: 1

// Bài 5: Chia lấy phần nguyên với số nhỏ hơn một, a = 7 chia cho b = 1.
a = 7;
b = 1;
console.log(Math.floor(a / b)); // Output: 7


// 14. Thực hành luyện tập cấu trúc điều kiện (27 bài)

// Bài 1: Kiểm tra số chẵn hay lẻ.
let so = parseInt(prompt("Nhập vào một số:"));
console.log(so % 2 === 0 ? `${so} là số chẵn.` : `${so} là số lẻ.`);

// Bài 2: Kiểm tra năm nhuận.
let nam = parseInt(prompt("Nhập vào một năm:"));
console.log((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0) ? `${nam} là năm nhuận.` : `${nam} không phải là năm nhuận.`);

// Bài 3: Kiểm tra điểm đậu/rớt.
let diem = parseInt(prompt("Nhập điểm của bạn:"));
console.log(diem >= 50 ? "Đậu" : "Rớt");

// Bài 4: Kiểm tra mật khẩu.
let matkhau = prompt("Nhập mật khẩu:");
console.log(matkhau === "python" ? "Mật khẩu đúng" : "Mật khẩu không đúng");

// Bài 5: Kiểm tra số chia hết cho 3 và 5.
let x = parseInt(prompt("Nhập một số:"));
console.log((x % 3 === 0 && x % 5 === 0) ? "Chia hết cho 3 và 5" : "Không chia hết cho 3 và 5");

// Bài 6: Kiểm tra số chẵn/lẻ dùng shorthand.
let g = parseInt(prompt("Nhập một số:"));
console.log(g % 2 === 0 ? "Chẵn" : "Lẻ");

// Bài 7: Kiểm tra độ tuổi.
let tuoi = parseInt(prompt("Nhập tuổi của bạn:"));
console.log(tuoi < 13 ? "Trẻ em" : "Không phải trẻ em");

// Bài 8: Kiểm tra chiều cao.
let chieucao = parseInt(prompt("Nhập chiều cao của bạn:"));
console.log(chieucao > 180 ? "Cao" : "Không cao");

// Bài 9: Kiểm tra nhiệt độ.
let nhiet_do = parseInt(prompt("Nhập nhiệt độ:"));
console.log(nhiet_do > 30 ? "Nóng" : "Không nóng");

// Bài 10: Kiểm tra mật khẩu.
let passw = prompt("Nhập mật khẩu:");
console.log(passw === "python" ? "Mật khẩu đúng" : "Mật khẩu sai");

// Bài 11: Kiểm tra tam giác (tam giác đều, cân, thường).
let canh1 = parseFloat(prompt("Nhập độ dài cạnh 1:"));
let canh2 = parseFloat(prompt("Nhập độ dài cạnh 2:"));
let canh3 = parseFloat(prompt("Nhập độ dài cạnh 3:"));
if (canh1 === canh2 && canh2 === canh3) {
    console.log("Tam giác đều");
} else if (canh1 === canh2 || canh2 === canh3 || canh1 === canh3) {
    console.log("Tam giác cân");
} else {
    console.log("Tam giác thường");
}

// Bài 12: Kiểm tra ngày trong tuần.
let ngay = parseInt(prompt("Nhập ngày (1-7):"));
switch (ngay) {
    case 1: console.log("Thứ 2"); break;
    case 2: console.log("Thứ 3"); break;
    case 3: console.log("Thứ 4"); break;
    case 4: console.log("Thứ 5"); break;
    case 5: console.log("Thứ 6"); break;
    case 6: console.log("Thứ 7"); break;
    case 7: console.log("Chủ Nhật"); break;
    default: console.log("Ngày không hợp lệ");
}

// Bài 13: Kiểm tra điểm đánh giá.
let diem_so = parseInt(prompt("Nhập điểm:"));
if (diem_so >= 90) {
    console.log("Xuất sắc");
} else if (diem_so >= 70) {
    console.log("Giỏi");
} else if (diem_so >= 50) {
    console.log("Khá");
} else {
    console.log("Trung bình");
}

// Bài 14: Kiểm tra giờ trong ngày.
let gio = parseInt(prompt("Nhập giờ (0-24):"));
if (gio >= 5 && gio <= 11) {
    console.log("Sáng");
} else if (gio >= 12 && gio <= 17) {
    console.log("Chiều");
} else if (gio >= 18 && gio <= 22) {
    console.log("Tối");
} else {
    console.log("Đêm");
}

// Bài 15: Kiểm tra chiều cao.
let chieu_cao = parseInt(prompt("Nhập chiều cao:"));
if (chieu_cao < 150) {
    console.log("Thấp");
} else if (chieu_cao <= 180) {
    console.log("Trung bình");
} else {
    console.log("Cao");
}


//                                                  điều kiện `if-else` trong JavaScript,
// 1. Kiểm tra số chẵn lẻ
// **Mô tả:** Nhập một số và kiểm tra xem số đó là chẵn hay lẻ.


let number = parseInt(prompt("Nhập một số: "));
if (number % 2 === 0) {
    console.log("Số " + number + " là số chẵn.");
} else {
    console.log("Số " + number + " là số lẻ.");
}

// 2. Kiểm tra năm nhuận
// Mô tả: Nhập một năm và kiểm tra xem đó có phải là năm nhuận không.

let year = parseInt(prompt("Nhập một năm: "));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Năm " + year + " là năm nhuận.");
} else {
    console.log("Năm " + year + " không phải là năm nhuận.");
}


// 3. Đánh giá điểm
// Mô tả: Nhập điểm của học sinh và đánh giá xem học sinh đậu hay rớt (điểm >= 50 thì đậu).

let score = parseInt(prompt("Nhập điểm của bạn: "));
if (score >= 50) {
    console.log("Bạn đậu!");
} else {
    console.log("Bạn rớt!");
}

// 4. Kiểm tra mật khẩu
// Mô tả: Yêu cầu người dùng nhập mật khẩu và kiểm tra xem mật khẩu có đúng không (`password` là `"javascript"`).


let password = prompt("Nhập mật khẩu của bạn:");
if (password === "javascript") {
    console.log("Mật khẩu đúng.");
} else {
    console.log("Mật khẩu sai.");
}


//  5. Kiểm tra số chia hết cho 3 và 5
// Mô tả: Nhập một số và kiểm tra xem số đó có chia hết cho cả 3 và 5 không.

let num = parseInt(prompt("Nhập một số: "));
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Số " + num + " chia hết cho cả 3 và 5.");
} else {
    console.log("Số " + num + " không chia hết cho cả 3 và 5.");
}

//  6. Xác định tuổi
// Mô tả: Hỏi tuổi người dùng, in ra "Trẻ em" nếu dưới 13 tuổi, ngược lại là "Không phải trẻ em."


let age = parseInt(prompt("Nhập tuổi của bạn: "));
if (age < 13) {
    console.log("Trẻ em");
} else {
    console.log("Không phải trẻ em");
}

// 7. Kiểm tra nhiệt độ
// Mô tả  Nhập nhiệt độ và kiểm tra xem nhiệt độ có nóng (trên 30°C) hay không.

let temperature = parseInt(prompt("Nhập nhiệt độ hiện tại: "));
if (temperature > 30) {
    console.log("Nóng");
} else {
    console.log("Không nóng");
}

// 8. Phân loại điểm số
// Mô tả: Nhập điểm và phân loại thành xuất sắc, giỏi, khá hoặc trung bình.

let score = parseInt(prompt("Nhập điểm của bạn: "));
if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 70) {
    console.log("Giỏi");
} else if (score >= 50) {
    console.log("Khá");
} else {
    console.log("Trung bình");
}


// 9. Thời gian trong ngày
// Mô tả:Nhập giờ và xác định buổi sáng, chiều, tối hoặc đêm.

let hour = parseInt(prompt("Nhập giờ (0-24): "));
if (hour >= 5 && hour <= 11) {
    console.log("Sáng");
} else if (hour >= 12 && hour <= 17) {
    console.log("Chiều");
} else if (hour >= 18 && hour <= 22) {
    console.log("Tối");
} else {
    console.log("Đêm");
}

// 10. Kiểm tra chiều cao
// Mô tả: Nhập chiều cao và phân loại thành thấp, trung bình hoặc cao.

let height = parseInt(prompt("Nhập chiều cao của bạn (cm): "));
if (height < 150) {
    console.log("Thấp");
} else if (height <= 180) {
    console.log("Trung bình");
} else {
    console.log("Cao");
}
