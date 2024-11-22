// // 1. Cấu trúc của vòng lặp `while`

// **Cú pháp cơ bản**:
// ```javascript
// while (điều_kiện) {
//   // Khối lệnh thực thi nếu điều kiện đúng
// }
// ```

// **Cách hoạt động**:
// 1. **Kiểm tra điều kiện** trước khi thực hiện.
// 2. **Nếu điều kiện đúng**, thực thi các lệnh trong khối.
// 3. **Lặp lại kiểm tra điều kiện**.
// 4. **Khi điều kiện sai**, thoát vòng lặp.

// **Ví dụ**:
// In các số từ 1 đến 5:
// ```javascript
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++; // Tăng giá trị để thoát vòng lặp
// }
// ```

// ---

// ### **2. Ưu điểm và nhược điểm của `while`**

// | **Ưu điểm**                                         | **Nhược điểm**                                           |
// |-----------------------------------------------------|---------------------------------------------------------|
// | Phù hợp khi **không biết trước số lần lặp**.         | Dễ dẫn đến vòng lặp vô hạn nếu không quản lý điều kiện. |
// | Thích hợp với các **điều kiện phức tạp**.           | Không tối ưu khi biết trước số lần lặp (dùng `for`).    |

// ---

// ### **3. Lưu ý khi sử dụng `while`**

// 1. **Quản lý điều kiện kết thúc**:
//    - Đảm bảo điều kiện sẽ sai sau một số lần lặp:
//      ```javascript
//      let y = 1;
//      while (y <= 5) {
//        console.log(y);
//        y++; // Thoát vòng lặp
//      }
//      ```

// 2. **Tránh điều kiện kiểm tra phức tạp**:
//    - Điều kiện đơn giản, dễ hiểu giúp tránh nhầm lẫn:
//      ```javascript
//      while (i > 0 && i % 2 === 0) {
//        // Điều kiện đơn giản, dễ hiểu
//      }
//      ```

// 3. **Sử dụng biến đếm hợp lý**:
//    - Cập nhật biến đếm để vòng lặp không vô hạn:
//      ```javascript
//      let count = 10;
//      while (count > 0) {
//        console.log(count);
//        count--; // Điều kiện kết thúc hợp lý
//      }
//      ```

// 4. **Sử dụng `break` và `continue` đúng cách**:
//    - `break`: Thoát khỏi vòng lặp ngay lập tức.
//    - `continue`: Bỏ qua lần lặp hiện tại, tiếp tục vòng tiếp theo.
//      ```javascript
//      let z = 1;
//      while (z <= 10) {
//        if (z === 5) {
//          break; // Thoát vòng lặp khi z = 5
//        }
//        console.log(z);
//        z++;
//      }
//      ```

// ---

// ### **4. Bài tập thực hành với `while`**

// 1. **Tính tổng từ 1 đến 100**:
//    ```javascript
//    let sum = 0;
//    let t = 1;
//    while (t <= 100) {
//      sum += t;
//      t++;
//    }
//    console.log("Tổng từ 1 đến 100 là:", sum);
//    ```

// 2. **Tìm số chẵn từ 1 đến 50**:
//    ```javascript
//    let l = 1;
//    while (l <= 50) {
//      if (l % 2 === 0) {
//        console.log(l);
//      }
//      l++;
//    }
//    ```

// 3. **Đếm số chữ số của một số nguyên**:
//    ```javascript
//    let number = 12345;
//    let count = 0;
//    while (number > 0) {
//      number = Math.floor(number / 10);
//      count++;
//    }
//    console.log("Số chữ số là:", count);
//    ```

// 4. **Đảo ngược một số**:
//    ```javascript
//    let number = 12345;
//    let reversed = 0;
//    while (number > 0) {
//      let digit = number % 10; // Lấy chữ số cuối
//      reversed = reversed * 10 + digit; // Ghép chữ số
//      number = Math.floor(number / 10); // Loại bỏ chữ số cuối
//    }
//    console.log("Số sau khi đảo ngược:", reversed);
//    ```

// 5. **In bảng cửu chương của 5**:
//    ```javascript
//    let a = 1;
//    while (a <= 10) {
//      console.log(`5 x ${a} = ${5 * a}`);
//      a++;
//    }
//    ```

// 6. **Tìm ước số của một số**:
//    ```javascript
//    let number = 12;
//    let u = 1;
//    while (u <= number) {
//      if (number % u === 0) {
//        console.log(u);
//      }
//      u++;
//    }
//    ```

// 7. **Kiểm tra số nguyên tố**:
//    ```javascript
//    let number = 17;
//    let i = 2;
//    let isPrime = true;
//    while (i <= Math.sqrt(number)) {
//      if (number % i === 0) {
//        isPrime = false;
//        break;
//      }
//      i++;
//    }
//    console.log(`${number} là số nguyên tố?`, isPrime);
//    ```

// 8. **In dãy Fibonacci**:
//    ```javascript
//    let n = 10; // Số lượng số Fibonacci
//    let a = 0, b = 1;
//    let count = 0;
//    while (count < n) {
//      console.log(a);
//      let temp = a + b;
//      a = b;
//      b = temp;
//      count++;
//    }
//    ```

// 9. **Tính giai thừa**:
//    ```javascript
//    let n = 5;
//    let factorial = 1;
//    let i = 1;
//    while (i <= n) {
//      factorial *= i;
//      i++;
//    }
//    console.log(`${n}! = ${factorial}`);
//    ```

// 10. **Kiểm tra số đối xứng**:
//     ```javascript
//     let number = 121;
//     let original = number;
//     let reversed = 0;
//     while (number > 0) {
//       let digit = number % 10;
//       reversed = reversed * 10 + digit;
//       number = Math.floor(number / 10);
//     }
//     console.log(`${original} là số đối xứng?`, original === reversed);
//     ```

// ---

// ### **5. So sánh `while` và `do...while`**

// | Đặc điểm                | `while`                       | `do...while`                   |
// |-------------------------|-------------------------------|---------------------------------|
// | **Kiểm tra điều kiện**  | Trước khi thực hiện khối lệnh | Sau khi thực hiện khối lệnh    |
// | **Thực thi tối thiểu**  | Có thể là 0 lần               | Ít nhất 1 lần                  |
// | **Khi nào dùng**        | Cần kiểm tra trước            | Cần thực thi ít nhất 1 lần     |

// **Ví dụ**:
// - **`while`**:
//   ```javascript
//   let x = 5;
//   while (x < 5) {
//     console.log("Sẽ không thực thi nếu điều kiện sai từ đầu.");
//   }
//   ```
// - **`do...while`**:
//   ```javascript
//   let x = 5;
//   do {
//     console.log("Sẽ thực thi ít nhất 1 lần.");
//   } while (x < 5);
//   ```