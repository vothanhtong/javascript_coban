function main() {
    const history = JSON.parse(localStorage.getItem("history")) || []; 
    const correctPassword = "javascript123";
    let attempts = 3;
  
    // Kiểm tra mật khẩu mạnh
    const isPasswordStrong = (password) =>
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    while (attempts > 0) {
      const password = prompt("Nhập mật khẩu:");
      if (!isPasswordStrong(password)) {
        alert("Mật khẩu yếu. Vui lòng nhập lại.");
        continue;
      }
      if (password === correctPassword) {
        alert("Đăng nhập thành công!");
        break;
      } else {
        alert(`Sai mật khẩu. Còn ${--attempts} lần thử.`);
      }
    }
    if (attempts === 0) return alert("Bạn đã nhập sai quá số lần cho phép.");
  
    // Nhập dữ liệu
    const num1 = getNumber("Nhập số thứ nhất:");
    const num2 = getNumber("Nhập số thứ hai:");
    const number = getNumber("Nhập một số:");
    const year = getNumber("Nhập một năm:");
    const radius = getNumber("Nhập bán kính hình tròn:");
    const length = getNumber("Nhập chiều dài hình chữ nhật:");
    const width = getNumber("Nhập chiều rộng hình chữ nhật:");
    const n = getPositiveInteger("Nhập số nguyên dương để tính giai thừa:");
  
    // Lưu kết quả vào lịch sử
    history.push(`Tổng: ${num1} + ${num2} = ${num1 + num2}`);
    history.push(`${number} là ${number % 2 === 0 ? "chẵn" : "lẻ"}`);
    history.push(`${year} là ${isLeapYear(year) ? "năm nhuận" : "không phải năm nhuận"}`);
    history.push(`Diện tích hình tròn: ${(Math.PI * radius ** 2).toFixed(2)}`);
    history.push(`Diện tích hình chữ nhật: ${length * width}`);
    history.push(`${n}! = ${factorial(n)}`);
    history.push(`${number} là ${isPrime(number) ? "số nguyên tố" : "không phải số nguyên tố"}`);
  
    // Lưu vào localStorage
    localStorage.setItem("history", JSON.stringify(history));
  
    // Hiển thị lịch sử nhập liệu
    console.log("\n--- Lịch sử nhập liệu ---");
    history.forEach((entry, index) => console.log(`${index + 1}. ${entry}`));
  
    // Hỏi người dùng có muốn chạy lại không
    if (confirm("Bạn có muốn chạy lại chương trình không?")) main();
  }
  
  // Nhập số hợp lệ
  function getNumber(message) {
    let num;
    do {
      num = parseFloat(prompt(message));
      if (isNaN(num)) alert("Vui lòng nhập số hợp lệ.");
    } while (isNaN(num));
    return num;
  }
  
  // Nhập số nguyên dương
  function getPositiveInteger(message) {
    let num;
    do {
      num = parseInt(prompt(message));
      if (isNaN(num) || num <= 0) alert("Vui lòng nhập một số nguyên dương hợp lệ.");
    } while (isNaN(num) || num <= 0);
    return num;
  }
  
  // Kiểm tra năm nhuận
  const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
  // Kiểm tra số nguyên tố (cải tiến)
  function isPrime(num) {
    if (num < 2) return false;
    if (num % 2 === 0 && num !== 2) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Tính giai thừa bằng đệ quy
  const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
  
  main();
  