// Biến trong JavaScript là một tên đại diện cho vùng lưu trữ dữ liệu trong bộ nhớ. 
// Biến chứa các giá trị trong suốt quá trình thực thi chương trình. Trong JavaScript, không cần chỉ định kiểu dữ liệu cụ thể vì đây là ngôn ngữ kiểu động.

// Các đặc điểm của biến trong JavaScript:
// - Biến phải được khai báo trước khi sử dụng (`var`, `let`, hoặc `const`).
// - Giá trị của biến có thể thay đổi trong thời gian chạy chương trình (trừ `const`).
// - Biến giúp quản lý dữ liệu dễ dàng hơn nhờ việc sử dụng tên thay vì địa chỉ bộ nhớ.

// Phân loại biến trong JavaScript:
// Biến trong JavaScript có thể được chia thành 3 loại chính:
// 1. Biến cục bộ (Local Variable):  
//    - Khai báo bên trong một hàm hoặc block code (dùng `let` hoặc `const`).
//    - Chỉ được sử dụng trong phạm vi nơi nó được khai báo.
// 2. Biến toàn cục (Global Variable):  
//    - Được khai báo bên ngoài mọi hàm hoặc block code.
//    - Có thể truy cập từ bất kỳ đâu trong chương trình.
// 3. Biến tĩnh (Static Variable - mô phỏng): 
//    - Trong JavaScript, có thể mô phỏng biến tĩnh bằng cách sử dụng các thuộc tính tĩnh trên class hoặc object.

// 2. Cách khai báo biến trong JavaScript
// Cú pháp khai báo biến:

// Ví dụ:
let age;        // Biến kiểu số nguyên
let salary;     // Biến kiểu số thực
let name;       // Biến kiểu chuỗi

// 3. Cách khởi tạo biến trong JavaScript
// Cú pháp khởi tạo biến:

// let tên_biến = giá_trị_khởi_tạo;

// Ví dụ:
let age = 25;             // Biến kiểu số nguyên
let salary = 50000.5;     // Biến kiểu số thực
let name = "JavaScript";  // Biến kiểu chuỗi
let isAvailable = true;   // Biến kiểu boolean

// Bạn cũng có thể khởi tạo biến sau khi khai báo:

let number;
number = 10;

// 4. Các loại biến trong JavaScript
// 1. Biến cục bộ (Local Variable):
// - Được khai báo bên trong một hàm hoặc block code.
// - Không có giá trị mặc định, phải khởi tạo trước khi sử dụng.
// - Phạm vi sử dụng chỉ trong block nơi khai báo.

function display() {
  let number = 10; // Biến cục bộ
  console.log("Number: " + number);
}

// 2. Biến toàn cục (Global Variable):
// - Khai báo bên ngoài mọi hàm hoặc block code.
// - Có thể được truy cập từ bất kỳ đâu trong chương trình.

let globalVar = "This is a global variable"; // Biến toàn cục

function printGlobalVar() {
  console.log(globalVar);
}

// 3. Biến tĩnh (Static Variable - mô phỏng):
// - Mô phỏng trong JavaScript bằng cách sử dụng các thuộc tính tĩnh trên class.

class Main {
  static count = 0; // Biến tĩnh

  static increment() {
    this.count++;
  }
}

// 5. JavaScript Chuyển đổi kiểu và Truyền kiểu
// 1. Chuyển đổi kiểu (Type Casting):
// - Implicit Casting (chuyển đổi ngầm định): 
//   Chuyển đổi tự động từ kiểu nhỏ hơn sang kiểu lớn hơn.
  
let num = 10;
let d = num + 0.5; // Tự động chuyển từ int sang float

// - Explicit Casting (chuyển đổi tường minh):  
//   Sử dụng các hàm chuyển đổi của JavaScript như `Number()`, `String()`.

let str = "123";
let number = Number(str);  // Chuyển từ chuỗi sang số

// 2. Truyền kiểu (Type Promotion):
// Khi thực hiện phép toán, JavaScript tự động chuyển đổi kiểu nhỏ hơn sang lớn hơn.
let a = 5;
let b = 2.5;
let result = a + b;  // a được chuyển thành float

// Ví dụ Tổng hợp:
class MainExample {
  // Biến tĩnh
  static count = 0;

  // Biến toàn cục
  static name = "Global";

  static displayInfo() {
    // Biến cục bộ
    let age = 25;

    // Khởi tạo biến
    let salary = 5000.75;

    console.log("Age: " + age);
    console.log("Salary: " + salary);
    console.log("Static count: " + this.count);
  }
}

MainExample.displayInfo();
MainExample.increment();
console.log("Updated count: " + MainExample.count);

// Giải thích
// - **Biến cục bộ:** Sử dụng `let` hoặc `const` trong hàm hoặc block.
// - **Biến toàn cục:** Khai báo bên ngoài mọi block hoặc function.
// - **Biến tĩnh:** Sử dụng thuộc tính `static` trong lớp để mô phỏng.


// BT:
// 1. Bài tập khai báo và in giá trị của biến
// Khai báo các biến sau: `name` (String), `age` (int), `salary` (float). Gán giá trị cho chúng và in ra màn hình:

// let name = "John";
// let age = 30;
// let salary = 5000.5;

// console.log("Name: " + name);
// console.log("Age: " + age);
// console.log("Salary: " + salary);


// 2. Bài tập nhận giá trị từ bàn phím**
// Yêu cầu người dùng nhập tên, tuổi và thành phố. Sau đó, in ra thông tin như sau:

// let name = prompt("Nhập tên của bạn:");
// let age = parseInt(prompt("Nhập tuổi của bạn:"));
// let city = prompt("Nhập thành phố của bạn:");

// console.log("Tên bạn là: " + name);
// console.log("Tuổi của bạn là: " + age);
// console.log("Bạn đến từ: " + city);


// 3. Bài tập tính toán (chu vi và diện tích hình chữ nhật)
// Người dùng nhập chiều dài và chiều rộng, sau đó tính và in chu vi, diện tích:

// let length = parseFloat(prompt("Nhập chiều dài:"));
// let width = parseFloat(prompt("Nhập chiều rộng:"));

// let perimeter = 2 * (length + width);
// let area = length * width;

// console.log("Chu vi hình chữ nhật là: " + perimeter);
// console.log("Diện tích hình chữ nhật là: " + area);


// 4. Bài tập đổi chỗ giá trị của hai biến
// Hoán đổi giá trị hai biến mà không dùng biến trung gian:

// let a = 5;
// let b = 10;

// console.log("Trước khi đổi: a = " + a + ", b = " + b);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("Sau khi đổi: a = " + a + ", b = " + b);


// 5. Bài tập chuyển đổi kiểu
// Khai báo một biến kiểu `float` và một biến kiểu `int`. Chuyển đổi và in kết quả:

// let a = 5.75;
// let b = parseInt(a);

// console.log("Giá trị ban đầu (float): " + a);
// console.log("Giá trị sau khi chuyển sang int: " + b);

//6. Bài tập sử dụng biến tĩnh (mô phỏng trong JavaScript)
// Tạo một lớp với biến dùng chung giữa các đối tượng:

// class Counter {
//   static count = 0; // Biến tĩnh

//   constructor() {
//     Counter.count++;
//   }
// }

// let obj1 = new Counter();
// let obj2 = new Counter();
// let obj3 = new Counter();

// console.log("Số đối tượng đã tạo: " + Counter.count);


// 7. Bài tập với biến cục bộ và phiên bản
// Tạo lớp `Student` với các biến phiên bản và in thông tin học sinh:
// class Student {
//   constructor(name, age) {
//     this.name = name; // Biến phiên bản
//     this.age = age;   // Biến phiên bản
//   }

//   display() {
//     console.log("Tên: " + this.name);
//     console.log("Tuổi: " + this.age);
//   }
// }

// let student = new Student("John", 20);
// student.display();


// 8. Bài tập tính trung bình
// Người dùng nhập ba số nguyên và tính trung bình:
// let num1 = parseInt(prompt("Nhập số thứ nhất:"));
// let num2 = parseInt(prompt("Nhập số thứ hai:"));
// let num3 = parseInt(prompt("Nhập số thứ ba:"));

// let average = (num1 + num2 + num3) / 3;

// console.log("Giá trị trung bình: " + average);

//9. Bài tập kiểm tra số chẵn/lẻ
// Kiểm tra số người dùng nhập vào là chẵn hay lẻ:

// let num = parseInt(prompt("Nhập một số nguyên:"));

// let isEven = (num % 2 === 0); // Kiểm tra chẵn/lẻ

// console.log("Số " + num + (isEven ? " là số chẵn." : " là số lẻ."));

// 10. Bài tập lưu thông tin vào đối tượng (mô phỏng Map)
// Tạo đối tượng lưu thông tin học sinh:

// let student = {
//   id: 1,
//   name: "John",
//   grade: "A"
// };

// console.log("Thông tin học sinh:");
// console.log("ID: " + student.id);
// console.log("Tên: " + student.name);
// console.log("Xếp loại: " + student.grade);
