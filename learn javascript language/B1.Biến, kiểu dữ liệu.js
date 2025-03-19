// 1. Khai báo và in thông tin cá nhân
const printPersonalInfo = () => {
  console.log("=== Bài 1: Khai báo và in thông tin cá nhân ===");
  const name = "John", age = 25, country = "Việt Nam";
  console.log(`Tên: ${name}\nTuổi: ${age}\nQuốc gia: ${country}`);
};
printPersonalInfo();

// 2. Tính tổng các chữ số
const sumOfDigits = () => {
  console.log("\n=== Bài 2: Tính tổng các chữ số ===");
  let number = +prompt("Nhập số nguyên có ba chữ số:");
  if (!Number.isInteger(number) || number < 100 || number > 999) return console.log("Vui lòng nhập số hợp lệ.");
  console.log(`Tổng: ${[...String(number)].reduce((sum, d) => sum + +d, 0)}`);
};
sumOfDigits();

// 3. Chuyển đổi nhiệt độ
const convertTemperature = () => {
  console.log("\n=== Bài 3: Chuyển đổi nhiệt độ ===");
  let celsius = +prompt("Nhập nhiệt độ (°C):");
  console.log(isNaN(celsius) ? "Vui lòng nhập số hợp lệ." : `${celsius}°C = ${(celsius * 9 / 5 + 32).toFixed(2)}°F`);
};
convertTemperature();

// 4. So sánh hai số
const compareTwoNumbers = () => {
  console.log("\n=== Bài 4: So sánh hai số ===");
  let [num1, num2] = [parseFloat(prompt("Nhập số 1:")), parseFloat(prompt("Nhập số 2:"))];
  console.log(isNaN(num1) || isNaN(num2) ? "Vui lòng nhập số hợp lệ." : num1 === num2 ? "Hai số bằng nhau." : `${Math.max(num1, num2)} lớn hơn ${Math.min(num1, num2)}.`);
};
compareTwoNumbers();

// 5. Tính chu vi và diện tích hình tròn
const circleCalculations = () => {
  console.log("\n=== Bài 5: Chu vi & Diện tích hình tròn ===");
  let r = +prompt("Nhập bán kính:");
  if (r > 0) console.log(`Chu vi: ${(2 * Math.PI * r).toFixed(2)}\nDiện tích: ${(Math.PI * r ** 2).toFixed(2)}`);
  else console.log("Bán kính không hợp lệ.");
};
circleCalculations();

// 6. Kiểm tra số nguyên tố
const checkPrime = () => {
  console.log("\n=== Bài 6: Kiểm tra số nguyên tố ===");
  let num = +prompt("Nhập số nguyên:");
  console.log(num >= 2 && ![...Array(Math.floor(Math.sqrt(num))).keys()].slice(1).some(i => num % (i + 1) === 0) ? `${num} là số nguyên tố.` : "Không phải số nguyên tố.");
};
checkPrime();

// 7. Thông tin sản phẩm
const productInfo = () => {
  console.log("\n=== Bài 7: Thông tin sản phẩm ===");
  let product = { id: 101, name: "Laptop", price: 1500 };
  console.table(product);
};
productInfo();

// 8. Tính điểm trung bình và xếp loại
const calculateAverageGrade = () => {
  console.log("\n=== Bài 8: Tính điểm trung bình ===");
  let scores = Array.from({ length: 3 }, (_, i) => +prompt(`Nhập điểm môn ${i + 1}:`));
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  console.log(isNaN(avg) ? "Vui lòng nhập điểm hợp lệ." : `Điểm TB: ${avg.toFixed(2)} - Xếp loại: ${avg >= 9 ? "Xuất sắc" : avg >= 7 ? "Giỏi" : avg >= 5 ? "Trung bình" : "Yếu"}`);
};
calculateAverageGrade();

// 9. Hoán đổi giá trị hai biến
const swapValues = () => {
  console.log("\n=== Bài 9: Hoán đổi giá trị hai biến ===");
  let [a, b] = [parseInt(prompt("Nhập số 1:")), parseInt(prompt("Nhập số 2:"))];
  [a, b] = [b, a];
  console.log(`Sau khi hoán đổi: a = ${a}, b = ${b}`);
};
swapValues();

// 10. Kiểm tra ký tự đầu tiên
const checkFirstCharacter = () => {
  console.log("\n=== Bài 10: Kiểm tra ký tự đầu tiên ===");
  let char = prompt("Nhập chuỗi:").trim()[0] || "";
  console.log(/[a-z]/.test(char) ? "Chữ thường" : /[A-Z]/.test(char) ? "Chữ hoa" : /\d/.test(char) ? "Chữ số" : "Ký tự đặc biệt");
};
checkFirstCharacter();