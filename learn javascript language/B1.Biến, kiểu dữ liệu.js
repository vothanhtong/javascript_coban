// Hàm hỗ trợ lấy dữ liệu từ người dùng và kiểm tra hợp lệ
function getNumberInput(message, condition = () => true) {
  let num;
  do {
    num = parseFloat(prompt(message));
  } while (isNaN(num) || !condition(num));
  return num;
}

// 1. Khai báo và in thông tin cá nhân
function printPersonalInfo() {
  console.log("=== Bài 1: Khai báo và in thông tin cá nhân ===");
  const info = { name: "John", age: 25, country: "Việt Nam" };
  console.log(`Tên: ${info.name}\nTuổi: ${info.age}\nQuốc gia: ${info.country}`);
}
printPersonalInfo();

// 2. Tính tổng các chữ số
function sumOfDigits() {
  console.log("\n=== Bài 2: Tính tổng các chữ số ===");
  const number = getNumberInput("Nhập số nguyên có ba chữ số:", n => n >= 100 && n <= 999);
  const sum = [...number.toString()].reduce((a, b) => a + +b, 0);
  console.log(`Tổng các chữ số của ${number} là: ${sum}`);
}
sumOfDigits();

// 3. Chuyển đổi nhiệt độ
function convertTemperature() {
  console.log("\n=== Bài 3: Chuyển đổi nhiệt độ ===");
  const celsius = getNumberInput("Nhập nhiệt độ bằng độ C:");
  console.log(`${celsius}°C = ${(celsius * 9 / 5 + 32).toFixed(2)}°F`);
}
convertTemperature();

// 4. So sánh hai số
function compareTwoNumbers() {
  console.log("\n=== Bài 4: So sánh hai số ===");
  const [num1, num2] = [getNumberInput("Nhập số thứ nhất:"), getNumberInput("Nhập số thứ hai:")];
  console.log(num1 === num2 ? "Hai số bằng nhau." : `${Math.max(num1, num2)} lớn hơn ${Math.min(num1, num2)}.`);
}
compareTwoNumbers();

// 5. Tính chu vi và diện tích hình tròn
function circleCalculations() {
  console.log("\n=== Bài 5: Tính chu vi và diện tích hình tròn ===");
  const radius = getNumberInput("Nhập bán kính hình tròn:", r => r > 0);
  console.log(`Chu vi: ${(2 * Math.PI * radius).toFixed(2)}\nDiện tích: ${(Math.PI * radius ** 2).toFixed(2)}`);
}
circleCalculations();

// 6. Kiểm tra số nguyên tố
function checkPrime() {
  console.log("\n=== Bài 6: Kiểm tra số nguyên tố ===");
  const num = getNumberInput("Nhập một số nguyên:", n => n >= 2);
  console.log(`${num} ${[...Array(num).keys()].slice(2).every(i => num % i !== 0) ? "là" : "không phải"} số nguyên tố.`);
}
checkPrime();

// 7. Tạo đối tượng lưu thông tin sản phẩm
function productInfo() {
  console.log("\n=== Bài 7: Tạo đối tượng lưu thông tin sản phẩm ===");
  const product = { id: 101, name: "Laptop", price: 1500 };
  console.log(`Thông tin sản phẩm:\nID: ${product.id}\nTên: ${product.name}\nGiá: $${product.price}`);
}
productInfo();

// 8. Tính điểm trung bình và xếp loại
function calculateAverageGrade() {
  console.log("\n=== Bài 8: Tính điểm trung bình và xếp loại ===");
  const scores = [1, 2, 3].map(i => getNumberInput(`Nhập điểm môn ${i}:`));
  const average = scores.reduce((a, b) => a + b) / scores.length;
  console.log(`Điểm trung bình: ${average.toFixed(2)}\nXếp loại: ${average >= 9 ? "Xuất sắc" : average >= 7 ? "Giỏi" : average >= 5 ? "Trung bình" : "Yếu"}`);
}
calculateAverageGrade();

// 9. Hoán đổi giá trị hai biến bằng XOR
function swapValues() {
  console.log("\n=== Bài 9: Hoán đổi giá trị hai biến bằng XOR ===");
  let [a, b] = [getNumberInput("Nhập số thứ nhất (a):"), getNumberInput("Nhập số thứ hai (b):")];
  console.log(`Trước khi đổi: a = ${a}, b = ${b}`);
  [a, b] = [b, a];
  console.log(`Sau khi đổi: a = ${a}, b = ${b}`);
}
swapValues();

// 10. Kiểm tra ký tự đầu tiên của chuỗi
function checkFirstCharacter() {
  console.log("\n=== Bài 10: Kiểm tra ký tự đầu tiên của chuỗi ===");
  const input = prompt("Nhập một chuỗi:") || "";
  console.log(/^[a-z]/.test(input) ? "Ký tự đầu tiên là chữ cái thường" : /^[A-Z]/.test(input) ? "Ký tự đầu tiên là chữ cái viết hoa" : /^\d/.test(input) ? "Ký tự đầu tiên là chữ số" : "Ký tự đầu tiên là ký tự đặc biệt");
}
checkFirstCharacter();
