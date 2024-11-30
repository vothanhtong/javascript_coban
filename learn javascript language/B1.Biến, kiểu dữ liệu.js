/// 1. Định nghĩa và đặc điểm của biến
// - Biến: là một đại diện cho vùng lưu trữ dữ liệu trong bộ nhớ.
//   Trong JavaScript, biến là một thành phần cơ bản, cho phép lưu trữ thông tin mà có thể được sử dụng trong suốt quá trình thực thi chương trình.
// - Đặc điểm chính:
//   - Không cần chỉ định kiểu dữ liệu (là ngôn ngữ kiểu động): JavaScript tự động xác định kiểu dữ liệu dựa trên giá trị được gán cho biến.
//   - Khai báo bằng `var`, `let`, hoặc `const`: 
//     - `var` cho phép khai báo biến có phạm vi toàn cục hoặc trong một hàm, và có thể bị hoisting.
//     - `let` cho phép khai báo biến có phạm vi khối, an toàn hơn trong các khối lệnh.
//     - `const` dùng để khai báo hằng số, tức là biến không thể thay đổi giá trị sau khi được khởi tạo.
//   - Giá trị có thể thay đổi (trừ `const`): Với biến được khai báo bằng `let` và `var`, giá trị có thể thay đổi trong quá trình thực thi, nhưng giá trị của biến `const` không thể thay đổi sau khi được gán.


// 2. Phân loại biến
// 1. Biến cục bộ (Local Variable):  
//    - Khai báo trong hàm hoặc block code.
//    - Chỉ được sử dụng trong phạm vi khai báo, không thể truy cập từ bên ngoài.

// 2. Biến toàn cục (Global Variable): 
//    - Khai báo ngoài mọi block code hoặc hàm.
//    - Có thể truy cập từ bất kỳ đâu trong chương trình, bao gồm cả trong các hàm.

// 3. Biến tĩnh (Static Variable - mô phỏng): 
//    - Mô phỏng bằng cách sử dụng từ khóa `static` trong các class hoặc object để lưu trữ giá trị chung cho tất cả các đối tượng của class.


 // 3. Cách khai báo và khởi tạo biến
// - Cách khai báo:
//   - Khai báo một biến chưa khởi tạo:
//     let name;       // Biến chưa khởi tạo
//   - Khai báo một hằng số:
//     const PI = 3.14; // Biến hằng (giá trị không thể thay đổi)
  
// - Cách khởi tạo:
//   - Khởi tạo biến với giá trị cụ thể:
//     let age = 25;           // Số nguyên
//     let salary = 50000.5;   // Số thực
//     let name = "John";      // Chuỗi
//     let isAvailable = true; // Boolean (đúng/sai)


// 4. Chuyển đổi và truyền kiểu dữ liệu
// 1. Chuyển đổi kiểu:
//    - Implicit Casting (chuyển đổi ngầm): 
//      - JavaScript tự động chuyển đổi kiểu dữ liệu khi cần thiết.
//      - Ví dụ: 
//        let num = 10;
//        let d = num + 0.5; // Tự động chuyển từ int sang float (số thực)
//      
//    - Explicit Casting (chuyển đổi tường minh): 
//      - Sử dụng các hàm chuyển đổi của JavaScript như `Number()`, `String()` để chuyển đổi kiểu dữ liệu.
//      - Ví dụ:
//        let str = "123";
//        let number = Number(str); // Chuyển từ chuỗi sang số

// 2. Truyền kiểu: 
//    - Tự động chuyển kiểu nhỏ hơn sang kiểu lớn hơn khi thực hiện phép toán.
//    - Ví dụ:
//      let a = 5;            // int
//      let b = 2.5;          // float
//      let result = a + b;   // Kết quả: 7.5 (float)


// 5. Bài tập thực hành
// 1. Khai báo và in giá trị của biến:
//    - Khai báo các biến và in ra giá trị của chúng:
//      let name = "John";
//      let age = 30;
//      let salary = 5000.5;
//      console.log(`Name: ${name}`);
//      console.log(`Age: ${age}`);
//      console.log(`Salary: ${salary}`);
   
// 2. Nhập giá trị từ bàn phím và hiển thị:
//    - Yêu cầu người dùng nhập tên, tuổi và thành phố, sau đó in ra thông tin:
//      let name = prompt("Nhập tên của bạn:");
//      let age = parseInt(prompt("Nhập tuổi của bạn:"));
//      let city = prompt("Nhập thành phố của bạn:");
//      console.log(`Tên bạn là: ${name}`);
//      console.log(`Tuổi của bạn là: ${age}`);
//      console.log(`Bạn đến từ: ${city}`);
   
// 3. Tính chu vi và diện tích hình chữ nhật:
//    - Yêu cầu người dùng nhập chiều dài và chiều rộng, sau đó tính và in chu vi, diện tích:
//      let length = parseFloat(prompt("Nhập chiều dài:"));
//      let width = parseFloat(prompt("Nhập chiều rộng:"));
//      let perimeter = 2 * (length + width);
//      let area = length * width;
//      console.log(`Chu vi: ${perimeter}`);
//      console.log(`Diện tích: ${area}`);
   
// 4. Đổi chỗ giá trị hai biến:
//    - Hoán đổi giá trị hai biến mà không dùng biến trung gian:
//      let a = 5, b = 10;
//      [a, b] = [b, a]; // Hoán đổi bằng destructuring
//      console.log(`Sau khi đổi: a = ${a}, b = ${b}`);
   
// 5. Tính trung bình của 3 số:
//    - Yêu cầu người dùng nhập ba số nguyên và tính trung bình:
//      let num1 = parseInt(prompt("Nhập số thứ nhất:"));
//      let num2 = parseInt(prompt("Nhập số thứ hai:"));
//      let num3 = parseInt(prompt("Nhập số thứ ba:"));
//      let average = (num1 + num2 + num3) / 3;
//      console.log(`Trung bình: ${average}`);
   
// 6. Kiểm tra số chẵn/lẻ:
//    - Kiểm tra số người dùng nhập vào là chẵn hay lẻ:
//      let num = parseInt(prompt("Nhập một số nguyên:"));
//      console.log(`${num} là ${num % 2 === 0 ? "số chẵn" : "số lẻ"}`);
   
// 7. Sử dụng biến tĩnh trong class:
//    - Tạo một lớp với biến dùng chung giữa các đối tượng:
//      class Counter {
//        static count = 0; // Biến tĩnh
//        constructor() {
//          Counter.count++; // Tăng biến tĩnh mỗi khi tạo đối tượng mới
//        }
//      }
//      new Counter(); // Tạo đối tượng mới
//      new Counter(); // Tạo đối tượng mới
//      console.log(`Số đối tượng được tạo: ${Counter.count}`);

// 8. Lưu thông tin học sinh vào đối tượng:
//    - Tạo đối tượng lưu thông tin học sinh và in thông tin:
//      let student = {
//        id: 1,
//        name: "John",
//        grade: "A"
//      };
//      console.log(`ID: ${student.id}, Tên: ${student.name}, Xếp loại: ${student.grade}`);

  
// 1. Khai báo và in thông tin cá nhân
let name = "John";
let age = 25;
let country = "Việt Nam";
console.log("Tên:", name);
console.log("Tuổi:", age);
console.log("Quốc gia:", country);


// 2. Tính tổng các chữ số
let number = parseInt(prompt("Nhập một số nguyên có ba chữ số:"));
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;
let sum = hundreds + tens + units;
console.log(`Tổng các chữ số của ${number} là: ${sum}`);


// 3. Chuyển đổi nhiệt độ
let celsius = parseFloat(prompt("Nhập nhiệt độ bằng độ C:"));
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);


// 4. So sánh hai số
let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
let num2 = parseFloat(prompt("Nhập số thứ hai:"));
if (num1 > num2) {
  console.log(`${num1} lớn hơn ${num2}`);
} else if (num1 < num2) {
  console.log(`${num2} lớn hơn ${num1}`);
} else {
  console.log("Hai số bằng nhau");
}


// 5. Tính chu vi và diện tích hình tròn
let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius ;
console.log(`Chu vi: ${circumference}`);
console.log(`Diện tích: ${area}`);


// 6. Kiểm tra số nguyên tố
let num = parseInt(prompt("Nhập một số nguyên:"));
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(`${num} ${isPrime ? "là số nguyên tố" : "không phải là số nguyên tố"}`);


// 7. Tạo một đối tượng lưu thông tin sản phẩm
let product = {
  id: 101,
  name: "Laptop",
  price: 1500
};
console.log("Thông tin sản phẩm:");
console.log(`ID: ${product.id}`);
console.log(`Tên: ${product.name}`);
console.log(`Giá: $${product.price}`);


// 8. Tính điểm trung bình và xếp loại
let score1 = parseFloat(prompt("Nhập điểm môn 1:"));
let score2 = parseFloat(prompt("Nhập điểm môn 2:"));
let score3 = parseFloat(prompt("Nhập điểm môn 3:"));
let average = (score1 + score2 + score3) / 3;
let grade = "";
if (average >= 9) {
  grade = "Xuất sắc";
} else if (average >= 7) {
  grade = "Giỏi";
} else if (average >= 5) {
  grade = "Trung bình";
} else {
  grade = "Yếu";
}
console.log(`Điểm trung bình: ${average}`);
console.log(`Xếp loại: ${grade}`);


// 9. Hoán đổi giá trị hai biến sử dụng toán tử XOR
let a = parseInt(prompt("Nhập số thứ nhất (a):"));
let b = parseInt(prompt("Nhập số thứ hai (b):"));
console.log(`Trước khi đổi: a = ${a}, b = ${b}`);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(`Sau khi đổi: a = ${a}, b = ${b}`);


// 10. Kiểm tra ký tự đầu tiên của chuỗi
let input = prompt("Nhập một chuỗi:");
let firstChar = input.charAt(0);
if (/[a-z]/.test(firstChar)) {
  console.log("Ký tự đầu tiên là chữ cái thường");
} else if (/[A-Z]/.test(firstChar)) {
  console.log("Ký tự đầu tiên là chữ cái viết hoa");
} else if (/\d/.test(firstChar)) {
  console.log("Ký tự đầu tiên là chữ số");
} else {
  console.log("Ký tự đầu tiên là ký tự đặc biệt");
}