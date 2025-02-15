// 1. Khai báo và in thông tin cá nhân
function printPersonalInfo() {
  console.log("=== Bài 1: Khai báo và in thông tin cá nhân ===");
  const name = "John";
  const age = 25;
  const country = "Việt Nam";
  console.log(`Tên: ${name}\nTuổi: ${age}\nQuốc gia: ${country}`);
}
printPersonalInfo();
// Giải thích
// : Hàm `printPersonalInfo()` khai báo ba biến `name`, `age`, và `country` để lưu trữ thông tin cá nhân. Sau đó, nó in ra thông tin này bằng cách sử dụng `console.log()`.

//  2. Tính tổng các chữ số
function sumOfDigits() {
  console.log("\n=== Bài 2: Tính tổng các chữ số ===");
  const number = parseInt(prompt("Nhập một số nguyên có ba chữ số:"));
  if (isNaN(number) || number < 100 || number > 999) {
    console.log("Vui lòng nhập một số nguyên có đúng ba chữ số.");
    return;
  }
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const units = number % 10;
  console.log(`Tổng các chữ số của ${number} là: ${hundreds + tens + units}`);
}
sumOfDigits();
// Giải thích
// : Hàm `sumOfDigits()` yêu cầu người dùng nhập một số nguyên có ba chữ số. Nếu số nhập vào không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó tính tổng các chữ số của số đó và in ra kết quả.

//  3. Chuyển đổi nhiệt độộ
function convertTemperature() {
  console.log("\n=== Bài 3: Chuyển đổi nhiệt độ ===");
  const celsius = parseFloat(prompt("Nhập nhiệt độ bằng độ C:"));
  if (isNaN(celsius)) {
    console.log("Vui lòng nhập một số hợp lệ.");
    return;
  }
  const fahrenheit = celsius * 9 / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}
convertTemperature();

// Giải thích
// : Hàm `convertTemperature()` yêu cầu người dùng nhập nhiệt độ theo độ C. Nếu giá trị nhập vào không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó chuyển đổi nhiệt độ từ độ C sang độ F và in ra kết quả.
//  4. So sánh hai số
function compareTwoNumbers() {
  console.log("\n=== Bài 4: So sánh hai số ===");
  const num1 = parseFloat(prompt("Nhập số thứ nhất:"));
  const num2 = parseFloat(prompt("Nhập số thứ hai:"));
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Vui lòng nhập hai số hợp lệ.");
    return;
  }
  console.log(num1 === num2 
    ? "Hai số bằng nhau." 
    : `${Math.max(num1, num2)} lớn hơn ${Math.min(num1, num2)}.`);
}
compareTwoNumbers();

// Giải thích
// : Hàm `compareTwoNumbers()` yêu cầu người dùng nhập hai số. Nếu một trong hai số không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó so sánh hai số và in ra kết quả.
//  5. Tính chu vi và diện tích hình tròn
function circleCalculations() {
  console.log("\n=== Bài 5: Tính chu vi và diện tích hình tròn ===");
  const radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
  if (isNaN(radius) || radius <= 0) {
    console.log("Vui lòng nhập bán kính hợp lệ (lớn hơn 0).");
    return;
  }
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);
  console.log(`Chu vi: ${circumference.toFixed(2)}\nDiện tích: ${area.toFixed(2)}`);
}
circleCalculations();

// Giải thích
// : Hàm `circleCalculations()` yêu cầu người dùng nhập bán kính của hình tròn. Nếu bán kính không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó tính chu vi và diện tích của hình tròn và in ra kết quả.

//  6. Kiểm tra số nguyên tố
function checkPrime() {
  console.log("\n=== Bài 6: Kiểm tra số nguyên tố ===");
  const num = parseInt(prompt("Nhập một số nguyên:"));
  if (isNaN(num) || num < 2) {
    console.log("Vui lòng nhập một số nguyên lớn hơn hoặc bằng 2.");
    return;
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(`${num} ${isPrime ? "là số nguyên tố" : "không phải là số nguyên tố"}.`);
}
checkPrime();

// Giải thích
// : Hàm `checkPrime()` yêu cầu người dùng nhập một số nguyên. Nếu số nhập vào không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó kiểm tra xem số đó có phải là số nguyên tố hay không và in ra kết quả.

//  7. Tạo đối tượng lưu thông tin sản phẩm
function productInfo() {
  console.log("\n=== Bài 7: Tạo đối tượng lưu thông tin sản phẩm ===");
  const product = {
    id: 101,
    name: "Laptop",
    price: 1500,
  };
  console.log(`Thông tin sản phẩm:\nID: ${product.id}\nTên: ${product.name}\nGiá: $${product.price}`);
}
productInfo();


// Giải thích
// : Hàm `productInfo()` tạo một đối tượng `product` để lưu trữ thông tin về một sản phẩm. Sau đó, nó in ra thông tin này.
//  8. Tính điểm trung bình và xếp loại
function calculateAverageGrade() {
  console.log("\n=== Bài 8: Tính điểm trung bình và xếp loại ===");
  const scores = [
    parseFloat(prompt("Nhập điểm môn 1:")),
    parseFloat(prompt("Nhập điểm môn 2:")),
    parseFloat(prompt("Nhập điểm môn 3:")),
  ];
  if (scores.some(isNaN)) {
    console.log("Vui lòng nhập tất cả các điểm hợp lệ.");
    return;
  }
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const grade = average >= 9 ? "Xuất sắc"
              : average >= 7 ? "Giỏi"
              : average >= 5 ? "Trung bình"
              : "Yếu";
  console.log(`Điểm trung bình: ${average.toFixed(2)}\nXếp loại: ${grade}`);
}
calculateAverageGrade();

// Giải thích
// : Hàm `calculateAverageGrade()` yêu cầu người dùng nhập điểm của ba môn học. Nếu bất kỳ điểm nào không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó tính điểm trung bình và xếp loại học lực dựa trên điểm trung bình đó.

//  9. Hoán đổi giá trị hai biến bằng XOR
function swapValues() {
  console.log("\n=== Bài 9: Hoán đổi giá trị hai biến bằng XOR ===");
  let a = parseInt(prompt("Nhập số thứ nhất (a):"));
  let b = parseInt(prompt("Nhập số thứ hai (b):"));
  if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập hai số hợp lệ.");
    return;
  }
  console.log(`Trước khi đổi: a = ${a}, b = ${b}`);
  a ^= b;
  b ^= a;
  a ^= b;
  console.log(`Sau khi đổi: a = ${a}, b = ${b}`);
}
swapValues();

// Giải thích
// : Hàm `swapValues()` yêu cầu người dùng nhập hai số. Nếu một trong hai số không hợp lệ, nó sẽ thông báo lỗi. Nếu hợp lệ, nó hoán đổi giá trị của hai biến `a` và `b` bằng cách sử dụng phép toán XOR và in ra kết quả.
function checkFirstCharacter() {
  console.log("\n=== Bài 10: Kiểm tra ký tự đầu tiên của chuỗi ===");
  const input = prompt("Nhập một chuỗi:").trim();
  
  if (!input) {
    console.log("Vui lòng nhập một chuỗi không rỗng.");
    return;
  }

  const firstChar = input[0];

  if (/[a-z]/.test(firstChar)) {
    console.log("Ký tự đầu tiên là chữ cái thường");
  } else if (/[A-Z]/.test(firstChar)) {
    console.log("Ký tự đầu tiên là chữ cái viết hoa");
  } else if (/\d/.test(firstChar)) {
    console.log("Ký tự đầu tiên là chữ số");
  } else {
    console.log("Ký tự đầu tiên là ký tự đặc biệt");
  }
}
checkFirstCharacter();