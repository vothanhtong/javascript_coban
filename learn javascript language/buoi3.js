
//                                                Cấu trúc của vòng lặp `while`

// 1. Cấu trúc của vòng lặp `while`
// Cú pháp cơ bản

// while (điều_kiện) {
  // Khối lệnh được thực thi nếu điều kiện đúng
// }

// Hoạt động:
// - Bước 1: Kiểm tra điều kiện.
// - Bước 2: Nếu điều kiện đúng, khối lệnh bên trong `while` sẽ thực thi.
// - Bước 3: Quay lại kiểm tra điều kiện, nếu điều kiện vẫn đúng, lặp lại khối lệnh.
// - Bước 4: Khi điều kiện sai, vòng lặp kết thúc.



// 2. Ví dụ cơ bản


// let i = 1;
// while (i <= 5) {
//   console.log(i); // In ra các số từ 1 đến 5
//   i++;
// }

// 3. Ưu điểm và nhược điểm của vòng lặp `while`

//  Ưu điểm:
// - Dễ sử dụng, đặc biệt khi không biết trước số lần lặp.
// - Linh hoạt cho các bài toán yêu cầu kiểm tra điều kiện phức tạp.

// Nhược điểm:
// - Có thể dẫn đến **vòng lặp vô hạn** nếu không quản lý điều kiện đúng cách.
// - Khó kiểm soát hơn so với `for` khi biết trước số lần lặp.


// 4. Lưu ý khi sử dụng vòng lặp `while`

// 1. Quản lý điều kiện kết thúc:
//    - Đảm bảo điều kiện trong vòng lặp sẽ trở thành sai tại một thời điểm để tránh vòng lặp vô hạn.

//    Ví dụ vòng lặp vô hạn (sai cách):
   
//    let i = 1;
//    while (i <= 5) {
//      console.log(i); // Sẽ chạy mãi mãi vì giá trị của i không thay đổi
//    }


//    Sửa đúng cách:

//    let i = 1;
//    while (i <= 5) {
//      console.log(i);
//      i++; // Đảm bảo i tăng để điều kiện kết thúc
//    }

// 2. Tránh điều kiện kiểm tra phức tạp:
//    - Điều kiện kiểm tra nên rõ ràng, tránh quá phức tạp vì dễ gây lỗi logic.

//    Ví dụ:
   
//    while (i > 0 && (i % 2 === 0 || i % 3 === 0)) {
//      // Điều kiện phức tạp gây khó hiểu
//    }


// 3.Sử dụng biến đếm và cập nhật giá trị đúng cách:
//    - Luôn cập nhật giá trị của biến điều kiện trong vòng lặp, nếu không sẽ dẫn đến vòng lặp vô hạn.

//    Ví dụ:
   
//    let count = 10;
//    while (count > 0) {
//      console.log(count);
//      count--; // Giảm count để vòng lặp kết thúc
//    }

// 4.Sử dụng `break` và `continue` hợp lý:
//    - `break`: Dùng để thoát khỏi vòng ngay lập tức.
//    - `continue`: Bỏ qua phần còn lại vòng lặp hiện tại và nhảy sang lần lặp tiếp theo.

//    Ví dụ:
   
//    let i = 1;
//    while (i <= 10) {
//      if (i === 5) {
//        break; // Kết thúc vòng lặp khi i = 5
//      }
//      console.log(i);
//      i++;
//    }

//    i = 1;
//    while (i <= 10) {
//      i++;
//      if (i % 2 !== 0) {
//        continue; // Bỏ qua số lẻ
//      }
//      console.log(i); // Chỉ in ra số chẵn
//    }


// 5. Đảm bảo hiệu suất tốt:
//    - Tránh thực hiện các phép tính nặng hoặc không cần thiết trong điều kiện vòng lặp.
//    - Tối ưu hóa logic để tránh các vòng lặp quá dài hoặc không hiệu quả.



// 5. So sánh `while` và `do...while`**

// | Đặc điểm                    | `while`                                             | `do...while`                                       |
// |-----------------------------|-----------------------------------------------------|---------------------------------------------------|
// | **Kiểm tra điều kiện**      | Kiểm tra **trước** khi thực hiện khối lệnh          | Kiểm tra **sau**, nên khối lệnh luôn thực thi ít nhất 1 lần |
// | **Sử dụng khi nào**         | Dùng khi cần kiểm tra điều kiện trước khi lặp       | Dùng khi muốn đảm bảo khối lệnh thực thi ít nhất một lần |

// Ví dụ `do...while`:

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5); // Điều kiện sai nhưng lệnh vẫn chạy 1 lần


// 6. Khi nào nên dùng vòng lặp `while`?
// - Khi không biết trước số lần lặp.
// - Khi cần thực thi lặp với điều kiện phức tạp.
// - Khi cần linh hoạt thoát khỏi vòng lặp dựa trên các kiểm tra điều kiện trong quá trình lặp.


// 7. Một số bài toán thường gặp với `while`
// - Tính tổng, tính giai thừa, kiểm tra số nguyên tố.
// - Đọc dữ liệu cho đến khi người dùng nhập điều kiện dừng.
// - Các thuật toán lặp dừng dựa trên kết quả trung gian (ví dụ: tìm xấp xỉ trong toán học).





// BÀI TẬP :

// 1. Tính tổng từ 1 đến 100
// Viết chương trình sử dụng `while` để tính tổng các số từ 1 đến 100.

let sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log("Tổng từ 1 đến 100 là:", sum);

// 2. Tìm số chẵn từ 1 đến 50
// Viết chương trình in ra các số chẵn từ 1 đến 50.

let l = 1;
while (l <= 50) {
  if (l % 2 === 0) {
    console.log(i);
  }
  l++;
}

// 3. Đếm số chữ số của một số nguyên
// Nhập vào một số nguyên dương, đếm số lượng chữ số của số đó.

let numberr = 12345; // thay bằng số bất kỳ
let countt = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  count++;
}
console.log("Số chữ số là:", count);


// 4. Đảo ngược một số
// Viết chương trình nhập vào một số nguyên và đảo ngược nó.

let numbers = 12345; // thay bằng số bất kỳ
let reversed = 0;
while (number > 0) {
  let digit = number % 10;
  reversed = reversed * 10 + digit;
  number = Math.floor(number / 10);
}
console.log("Số sau khi đảo ngược:", reversed);


// 5. In bảng cửu chương của 5
// Sử dụng `while` để in bảng cửu chương của 5.


let u = 1;
while (i <= 10) {
  console.log(`5 x ${i} = ${5 * i}`);
  i++;
}

// 6. Tìm ước số của một số
// Nhập vào một số nguyên và in ra tất cả các ước của số đó.

let number = 12; // thay bằng số bất kỳ
let y = 1;
while (i <= number) {
  if (number % i === 0) {
    console.log(i);
  }
  i++;
}
// 7. Kiểm tra số nguyên tố
// Sử dụng `while` để kiểm tra một số có phải số nguyên tố hay không.


let numbere = 17; // thay bằng số bất kỳ
let t = 2;
let isPrime = true;
while (i <= Math.sqrt(number)) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}
console.log(`${number} là số nguyên tố?`, isPrime);
// 8. Tìm số Fibonacci**
// Sử dụng `while` để in ra `n` số đầu tiên trong dãy Fibonacci.


let n = 10; // số lượng số Fibonacci
let a = 0, b = 1;
let count = 0;
while (count < n) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  count++;
// 9. Tính giai thừa của một số**
// Sử dụng `while` để tính giai thừa của một số nguyên dương `n`.


let n = 5; // thay bằng số bất kỳ
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(`${n}! = ${factorial}`);
// 10. Kiểm tra số đối xứng**
// Nhập vào một số nguyên và kiểm tra xem số đó có đối xứng không.

let number = 121; // thay bằng số bất kỳ
let original = number;
let reversed = 0;
while (number > 0) {
  let digit = number % 10;
  reversed = reversed * 10 + digit;
  number = Math.floor(number / 10);
}