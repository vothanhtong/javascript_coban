// Dưới đây là một số hàm phổ biến trong JavaScript mà bạn thường xuyên sử dụng trong lập trình:

// 1.`console.log()`
//    In ra thông tin ra console, dùng để debug hoặc hiển thị thông tin.
//    console.log("Hello, world!");

// 2. `parseInt()`
//    Chuyển đổi một chuỗi thành số nguyên.
//    let num = parseInt("123");
//    console.log(num);  // 123

// 3.`parseFloat()`
//    Chuyển đổi một chuỗi thành số thực (float).
//    let num = parseFloat("123.45");
//    console.log(num);  // 123.45


// 4. `toString()`
//    Chuyển đổi một giá trị thành chuỗi.
//    let num = 123;
//    console.log(num.toString());  // "123"

// 5. `Math.random()`
//    Sinh ra một số ngẫu nhiên từ 0 đến 1.
//    let randomNumber = Math.random();
//    console.log(randomNumber);  // Ví dụ: 0.7847


// 6. **`Math.floor()`**
//    Làm tròn số xuống dưới (làm tròn xuống số nguyên gần nhất).

//    let num = 7.9;
//    console.log(Math.floor(num));  // 7


// 7. **`Math.ceil()`**
//    Làm tròn số lên trên (làm tròn lên số nguyên gần nhất).

//    let num = 7.1;
//    console.log(Math.ceil(num));  // 8


// 8. **`Math.round()`**
//    Làm tròn số đến số nguyên gần nhất.

//    let num = 7.5;
//    console.log(Math.round(num));  // 8


// 9. **`setTimeout()`**
//    Đặt một hàm chạy sau một khoảng thời gian nhất định (tính bằng mili giây).

//    setTimeout(() => {
//      console.log("This is printed after 2 seconds");
//    }, 2000);


// 10. **`setInterval()`**
//    Đặt một hàm chạy liên tục sau mỗi khoảng thời gian nhất định (tính bằng mili giây).

//    setInterval(() => {
//      console.log("This message is printed every 3 seconds");
//    }, 3000);


// 11. **`Array.prototype.push()`**
//    Thêm một hoặc nhiều phần tử vào cuối mảng.

//    let arr = [1, 2, 3];
//    arr.push(4);
//    console.log(arr);  // [1, 2, 3, 4]


// 12. **`Array.prototype.pop()`**
//    Xóa phần tử cuối cùng khỏi mảng và trả về phần tử đó.

//    let arr = [1, 2, 3];
//    let last = arr.pop();
//    console.log(last);  // 3
//    console.log(arr);   // [1, 2]


// 13. **`Array.prototype.shift()`**
//    Xóa phần tử đầu tiên khỏi mảng và trả về phần tử đó.

//    let arr = [1, 2, 3];
//    let first = arr.shift();
//    console.log(first);  // 1
//    console.log(arr);    // [2, 3]


// 14. **`Array.prototype.unshift()`**
//    Thêm một hoặc nhiều phần tử vào đầu mảng.

//    let arr = [2, 3];
//    arr.unshift(1);
//    console.log(arr);  // [1, 2, 3]


// 15. **`String.prototype.toUpperCase()`**
//    Chuyển đổi chuỗi thành chữ hoa.

//    let str = "hello";
//    console.log(str.toUpperCase());  // "HELLO"


// 16. **`String.prototype.toLowerCase()`**
//    Chuyển đổi chuỗi thành chữ thường.

//    let str = "HELLO";
//    console.log(str.toLowerCase());  // "hello"


// 17. **`String.prototype.includes()`**
//    Kiểm tra xem chuỗi có chứa một chuỗi con không.

//    let str = "Hello, world!";
//    console.log(str.includes("world"));  // true


// 18. **`Object.keys()`**
//    Trả về một mảng chứa tất cả các khóa của đối tượng.

//    let obj = { name: "Alice", age: 25 };
//    console.log(Object.keys(obj));  // ["name", "age"]


// 19. **`Object.values()`**
//    Trả về một mảng chứa tất cả các giá trị của đối tượng.

//    let obj = { name: "Alice", age: 25 };
//    console.log(Object.values(obj));  // ["Alice", 25]


// 20. **`JSON.parse()`**
//    Chuyển đổi một chuỗi JSON thành đối tượng JavaScript.

//    let jsonString = '{"name": "Alice", "age": 25}';
//    let obj = JSON.parse(jsonString);
//    console.log(obj);  // { name: "Alice", age: 25 }


// 21. **`JSON.stringify()`**
//    Chuyển đổi một đối tượng JavaScript thành chuỗi JSON.

//    let obj = { name: "Alice", age: 25 };
//    let jsonString = JSON.stringify(obj);
//    console.log(jsonString);  // '{"name":"Alice","age":25}'


// 22. **`fetch()`**
//    Lấy dữ liệu từ một API hoặc tài nguyên khác.

//    fetch('https://api.example.com/data')
//      .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => console.error('Error:', error));

// 23. **`Array.prototype.map()`**
//    Tạo một mảng mới với kết quả từ việc gọi một hàm trên mỗi phần tử của mảng ban đầu.

//    let arr = [1, 2, 3];
//    let squared = arr.map(num => num * num);
//    console.log(squared);  // [1, 4, 9]


// 24. **`Array.prototype.filter()`**
//    Tạo một mảng mới chứa các phần tử thỏa mãn điều kiện nhất định.

//    let arr = [1, 2, 3, 4, 5];
//    let even = arr.filter(num => num % 2 === 0);
//    console.log(even);  // [2, 4]


// 25. **`Array.prototype.reduce()`**
//    Dùng để thực hiện phép toán tích lũy (như cộng dồn) trên mảng.

//    let arr = [1, 2, 3, 4];
//    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//    console.log(sum);  // 10
