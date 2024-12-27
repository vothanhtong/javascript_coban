function main() {
  const history = []; // Lưu lịch sử nhập liệu
  const correctPassword = "javascript123";
  let attempts = 3;

  // Hàm kiểm tra mật khẩu mạnh
  const isPasswordStrong = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&(),.?":{}|<>]/.test(password);

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

  // Nhập dữ liệu
  const t = getNumberInput("Nhập số thứ nhất:");
  const m = getNumberInput("Nhập số thứ hai:");
  const number = getNumberInput("Nhập một số:");
  const year = getNumberInput("Nhập một năm:");
  const r = getNumberInput("Nhập bán kính hình tròn:");
  const num = getPositiveInteger("Nhập một số nguyên dương:");
  const n = getPositiveInteger("Nhập một số nguyên dương để tính giai thừa:");

  // Lưu kết quả vào lịch sử
  history.push(`Tổng ${t} + ${m} = ${t + m}`);
  history.push(`${number} là ${number % 2 === 0 ? "chẵn" : "lẻ"}`);
  history.push(`${year} là ${isLeapYear(year) ? "năm nhuận" : "không phải năm nhuận"}`);
  history.push(`Diện tích hình tròn: ${(Math.PI * r ** 2).toFixed(2)}`);
  history.push(`${num} là ${isPrime(num) ? "số nguyên tố" : "không phải số nguyên tố"}`);
  history.push(`Giai thừa của ${n}: ${factorial(n)}`);

  // Hiển thị lịch sử nhập liệu
  console.log("\n--- Lịch sử nhập liệu ---");
  history.forEach((entry, index) => console.log(`${index + 1}. ${entry}`));

  // Chạy lại chương trình nếu người dùng muốn
  if (confirm("Bạn có muốn chạy lại chương trình không?")) main();
}

// Hàm kiểm tra số nguyên dương
function getPositiveInteger(message) {
  let num;
  do {
    num = parseInt(prompt(message));
    if (isNaN(num) || num <= 0) console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
  } while (isNaN(num) || num <= 0);
  return num;
}

// Hàm nhập số với kiểm tra
function getNumberInput(message) {
  let num;
  do {
    num = parseFloat(prompt(message));
    if (isNaN(num)) console.log("Vui lòng nhập một số hợp lệ.");
  } while (isNaN(num));
  return num;
}

// Hàm kiểm tra năm nhuận
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Hàm tính giai thừa
function factorial(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
}

main();
