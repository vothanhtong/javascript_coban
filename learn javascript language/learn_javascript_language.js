


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




// Js có 7 kiểu dữ liệu cơ bản
// + Primitive Data Types ( Nguyên Thủy ): Number, String, Boolean, Undefined, Null,Symbol, BigInt
// + Reference Data Type ( Phức hợp ): Object, Array, Function
// Một nơi để lưu trữ giá trị. Biến được khai báo bằng cách sử dụng các từ khóa var, let, hoặc const
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



//                                                                                        Operators
// 1. Arithmetic Operators ( Toán tử Số học).
// 2. Assignment Operators ( Toán tử gán ).
// 3. Comparison Operators ( Toán tử so sánh ).
// 4. Logical Operators ( Toán tử so logic ).
// 5. Ternary Operator ( Toán tử điều kiện ).
// 6. String Operators ( Toán tử chuỗi ).
// 7. Type Operators ( Toán tử kiểu ).
// 8.  Toán Tử Nullish Coalescing



// 1. Toán tử số học (Arithmetic Operators)

// Các toán tử số học thực hiện các phép tính số học như cộng, trừ, nhân, chia, v.v.

// | Toán tử | Miêu tả      |
// |---------|--------------|
// | `+`     | Cộng         |
// | `-`     | Trừ          |
// | `*`     | Nhân         |
// | `/`     | Chia         |
// | `%`     | Chia lấy dư  |
// | `**`    | Lũy thừa     |

// Bài tập:

let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333...
console.log(a % b);  // 1 (dư sau phép chia)
console.log(a ** b); // 1000 (10 lũy thừa 3)


// 2. Toán tử gán (Assignment Operators)

// Toán tử gán dùng để gán giá trị cho biến.

// | Toán tử | Miêu tả                  |
// |---------|--------------------------|
// | `=`     | Gán                      |
// | `+=`    | Cộng và gán               |
// | `-=`    | Trừ và gán                |
// | `*=`    | Nhân và gán               |
// | `/=`    | Chia và gán               |
// | `%=`    | Chia lấy dư và gán        |

// Bài tập:

let x = 5;
x += 3; // x = x + 3
console.log(x); // 8
x *= 2; // x = x * 2
console.log(x); // 16
x %= 7; // x = x % 7
console.log(x); // 2


// 3. Toán tử so sánh (Comparison Operators)

// Dùng để so sánh hai giá trị và trả về `true` hoặc `false`.

// | Toán tử | Miêu tả                   |
// |---------|---------------------------|
// | `==`    | Bằng                      |
// | `===`   | Bằng nghiêm ngặt (cả kiểu)|
// | `!=`    | Khác                      |
// | `!==`   | Khác nghiêm ngặt          |
// | `>`     | Lớn hơn                   |
// | `<`     | Nhỏ hơn                   |
// | `>=`    | Lớn hơn hoặc bằng         |
// | `<=`    | Nhỏ hơn hoặc bằng         |

// Bài tập:

let m = 10;
let n = '10';
console.log(m == n);  // true (so sánh giá trị)
console.log(m === n); // false (so sánh giá trị và kiểu)
console.log(m != n);  // false
console.log(m !== n); // true
console.log(m > 5);   // true
console.log(m <= 10); // true

// 4. Toán tử logic (Logical Operators)

// Dùng để thực hiện các phép toán logic.

// | Toán tử | Miêu tả         |
// |---------|-----------------|
// | `&&`    | AND             |
// | `||`    | OR              |
// | `!`     | NOT             |

// Bài tập:

let p = true;
let q = false;
console.log(p && q);  // false (vì q là false)
console.log(p || q);  // true (vì p là true)
console.log(!p);      // false (đảo ngược giá trị của p)

// 5. Toán tử điều kiện (Ternary Operator)

// Toán tử điều kiện kiểm tra một điều kiện và trả về một trong hai giá trị.

// Cú pháp:

condition ? value_if_true : value_if_false;

// Bài tập:

let age = 18;
let isAdult = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
console.log(isAdult); // Đủ tuổi


//  6. Toán tử chuỗi (String Operators)

// Toán tử `+` được dùng để nối chuỗi.

// Bài tập:

let firstName = "Võ";
let lastName = "Tòng";
let fullName = firstName + " " + lastName;
console.log(fullName); // Võ Tòng


// 7. Toán tử kiểu (Type Operators)

// Dùng để kiểm tra kiểu dữ liệu của một biến.

// | Toán tử    | Miêu tả                    |
// |------------|----------------------------|
// | `typeof`   | Trả về kiểu của biến       |
// | `instanceof`| Kiểm tra một đối tượng có phải là thể hiện của một lớp nào đó không |

// Bài tập:

let num = 42;
let str = "Hello";
console.log(typeof num);  // "number"
console.log(typeof str);  // "string"
console.log(str instanceof String); // false (vì str là kiểu dữ liệu cơ bản, không phải object)


//  8. Toán tử Nullish Coalescing (??)

// Toán tử này trả về giá trị đầu tiên không phải `null` hoặc `undefined`.

// Bài tập:

let user;
let defaultName = "Guest";
let name = user ?? defaultName;
console.log(name); // Guest (vì user là undefined)
