function main() {
  const history = [];
  const correctPassword = "javascript123";
  let attempts = 3;

  // Hàm kiểm tra mật khẩu mạnh
  const isPasswordStrong = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&(),.?":{}|<>]/.test(password);

  // Xác thực mật khẩu với giao diện thân thiện hơn
  while (attempts > 0) {
    const password = prompt("Nhập mật khẩu (ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt):");
    if (!password) return console.log("Bạn đã hủy đăng nhập.");

    if (!isPasswordStrong(password)) {
      alert("Mật khẩu yếu. Vui lòng nhập lại!");
      continue;
    }

    if (password === correctPassword) {
      alert("Đăng nhập thành công!");
      break;
    } else {
      alert(`Mật khẩu sai! Bạn còn ${--attempts} lần thử.`);
    }
  }

  if (attempts === 0) {
    alert("Bạn đã nhập sai quá số lần cho phép!");
    return;
  }

  // Nhập dữ liệu
  const t = getNumberInput("Nhập số thứ nhất:");
  const m = getNumberInput("Nhập số thứ hai:");
  const numbers = getMultipleNumbers("Nhập các số, cách nhau bởi dấu phẩy:");
  const year = getNumberInput("Nhập một năm:");
  const r = getNumberInput("Nhập bán kính hình tròn:");
  const num = getPositiveInteger("Nhập một số nguyên dương:");
  const n = getPositiveInteger("Nhập một số nguyên dương để tính giai thừa:");

  // Tính toán & Lưu vào lịch sử
  history.push(`Tổng ${t} + ${m} = ${t + m}`);
  numbers.forEach((number) => {
    history.push(`${number} là ${number % 2 === 0 ? "chẵn" : "lẻ"}`);
  });
  history.push(`${year} là ${isLeapYear(year) ? "năm nhuận" : "không phải năm nhuận"}`);
  history.push(`Diện tích hình tròn (bán kính ${r}): ${(Math.PI * r ** 2).toFixed(2)}`);
  history.push(`${num} là ${isPrime(num) ? "số nguyên tố" : "không phải số nguyên tố"}`);
  history.push(`Giai thừa của ${n}: ${factorial(n)}`);

  // Hiển thị lịch sử nhập liệu
  console.log("\n--- Lịch sử nhập liệu ---");
  history.forEach((entry, index) => console.log(`${index + 1}. ${entry}`));

  alert(history.join("\n"));

  // Hỏi người dùng có muốn chạy lại chương trình không
  if (confirm("Bạn có muốn chạy lại chương trình không?")) main();
}

// Hàm nhập số nguyên dương
function getPositiveInteger(message) {
  while (true) {
    const num = parseInt(prompt(message));
    if (!isNaN(num) && num > 0) return num;
    alert("Vui lòng nhập một số nguyên dương hợp lệ.");
  }
}

// Hàm nhập một số thực
function getNumberInput(message) {
  while (true) {
    const num = parseFloat(prompt(message));
    if (!isNaN(num)) return num;
    alert("Vui lòng nhập một số hợp lệ.");
  }
}

// Hàm nhập nhiều số cùng lúc (cách nhau bởi dấu phẩy)
function getMultipleNumbers(message) {
  while (true) {
    const input = prompt(message);
    if (!input) return [];
    const numbers = input.split(",").map((num) => parseFloat(num.trim())).filter((num) => !isNaN(num));
    if (numbers.length > 0) return numbers;
    alert("Vui lòng nhập ít nhất một số hợp lệ, cách nhau bởi dấu phẩy.");
  }
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
