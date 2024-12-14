// Chương trình chính với code rút gọn hơn
function main() {
  const history = []; // Lưu lịch sử nhập liệu
  const correctPassword = "javascript123";
  let attempts = 3;

  // Hàm kiểm tra mật khẩu mạnh
  const isPasswordStrong = (password) => 
    password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&(),.?":{}|<>]/.test(password);

  // Xác thực mật khẩu
  while (attempts > 0) {
    const password = prompt("Nhập mật khẩu (ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt):");
    if (!isPasswordStrong(password)) {
      console.log("Mật khẩu yếu. Vui lòng nhập lại.");
      continue;
    }
    if (password === correctPassword) {
      console.log("Đăng nhập thành công!");
      break;
    } else {
      console.log(`Mật khẩu sai. Bạn còn ${--attempts} lần thử.`);
    }
  }
  if (attempts === 0) return console.log("Bạn đã nhập sai quá số lần cho phép.");

  // Nhập số và thực hiện tính toán
  const t = +prompt("Nhập số thứ nhất:");
  const m = +prompt("Nhập số thứ hai:");
  const number = +prompt("Nhập một số:");
  const year = +prompt("Nhập một năm:");
  const r = +prompt("Nhập bán kính hình tròn:");
  const num = +prompt("Nhập một số nguyên dương:");
  const n = +prompt("Nhập một số nguyên dương để tính giai thừa:");

  // Lưu kết quả vào lịch sử
  history.push(`Tổng ${t} + ${m} = ${t + m}`);
  history.push(`${number} là ${number % 2 === 0 ? "chẵn" : "lẻ"}`);
  history.push(`${year} là ${((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? "năm nhuận" : "không phải năm nhuận"}`);
  history.push(`Diện tích hình tròn: ${(Math.PI * r ** 2).toFixed(2)}`);

  // Kiểm tra số nguyên tố
  let isPrime = num > 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  history.push(`${num} là ${isPrime ? "số nguyên tố" : "không phải số nguyên tố"}`);

  // Tính giai thừa
  const factorial = Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
  history.push(`Giai thừa của ${n}: ${factorial}`);

  // Hiển thị lịch sử nhập liệu
  console.log("\n--- Lịch sử nhập liệu ---");
  history.forEach(entry => console.log(entry));

  // Chạy lại chương trình nếu người dùng muốn
  if (confirm("Bạn có muốn chạy lại chương trình không?")) main();
}

main();
