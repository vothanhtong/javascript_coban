//                                                 1. Cấu trúc của vòng lặp `while`

// Cú pháp cơ bản

while (điều_kiện) {
  // Khối lệnh được thực thi nếu điều kiện đúng
}


// Hoạt động của `while`:
// 1. Kiểm tra **điều kiện** trước khi thực hiện khối lệnh.
// 2. Nếu điều kiện **đúng**, thực thi các lệnh bên trong khối.
// 3. Quay lại bước kiểm tra điều kiện.  
// 4. Khi điều kiện **sai**, vòng lặp dừng.

// Ví dụ cơ bản:
// In ra các số từ 1 đến 5:

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++; // Tăng giá trị để thoát vòng lặp
// }



// 2. Ưu điểm và nhược điểm của `while`

// Ưu điểm:
// - Phù hợp với bài toán không biết trước số lần lặp.
// - Linh hoạt với điều kiện kiểm tra phức tạp.

// Nhược điểm:
// - Dễ dẫn đến vòng lặp vô hạn nếu không quản lý đúng điều kiện.
// - Không phù hợp khi biết trước số lần lặp (dùng `for` sẽ tốt hơn).


// 3. Lưu ý khi sử dụng `while`

// 1. Quản lý điều kiện kết thúc:
  //  - Luôn đảm bảo điều kiện sẽ trở thành sai để vòng lặp dừng.  
  //  Ví dụ:
   
   let y = 1;
   while (y <= 5) {
     console.log(i);
     y++; // Điều kiện đảm bảo vòng lặp kết thúc
   }
  

// 2. Tránh điều kiện kiểm tra phức tạp:
  //  - Giữ điều kiện ngắn gọn, dễ hiểu.  
  //  Ví dụ:
   
   while (i > 0 && (i % 2 === 0 || i % 3 === 0)) {
     // Điều kiện quá phức tạp gây khó hiểu
   }
   

// 3. Sử dụng biến đếm hợp lý:
  //  - Biến đếm phải được cập nhật đúng cách.  
  //  Ví dụ:
   
   let count = 10;
   while (count > 0) {
     console.log(count);
     count--; // Giảm dần để thoát vòng lặp
   }
   

// 4.Sử dụng `break` và `continue` đúng cách:
  //  - `break`: Dừng vòng lặp ngay lập tức.  
  //  - `continue`: Bỏ qua lần lặp hiện tại và chuyển sang lần tiếp theo.  
  //  Ví dụ:
   
   let z = 1;
   while (z <= 10) {
     if (z === 5) {
       break; // Thoát vòng lặp khi i = 5
     }
     console.log(z);
     z++;
   }
  


// 4. Bài tập cơ bản với `while`

// 1. Tính tổng từ 1 đến 100

let sum = 0;
let t = 1;
while (t <= 100) {
  sum += t;
  t++;
}
console.log("Tổng từ 1 đến 100 là:", sum);




// 2. Tìm số chẵn từ 1 đến 50

let l = 1;
while (l <= 50) {
  if (l % 2 === 0) {
    console.log(l);
  }
  l++;
}


// 3. Đếm số chữ số của một số nguyên

let number = 12345; // thay bằng số bất kỳ
let countt = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  count++;
}
console.log("Số chữ số là:", count);


// 4. Đảo ngược một số

let numberr = 12345; // thay bằng số bất kỳ
let reversed = 0;
while (number > 0) {
  let digit = number % 10; // Lấy chữ số cuối
  reversed = reversed * 10 + digit; // Ghép chữ số cuối vào số đảo ngược
  number = Math.floor(number / 10); // Loại bỏ chữ số cuối
}
console.log("Số sau khi đảo ngược:", reversed);


// 5. In bảng cửu chương của 5

let a = 1;
while (a <= 10) {
  console.log(`5 x ${i} = ${5 * a}`);
  a++;
}


// 6. Tìm ước số của một số**
let numbers = 12; // thay bằng số bất kỳ
let u = 1;
while (u <= number) {
  if (number % u === 0) {
    console.log(u); // In ra các ước
  }
  u++;
}



// 7. Kiểm tra số nguyên tố

let numbert = 17; // thay bằng số bất kỳ
let i = 2;
let isPrime = true;
while (i <= Math.sqrt(number)) {
  if (number % i === 0) {
    isPrime = false; // Không phải số nguyên tố
    break;
  }
  i++;
}
console.log(`${number} là số nguyên tố?`, isPrime);


// 8. In dãy Fibonacci

// let n = 10; // số lượng số Fibonacci
// let a = 0, b = 1;
// let count = 0;
// while (count < n) {
//   console.log(a); // In ra số Fibonacci hiện tại
//   let temp = a + b;
//   a = b;
//   b = temp;
//   count++;
// }


// 9. Tính giai thừa

// let n = 5; // thay bằng số bất kỳ
// let factorial = 1;
// let i = 1;
// while (i <= n) {
//   factorial *= i; // Nhân dồn
//   i++;
// }
// console.log(`${n}! = ${factorial}`);


// 10. Kiểm tra số đối xứng**

// let number = 121; // thay bằng số bất kỳ
// let original = number;
// let reversed = 0;
// while (number > 0) {
//   let digit = number % 10; // Lấy chữ số cuối
//   reversed = reversed * 10 + digit; // Ghép chữ số cuối vào số đảo ngược
//   number = Math.floor(number / 10); // Loại bỏ chữ số cuối
// }
// console.log(`${original} là số đối xứng?`, original === reversed);


// 5. So sánh `while` và `do...while`**

// | Đặc điểm                     | `while`                            | `do...while`                           |
// |------------------------------|-------------------------------------|-----------------------------------------|
// | **Kiểm tra điều kiện**       | Trước khi thực hiện khối lệnh       | Sau khi thực hiện khối lệnh             |
// | **Thực thi tối thiểu**       | 0 lần (nếu điều kiện sai từ đầu)    | Ít nhất 1 lần                           |
// | **Khi nào dùng**             | Khi cần kiểm tra trước             | Khi muốn đảm bảo thực thi ít nhất 1 lần |