// 1. Xác thực mật khẩu mạnh hơn: Thêm quy tắc yêu cầu mật khẩu phải chứa ký tự đặc biệt và chữ hoa.
// 2. Hướng dẫn người dùng: Thêm hướng dẫn chi tiết về yêu cầu mật khẩu và các bước nhập số.
// 3. Lưu trữ lịch sử nhập liệu: Lưu trữ các mật khẩu và số đã nhập để có thể hiển thị lại sau khi kết thúc chương trình.
// 4. Chạy lại chương trình: Cung cấp tùy chọn cho người dùng để chạy lại chương trình từ đầu nếu muốn.
// 5. Hiển thị kết quả rõ ràng hơn: Tạo giao diện đầu ra đẹp hơn và dễ đọc hơn.

// Dưới đây là mã đã nâng cấp với các tính năng này:


function main() {
  function isPasswordStrong(password) {
    const minLength = 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
  
    return password.length >= minLength && hasLetters && hasNumbers && hasSpecialChars && hasUpperCase;
  }

  let correctPassword = "javascript123"; // Đã thêm ký tự số và ký tự đặc biệt
  let attempts = 3;
  let isAuthenticated = false;

  while (attempts > 0) {
    let password = prompt("Nhập mật khẩu (ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt):");
  
    if (!isPasswordStrong(password)) {
      console.log("Mật khẩu yếu. Vui lòng nhập lại.");
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
  
  let history = []; // Lưu lịch sử nhập liệu

  // Bài 1: Tính tổng và kiểm tra chẵn lẻ
  const t = parseFloat(prompt("Nhập số thứ nhất:"));
  const m = parseFloat(prompt("Nhập số thứ hai:"));
  console.log("Tổng của hai số là:", t + m);
  history.push(`Tổng: ${t + m}`);

  const number = parseInt(prompt("Nhập một số:"));
  console.log(`Số ${number} là số ${number % 2 === 0 ? "chẵn" : "lẻ"}.`);
  history.push(`Kiểm tra chẵn lẻ: ${number} là ${number % 2 === 0 ? "chẵn" : "lẻ"}.`);

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
  history.push(`Tổng từ 1 đến 100 là: ${sum}`);

  // Bài 3: Kiểm tra năm nhuận và tính diện tích hình tròn
  const year = parseInt(prompt("Nhập một năm:"));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Năm " + year + " là năm nhuận.");
  } else {
    console.log("Năm " + year + " không phải là năm nhuận.");
  }
  
  const r = parseFloat(prompt("Nhập bán kính hình tròn:"));
  console.log("Diện tích hình tròn là:", Math.PI * r * r); // Sửa lỗi ở đây
  history.push(`Diện tích hình tròn (bán kính ${r}): ${Math.PI * r * r}`);

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
  history.push(`${num} là ${isPrime ? "số nguyên tố." : "không phải là số nguyên tố."}`);

  const n = parseInt(prompt("Nhập một số nguyên dương để tính giai thừa:"));
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i; // Sửa lỗi ở đây
  }
  console.log(`Giai thừa của ${n} là: ${factorial}`);
  history.push(`Giai thừa của ${n} là: ${factorial}`);

  // Hiển thị lịch sử nhập liệu
  console.log("Lịch sử nhập liệu:");
  history.forEach(entry => console.log(entry));

  // Hỏi người dùng có muốn chạy lại chương trình không
  let runAgain = confirm("Bạn có muốn chạy lại chương trình không?");
  if (runAgain) {
    main(); // Gọi lại hàm chính
  }
}

// Gọi hàm chính để chạy toàn bộ chương trình
main();



// Các điểm nâng cấp:
// 1. Quy tắc mật khẩu: Mật khẩu phải chứa chữ hoa, chữ thường, số và ký tự đặc biệt.
// 2. Lịch sử nhập liệu: Ghi lại các kết quả đã tính toán và hiển thị chúng ở cuối chương trình.
// 3. Chạy lại chương trình: Cung cấp tùy chọn cho người dùng để chạy lại chương trình nếu muốn.
