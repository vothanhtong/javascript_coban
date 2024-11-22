function main() {
    function isPasswordStrong(password) {
      const minLength = 8;
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasNumbers = /\d/.test(password);
  
      return password.length >= minLength && hasLetters && hasNumbers;
    }
  
    let correctPassword = "javascript";
    let attempts = 3;
    let isAuthenticated = false;
  
    while (attempts > 0) {
      let password = prompt("Nhập mật khẩu (ít nhất 8 ký tự, gồm chữ và số):");
  
      if (!isPasswordStrong(password)) {
        console.log("Mật khẩu yếu. Vui lòng nhập lại (ít nhất 8 ký tự, gồm cả chữ và số).");
        continue;
      }
  
      if (password === correctPassword) {
        console.log("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
      } else {
        attempts--;
        console.log(`Mật khẩu sai. Bạn còn ${attempts} lần thử.`);
      }
    }
  
    if (!isAuthenticated) {
      console.log("Bạn đã nhập sai quá số lần cho phép.");
      return; // Kết thúc chương trình nếu không đăng nhập được
    }
  
    // Bài 1: Tính tổng và kiểm tra chẵn lẻ
    const t = parseFloat(prompt("Nhập số thứ nhất:"));
    const m = parseFloat(prompt("Nhập số thứ hai:"));
    console.log("Tổng của hai số là:", t + m);
  
    const number = parseInt(prompt("Nhập một số:"));
    console.log(`Số ${number} là số ${number % 2 === 0 ? "chẵn" : "lẻ"}.`);
  
    // Bài 2: Các vòng lặp cơ bản
    console.log("In các số từ 1 đến 10:");
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  
    console.log("In các số chẵn từ 1 đến 20:");
    for (let i = 2; i <= 20; i += 2) {
      console.log(i);
    }
  
    console.log("Tính tổng các số từ 1 đến 100:");
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    console.log("Tổng từ 1 đến 100 là:", sum);
  
    // Bài 3: Kiểm tra năm nhuận và tính diện tích hình tròn
    const year = parseInt(prompt("Nhập một năm:"));
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Năm " + year + " là năm nhuận.");
    } else {
      console.log("Năm " + year + " không phải là năm nhuận.");
    }
  
    const r = parseFloat(prompt("Nhập bán kính hình tròn:"));
    console.log("Diện tích hình tròn là:", Math.PI * r * r);
  
    // Bài 5: Kiểm tra số nguyên tố và tính giai thừa
    const num = parseInt(prompt("Nhập một số nguyên dương:"));
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    console.log(num + (isPrime ? " là số nguyên tố." : " không phải là số nguyên tố."));
  
    const n = parseInt(prompt("Nhập một số nguyên dương để tính giai thừa:"));
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    console.log(`Giai thừa của ${n} là: ${factorial}`);
  }
  
  // Gọi hàm chính để chạy toàn bộ chương trình
  main();
  
// Kiểm tra mật khẩu nâng cấp (Bài 4.1).
// Tính tổng và kiểm tra chẵn lẻ (Bài 1).
// Vòng lặp cơ bản (Bài 2).
// Kiểm tra năm nhuận và tính diện tích hình tròn (Bài 3).
// Kiểm tra số nguyên tố và tính giai thừa (Bài 5)
// Các Chức Năng Đã Nâng Cấp:
// Kiểm tra mật khẩu nâng cấp:

// Xác thực với mật khẩu mạnh (>= 8 ký tự, gồm cả chữ và số).
// Cho phép nhập lại tối đa 3 lần nếu sai.
// Kết thúc chương trình nếu đăng nhập thất bại.
// Tính tổng và kiểm tra chẵn lẻ:

// Nhập 2 số bất kỳ để tính tổng.
// Kiểm tra chẵn/lẻ với một số nhập vào.
// Vòng lặp cơ bản:

// In các số từ 1 đến 10.
// In các số chẵn từ 1 đến 20.
// Tính tổng các số từ 1 đến 100.
// Kiểm tra năm nhuận và tính diện tích hình tròn:

// Nhập năm bất kỳ để kiểm tra năm nhuận.
// Nhập bán kính để tính diện tích hình tròn.
// Kiểm tra số nguyên tố và tính giai thừa:

// Kiểm tra một số bất kỳ có phải là số nguyên tố.
// Tính giai thừa của một số nguyên dương.
// Cách Sử Dụng:
// Chạy chương trình bằng cách gọi hàm main().
// Chương trình lần lượt thực hiện các bài tập theo trình tự.
// Nếu mật khẩu sai 3 lần, chương trình kết thúc ngay lập tức.
// Ví Dụ Kết Quả:
// Nhập mật khẩu đúng: javascript123 -> Chương trình tiếp tục.
// Tính toán số: Nhập 5, 10 -> Kết quả:
// r
// Sao chép mã
// Tổng của hai số là: 15
// Số 10 là số chẵn.
// Vòng lặp: In từ 1-10, các số chẵn, tổng từ 1-100.
// Năm nhuận: Nhập 2024 -> Kết quả: Năm 2024 là năm nhuận.
// Số nguyên tố: Nhập 7 -> 7 là số nguyên tố.
// Giai thừa: Nhập 5 -> Giai thừa của 5 là: 120.