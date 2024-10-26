


//Kiểu dữ liệu cơ bản trong JavaScript

// 1. Primitive Data Types (Kiểu dữ liệu nguyên thủy)
//    - Number: Sử dụng cho cả số nguyên và số thực.
//      
//      let age = 25;      // Số nguyên
//      let price = 19.99; // Số thực
//      ```
//    - String: Dùng cho chuỗi ký tự, được đặt trong cặp dấu ngoặc đơn `' '` hoặc ngoặc kép `" "`.
//      
//      let name = "John";

//    - Boolean: Có hai giá trị `true` và `false`, dùng trong các điều kiện.
//      
//      let isStudent = true;

//    - Undefined: Một biến chưa được gán giá trị sẽ có kiểu `undefined`.
//      
//      let x;
//      console.log(x); // undefined

//    - Null: Là giá trị "không có gì", thường dùng để gán cho biến muốn trống.
//      
//      let y = null;

//    - Symbol: Đại diện cho một giá trị duy nhất và bất biến, thường dùng làm khóa trong các đối tượng.
//      
//      let uniqueID = Symbol('id');


// 2. Object(Đối tượng)
//    - Object: Là một cấu trúc dữ liệu phức tạp, dùng để lưu trữ dữ liệu theo cặp `key: value`.
//      
//      let person = {
//        name: "John",
//        age: 30,
//        isStudent: true
//      };

//    - Array: Một loại đặc biệt của Object để lưu trữ danh sách các giá trị.
//      
//      let fruits = ["apple", "banana", "cherry"];

//    - Function: Cũng là một kiểu dữ liệu trong JavaScript, dùng để thực hiện các công việc hoặc tính toán.
//      
//      function greet() {
//        console.log("Hello!");
//      }


// 3. BigInt (Số lớn)
//    - Dùng để biểu diễn các số nguyên rất lớn vượt quá giới hạn của kiểu `Number`.
//      
//      let bigNumber = 123456789012345678901234567890n;


// Kiểm tra kiểu dữ liệu
// Dùng `typeof` để kiểm tra kiểu của một biến:
// 
// let age = 25;
// console.log(typeof age); // "number"



// ### Bài Tập 1: Khai Báo và Kiểm Tra Các Kiểu Dữ Liệu
// Khai báo các biến với các kiểu dữ liệu khác nhau và sử dụng `typeof` để kiểm tra kiểu dữ liệu của chúng.


// let age = 30; // Number
// let name = "Alice"; // String
// let isStudent = false; // Boolean
// let x; // Undefined
// let y = null; // Null
// let uniqueID = Symbol('id'); // Symbol

console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof x); // "undefined"
console.log(typeof y); // "object"
console.log(typeof uniqueID); // "symbol"

// ### Bài Tập 2: Tạo Đối Tượng và Mảng
// Tạo một đối tượng mô tả một sinh viên và một mảng chứa danh sách các môn học.


let student = {
    name: "Bob",
    age: 22,
    major: "Computer Science"
};

let subjects = ["Mathematics", "Physics", "Programming", "English"];

console.log(student);
console.log(subjects);

// ### Bài Tập 3: Hàm và Thao Tác Với Đối Tượng
// Tạo một hàm để in thông tin sinh viên và gọi hàm với đối tượng sinh viên bạn đã tạo.


function printStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Major: ${student.major}`);
}

printStudentInfo(student);

// ### Bài Tập 4: Sử Dụng BigInt
// Sử dụng BigInt để lưu trữ một số nguyên rất lớn và in ra giá trị của nó.


let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// ### Bài Tập 5: Thao Tác Với Mảng
// Thêm một môn học mới vào mảng và in ra toàn bộ danh sách môn học.

subjects.push("History");
console.log(subjects);

// ### Bài Tập 6: Kiểm Tra Điều Kiện
// Sử dụng kiểu Boolean trong một câu lệnh điều kiện để kiểm tra xem sinh viên có đủ tuổi để tham gia một khóa học hay không.


if (student.age >= 18) {
    console.log(`${student.name} đủ tuổi để tham gia khóa học.`);
} else {
    console.log(`${student.name} chưa đủ tuổi để tham gia khóa học.`);
}


// Trong JavaScript, biến (variable) là cách để lưu trữ và quản lý dữ liệu. Để khai báo biến trong JavaScript, bạn có thể sử dụng ba từ khóa chính: `var`, `let`, và `const`. Dưới đây là các khái niệm cơ bản về từng loại:

// 1. var: 
//    - Đây là cách khai báo biến cũ trong JavaScript.
//    - Phạm vi của `var` là toàn cục (global) nếu được khai báo bên ngoài hàm, và cục bộ (local) nếu được khai báo trong hàm.
//    - var có đặc điểm bị hoisted (được đưa lên đầu phạm vi trước khi mã thực sự được thực thi), tức là bạn có thể sử dụng biến trước khi khai báo.
   
   
   var x = 10;
   console.log(x); // 10


// 2. let:
//    - Giới thiệu trong ES6 (ECMAScript 2015), `let` giúp khai báo biến có phạm vi khối (block scope). Điều này có nghĩa là biến chỉ tồn tại trong khối `{}` mà nó được khai báo.
//    - Không bị hoisted giống `var` và không thể truy cập trước khi khai báo.

   
   let y = 20;
   if (true) {
       let z = 30;
       console.log(z); // 30
   }
   console.log(z); // Lỗi, z không tồn tại ngoài khối
   

// 3. const:
//    - Cũng được giới thiệu trong ES6, `const` khai báo một hằng số, nghĩa là giá trị của biến không thể thay đổi sau khi đã được gán.
//    - Cũng có phạm vi khối như `let`.
//    - Tuy nhiên, với các kiểu dữ liệu phức tạp như đối tượng (objects) hoặc mảng (arrays), các thuộc tính bên trong có thể thay đổi, nhưng không thể gán lại biến đó.

   
   const PI = 3.14;
   // PI = 3.14159; // Lỗi, không thể gán lại hằng số

   const myArray = [1, 2, 3];
   myArray.push(4); // Hợp lệ, thay đổi nội dung mảng

