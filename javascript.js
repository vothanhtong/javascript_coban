//Dưới đây là lộ trình học JavaScript đã được bỏ dấu **:

// 1. Tổng quan về JavaScript  
// - Tìm hiểu JavaScript là gì, vai trò của nó trong lập trình web và sự khác biệt giữa JavaScript với các ngôn ngữ khác như HTML và CSS.

// 2. Cài đặt môi trường làm việc  
// - Biết cách thiết lập môi trường làm việc cơ bản, như cài đặt trình duyệt (Chrome, Firefox) và sử dụng công cụ Developer Tools để chạy và kiểm tra mã JavaScript.

// 3. Cú pháp JavaScript cơ bản  
// - Làm quen với cú pháp JavaScript: khai báo biến, cấu trúc câu lệnh, cú pháp viết lệnh cơ bản.

// 4. Biến và Kiểu dữ liệu  
// - Học cách khai báo biến bằng `let`, `const`, `var` và hiểu các kiểu dữ liệu cơ bản (string, number, boolean, object, array).

// 5. Toán tử  
// - Tìm hiểu các toán tử trong JavaScript, bao gồm toán tử số học (như `+`, `-`, `*`, `/`), toán tử gán (`=`, `+=`, `-=`, ...), và toán tử logic (`&&`, `||`, `!`).

// 6. Cấu trúc điều kiện (If...Else)  
// - Biết cách sử dụng câu lệnh điều kiện `if...else` và `switch` để kiểm soát luồng của chương trình.

// 7. Vòng lặp  
// - Hiểu cách sử dụng các vòng lặp cơ bản như `for`, `while`, và `do...while` để lặp lại các đoạn mã khi cần thiết.

// 8. Hàm (Function)  
// - Biết cách khai báo và gọi hàm, hiểu về các tham số, giá trị trả về và làm quen với các khái niệm như hàm ẩn danh, hàm mũi tên (arrow function).

// 9. Mảng và Đối tượng  
// - Học cách sử dụng mảng để lưu trữ danh sách giá trị và đối tượng để lưu trữ thông tin phức tạp hơn.

// 10. Làm quen với DOM (Document Object Model)  
//  - Bắt đầu học cách sử dụng JavaScript để thao tác với các phần tử HTML bằng cách sử dụng DOM (thêm, sửa, xóa các phần tử HTML).

// Bắt đầu với các bước trên sẽ giúp bạn có nền tảng vững chắc để phát triển các kỹ năng JavaScript nâng cao sau này. Khi đã thành thạo, bạn có thể tiếp tục học về các chủ đề nâng cao như sự kiện, bất đồng bộ (async/await), và lập trình hướng đối tượng trong JavaScript.

// 1. JavaScript Basics  
// - Mô tả ngắn gọn: "Tài liệu hướng dẫn cơ bản về JavaScript dành cho người mới bắt đầu."

// 2. Introduction to JavaScript  
// - Mô tả ngắn gọn: "Khởi đầu hành trình học JavaScript từ những khái niệm cơ bản nhất."

// 3. JavaScript Syntax and Variables  
// - Mô tả ngắn gọn: "Hướng dẫn về cú pháp và cách khai báo biến trong JavaScript."

// 4. JavaScript Operators  
// - Mô tả ngắn gọn: "Học các loại toán tử trong JavaScript: số học, gán, logic, so sánh."

// 5. JavaScript Functions  
// - Mô tả ngắn gọn: "Tìm hiểu cách khai báo và sử dụng hàm trong JavaScript."

// 6. JavaScript Loops  
// - Mô tả ngắn gọn: "Các loại vòng lặp trong JavaScript như `for`, `while`, `do...while`."

// 7. JavaScript Arrays  
// - Mô tả ngắn gọn: "Cách làm việc với mảng trong JavaScript và các phương thức thao tác mảng."

// 8. JavaScript Objects  
// - Mô tả ngắn gọn: "Giới thiệu về đối tượng trong JavaScript, cách khai báo và truy cập thuộc tính."

// 9. JavaScript DOM Manipulation  
// - Mô tả ngắn gọn: "Hướng dẫn thao tác DOM cơ bản để làm việc với các phần tử HTML."

// 10. JavaScript Events  
//  - Mô tả ngắn gọn: "Sự kiện trong JavaScript và cách quản lý sự kiện như click, hover."

// Mỗi bìa có thể thiết kế với tiêu đề chính, một hình ảnh biểu trưng đơn giản như biểu tượng của JavaScript 
// (chữ "JS" trong một hình lục giác màu vàng), và nội dung mô tả ngắn để giúp học viên nắm bắt chủ đề của tài liệu.



// 1. Tính tổng hai số: Viết một hàm nhận vào hai số và trả về tổng của chúng.


function sum(a, b) {
    return a + b;
}


// 2.Kiểm tra số chẵn lẻ: Viết một hàm nhận vào một số và kiểm tra xem số đó là chẵn hay lẻ.

   function isEven(num) {
       return num % 2 === 0;
}


// 3.Đảo ngược chuỗi: Viết một hàm nhận vào một chuỗi và trả về chuỗi đó sau khi đã đảo ngược.
  
function reverseString(str) {
    return str.split('').reverse().join('');
}


// 4. Tìm số lớn nhất trong mảng: Viết một hàm nhận vào một mảng số và trả về số lớn nhất trong mảng đó.
   
function findMax(arr) {
    return Math.max(...arr);
}
   

// 5.Kiểm tra chuỗi Palindrome: Viết một hàm kiểm tra xem một chuỗi có phải là palindrome hay không.

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}


// 6. Tính giai thừa : Viết một hàm tính giai thừa của một số nguyên dương.
  
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


// 7. Sắp xếp mảng: Viết một hàm nhận vào một mảng số và trả về mảng đó đã được sắp xếp theo thứ tự tăng dần.
   
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}


// 8. Tìm kiếm trong mảng: Viết một hàm nhận vào một mảng và một giá trị, và kiểm tra xem giá trị đó có tồn tại trong mảng hay không.
  
function includesValue(arr, value) {
    return arr.includes(value);
}


// 9.Tạo mảng Fibonacci: Viết một hàm tạo ra dãy số Fibonacci đến một số n cho trước.

   function fibonacci(n) {
       let fib = [0, 1];
       for (let i = 2; i < n; i++) {
           fib[i] = fib[i - 1] + fib[i - 2];
       }
       return fib.slice(0, n);
   }

// 10. Đếm số lần xuất hiện của một ký tự trong chuỗi: Viết một hàm đếm số lần một ký tự xuất hiện trong chuỗi.

    function countChar(str, char) {
        return str.split(char).length - 1;
    }

//  TÍNH TỔNG 


// 1. Tính tổng hai số: Viết hàm nhận vào hai số và trả về tổng của chúng.
   
   function sumTwoNumbers(a, b) {
       return a + b;
   }
   

// 2. Tính tổng của mảng số: Viết hàm nhận vào một mảng các số và trả về tổng của các số trong mảng.
   
   function sumArray(arr) {
       return arr.reduce((total, num) => total + num, 0);
   }
   

// 3. Tính tổng các số chẵn trong mảng: Viết hàm nhận vào một mảng và trả về tổng các số chẵn.
   
   function sumEvenNumbers(arr) {
       return arr.filter(num => num % 2 === 0).reduce((total, num) => total + num, 0);
   }
   

// 4. Tính tổng các số lẻ trong mảng: Viết hàm nhận vào một mảng và trả về tổng các số lẻ.
   
   function sumOddNumbers(arr) {
       return arr.filter(num => num % 2 !== 0).reduce((total, num) => total + num, 0);
   }
   

// 5. **Tính tổng các số từ 1 đến n**: Viết hàm nhận vào một số n và trả về tổng của tất cả các số từ 1 đến n.
   
   function sumUpToN(n) {
       return (n * (n + 1)) / 2;
   }
   

// 6. Tính tổng các số trong chuỗi: Viết hàm nhận vào một chuỗi các số cách nhau bằng dấu phẩy và trả về tổng các số.
   
   function sumStringNumbers(str) {
       return str.split(',').map(Number).reduce((total, num) => total + num, 0);
   }
  

// 7. Tính tổng các số trong một đối tượng: Viết hàm nhận vào một đối tượng có các thuộc tính là số và trả về tổng các giá trị.
   
   function sumObjectValues(obj) {
       return Object.values(obj).reduce((total, num) => total + num, 0);
   }
   

// 8. Tính tổng các số nguyên tố trong mảng: Viết hàm nhận vào một mảng và trả về tổng các số nguyên tố.
   
   function isPrime(num) {
       if (num < 2) return false;
       for (let i = 2; i <= Math.sqrt(num); i++) {
           if (num % i === 0) return false;
       }
       return true;
   }

   function sumPrimeNumbers(arr) {
       return arr.filter(isPrime).reduce((total, num) => total + num, 0);
   }
   

// 9. Tính tổng của hai mảng: Viết hàm nhận vào hai mảng và trả về tổng các số trong cả hai mảng.
   
   function sumTwoArrays(arr1, arr2) {
       return sumArray(arr1) + sumArray(arr2);
   }
   

// 10. Tính tổng các số có chỉ số chẵn trong mảng : Viết hàm nhận vào một mảng và trả về tổng các số ở vị trí chỉ số chẵn.
    
    function sumEvenIndex(arr) {
        return arr.filter((_, index) => index % 2 === 0).reduce((total, num) => total + num, 0);
    }
    

