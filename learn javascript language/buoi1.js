

// // Hướng Dẫn Kiểu Dữ Liệu và Toán Tử Trong JavaScript

// // 1. Kiểu Dữ Liệu Cơ Bản

// // 1.1. Primitive Data Types
// // Number : Sử dụng cho cả số nguyên và số thực.
//   javascript
//   let age = 25;      // Số nguyên
//   let price = 19.99; // Số thực

// // String : Dùng cho chuỗi ký tự.
//   javascript
//   let name = "John";
  

// // Boolean : Có hai giá trị `true` và `false`.
//   avascript
//   let isStudent = true;
  

// // Undefined: Biến chưa được gán giá trị.
//   javascript
//   let x;
//   console.log(x); // undefined


// // Null : Giá trị "không có gì".
//   javascript
//   let y = null;
  

// // Symbol : Đại diện cho giá trị duy nhất.
//   avascript
//   let uniqueID = Symbol('id');
  

// // 1.2. Object (Đối tượng)
// // - Object : Cấu trúc dữ liệu phức tạp lưu trữ theo cặp `key: value`.
//   javascript
//   let person = {
//     name: "John",
//     age: 30,
//     isStudent: true
//   };
  

// // Array : Danh sách các giá trị.
//   javascript
//   let fruits = ["apple", "banana", "cherry"];


// // Function : Kiểu dữ liệu để thực hiện các công việc.
//   avascript
//   function greet() {
//     console.log("Hello!");
//   }
  

// //  1.3. BigInt
// // BigInt: Số nguyên rất lớn.
//   javascript
//   let bigNumber = 123456789012345678901234567890n;


// // 1.4. Kiểm Tra Kiểu Dữ Liệu
// // Dùng `typeof` để kiểm tra kiểu của một biến:
// javascript
// console.log(typeof age); // "number"


// // 2. Bài Tập

// //  Bài Tập 1: Khai Báo và Kiểm Tra Các Kiểu Dữ Liệu
// // javascript
// // let age = 30; // Number
// // let name = "Alice"; // String
// // let isStudent = false; // Boolean
// // let x; // Undefined
// // let y = null; // Null
// // let uniqueID = Symbol('id'); // Symbol

// // console.log(typeof age); // "number"
// // console.log(typeof name); // "string"
// // console.log(typeof isStudent); // "boolean"
// // console.log(typeof x); // "undefined"
// // console.log(typeof y); // "object"
// // console.log(typeof uniqueID); // "symbol"


// //  Bài Tập 2: Tạo Đối Tượng và Mảng
// javascript
// let student = {
//     name: "Bob",
//     age: 22,
//     major: "Computer Science"
// };

// let subjects = ["Mathematics", "Physics", "Programming", "English"];

// console.log(student);
// console.log(subjects);


// //  Bài Tập 3: Hàm và Thao Tác Với Đối Tượng
// javascript
// function printStudentInfo(student) {
//     console.log(`Name: ${student.name}`);
//     console.log(`Age: ${student.age}`);
//     console.log(`Major: ${student.major}`);
// }

// printStudentInfo(student);


// //  Bài Tập 4: Sử Dụng BigInt
// javascript
// let bigNumber = 123456789012345678901234567890n;
// console.log(bigNumber);


// //  Bài Tập 5: Thao Tác Với Mảng
// javascript
// subjects.push("History");
// console.log(subjects);


// //  Bài Tập 6: Kiểm Tra Điều Kiện
// javascript
// if (student.age >= 18) {
//     console.log(`${student.name} đủ tuổi để tham gia khóa học.`);
// } else {
//     console.log(`${student.name} chưa đủ tuổi để tham gia khóa học.`);
// }


// // 3. Biến Trong JavaScript

// //  3.1. Khai Báo Biến
// // - var: Khai báo biến với phạm vi toàn cục hoặc cục bộ.
//   javascript
//   var x = 10;
//   console.log(x); // 10
  

// // - let : Biến có phạm vi khối.
//   javascript
//   let y = 20;
//   if (true) {
//       let z = 30;
//       console.log(z); // 30
//   }
//   // console.log(z); // Lỗi
  

// // - const : Khai báo hằng số.
//   javascript
//   const PI = 3.14;
//   const myArray = [1, 2, 3];
//   myArray.push(4); // Hợp lệ
  

// // 4. Toán Tử Trong JavaScript

// // 4.1. Toán Tử Số Học
// javascript
// let a = 10;
// let b = 3;
// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.3333...
// console.log(a % b);  // 1
// console.log(a ** b); // 1000


// //  4.2. Toán Tử Gán
// javascript
// let x = 5;
// x += 3; // x = x + 3
// console.log(x); // 8


// // 4.3. Toán Tử So Sánh
// javascript
// let m = 10;
// let n = '10';
// console.log(m == n);  // true
// console.log(m === n); // false


// // 4.4. Toán Tử Logic
// javascript
// let p = true;
// let q = false;
// console.log(p && q);  // false


// //  4.5. Toán Tử Điều Kiện
// javascript
// let age = 18;
// let isAdult = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
// console.log(isAdult); // Đủ tuổi


// //  4.6. Toán Tử Chuỗi
// javascript
// let firstName = "Võ";
// let lastName = "Tòng";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // Võ Tòng


// // 4.7. Toán Tử Kiểu
// javascript
// let num = 42;
// console.log(typeof num);  // "number"

// // 4.8. Toán Tử Nullish Coalescing
// javascript
// let user;
// let defaultName = "Guest";
// let name = user ?? defaultName;
// console.log(name); // Guest