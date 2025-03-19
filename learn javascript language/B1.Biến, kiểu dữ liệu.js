// 1. Khai báo và in thông tin cá nhân
const printPersonalInfo = () => {
  console.log("=== Bài 1: Khai báo và in thông tin cá nhân ===");
  const name = "John", age = 25, country = "Việt Nam"; // Khai báo thông tin cá nhân
  console.log(`Tên: ${name}\nTuổi: ${age}\nQuốc gia: ${country}`); // In ra màn hình
};
printPersonalInfo();

// 2. Tính tổng các chữ số của số nguyên có ba chữ số
const sumOfDigits = () => {
  console.log("\n=== Bài 2: Tính tổng các chữ số ===");
  let number = +prompt("Nhập số nguyên có ba chữ số:"); // Nhập số từ người dùng
  if (!Number.isInteger(number) || number < 100 || number > 999) 
    return console.log("Vui lòng nhập số hợp lệ."); // Kiểm tra tính hợp lệ
  console.log(`Tổng: ${[...String(number)].reduce((sum, d) => sum + +d, 0)}`); // Tính tổng chữ số
};
sumOfDigits();

// 3. Chuyển đổi nhiệt độ từ Celsius sang Fahrenheit
const convertTemperature = () => {
  console.log("\n=== Bài 3: Chuyển đổi nhiệt độ ===");
  let celsius = +prompt("Nhập nhiệt độ (°C):"); // Nhập nhiệt độ
  console.log(isNaN(celsius) ? "Vui lòng nhập số hợp lệ." 
    : `${celsius}°C = ${(celsius * 9 / 5 + 32).toFixed(2)}°F`); // Chuyển đổi và hiển thị
};
convertTemperature();

// 4. So sánh hai số nhập vào
const compareTwoNumbers = () => {
  console.log("\n=== Bài 4: So sánh hai số ===");
  let [num1, num2] = [parseFloat(prompt("Nhập số 1:")), parseFloat(prompt("Nhập số 2:"))];
  console.log(isNaN(num1) || isNaN(num2) ? "Vui lòng nhập số hợp lệ." 
    : num1 === num2 ? "Hai số bằng nhau." 
    : `${Math.max(num1, num2)} lớn hơn ${Math.min(num1, num2)}.`); // So sánh và hiển thị kết quả
};
compareTwoNumbers();

// 5. Tính chu vi và diện tích hình tròn từ bán kính nhập vào
const circleCalculations = () => {
  console.log("\n=== Bài 5: Chu vi & Diện tích hình tròn ===");
  let r = +prompt("Nhập bán kính:"); // Nhập bán kính
  if (r > 0) 
    console.log(`Chu vi: ${(2 * Math.PI * r).toFixed(2)}\nDiện tích: ${(Math.PI * r ** 2).toFixed(2)}`);
  else 
    console.log("Bán kính không hợp lệ."); // Kiểm tra bán kính hợp lệ
};
circleCalculations();

// 6. Kiểm tra số nguyên tố
const checkPrime = () => {
  console.log("\n=== Bài 6: Kiểm tra số nguyên tố ===");
  let num = +prompt("Nhập số nguyên:");
  console.log(num >= 2 && ![...Array(Math.floor(Math.sqrt(num))).keys()].slice(1).some(i => num % (i + 1) === 0) 
    ? `${num} là số nguyên tố.` 
    : "Không phải số nguyên tố."); // Kiểm tra số nguyên tố
};
checkPrime();

// 7. Hiển thị thông tin sản phẩm sử dụng object
const productInfo = () => {
  console.log("\n=== Bài 7: Thông tin sản phẩm ===");
  let product = { id: 101, name: "Laptop", price: 1500 }; // Khai báo object sản phẩm
  console.table(product); // Hiển thị sản phẩm dưới dạng bảng
};
productInfo();

// 8. Tính điểm trung bình của 3 môn học và xếp loại
const calculateAverageGrade = () => {
  console.log("\n=== Bài 8: Tính điểm trung bình ===");
  let scores = Array.from({ length: 3 }, (_, i) => +prompt(`Nhập điểm môn ${i + 1}:`)); // Nhập điểm
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length; // Tính trung bình
  console.log(isNaN(avg) ? "Vui lòng nhập điểm hợp lệ." 
    : `Điểm TB: ${avg.toFixed(2)} - Xếp loại: ${avg >= 9 ? "Xuất sắc" : avg >= 7 ? "Giỏi" : avg >= 5 ? "Trung bình" : "Yếu"}`);
};
calculateAverageGrade();

// 9. Hoán đổi giá trị hai biến mà không dùng biến tạm
const swapValues = () => {
  console.log("\n=== Bài 9: Hoán đổi giá trị hai biến ===");
  let [a, b] = [parseInt(prompt("Nhập số 1:")), parseInt(prompt("Nhập số 2:"))]; // Nhập hai số
  [a, b] = [b, a]; // Hoán đổi giá trị
  console.log(`Sau khi hoán đổi: a = ${a}, b = ${b}`); // Hiển thị kết quả
};
swapValues();

// 10. Kiểm tra ký tự đầu tiên của chuỗi nhập vào
const checkFirstCharacter = () => {
  console.log("\n=== Bài 10: Kiểm tra ký tự đầu tiên ===");
  let char = prompt("Nhập chuỗi:").trim()[0] || ""; // Lấy ký tự đầu tiên
  console.log(/[a-z]/.test(char) ? "Chữ thường" 
    : /[A-Z]/.test(char) ? "Chữ hoa" 
    : /\d/.test(char) ? "Chữ số" 
    : "Ký tự đặc biệt"); // Xác định loại ký tự
};
checkFirstCharacter();
