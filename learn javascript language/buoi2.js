// 1. Câu Lệnh Điều Kiện
// - if...else: Cách sử dụng để kiểm tra điều kiện.
// - switch: Cách kiểm tra nhiều giá trị cho một biến.

//  2. Vòng Lặp
// - for: Vòng lặp cơ bản.
// - while và do...while: Vòng lặp với điều kiện.
// - for...of và for...in: Vòng lặp cho mảng và đối tượng.

// 3. Hàm
// - Khai báo hàm: Cách định nghĩa hàm.
// - Hàm ẩn danh và hàm mũi tên (Arrow Function): Cú pháp và cách sử dụng.
// - Hàm callback: Sử dụng hàm như một tham số.

//  4. Mảng và Đối Tượng Nâng Cao
// - Phương thức mảng: `map`, `filter`, `reduce`, `find`, `some`, `every`.
// - Tính năng đối tượng: `Object.keys()`, `Object.values()`, `Object.entries()`, và cách sao chép đối tượng.

// 5. Xử Lý Lỗi
// - try...catch: Cách xử lý lỗi trong JavaScript.

// 6. DOM (Document Object Model)
// - Làm việc với DOM: Truy cập và thay đổi nội dung của trang HTML.
// - Sự kiện: Thêm và xử lý sự kiện (click, submit, hover, v.v.).

//  7. Promise và Async/Await
// - Promise: Cách xử lý các tác vụ không đồng bộ.
// - Async/Await: Cú pháp để làm cho mã dễ đọc hơn khi làm việc với promise.

// 8. Các Khái Niệm Nâng Cao
// - Scope: Phạm vi biến (global scope, local scope, block scope).
// - Closure: Khái niệm và ứng dụng.
// - Module: Cách tổ chức mã trong các module.

//  9. Thực Hành
// - Dự án nhỏ: Tạo một ứng dụng đơn giản như danh sách việc cần làm, máy tính, hoặc trò chơi nhỏ.

//  10. Ôn Tập và Giải Đáp Thắc Mắc

//  Lời Khuyên
// - Thực hành là rất quan trọng! Hãy dành thời gian viết mã, tạo ra các dự án nhỏ và thử nghiệm với những gì bạn đã học.
// - Đọc tài liệu và tham gia các diễn đàn (như Stack Overflow) để tìm hiểu thêm.


//  1. Câu Lệnh Điều Kiện

let score = 85;

if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 75) {
    console.log("Khá");
} else {
    console.log("Cần cải thiện");
}


// Bài Tập:
// - Viết một chương trình kiểm tra tuổi của một người. Nếu tuổi nhỏ hơn 18,
//  in ra "Chưa đủ tuổi"; nếu từ 18 đến 60, in ra "Người lớn"; còn nếu lớn hơn 60, in ra "Người cao tuổi".
// Nhập tuổi từ người dùng
let age = prompt("Nhập tuổi của bạn:");

// Chuyển đổi age sang kiểu số
age = Number(age);

// Kiểm tra điều kiện và in ra thông báo
if (age < 18) {
    console.log("Chưa đủ tuổi");
} else if (age >= 18 && age <= 60) {
    console.log("Người lớn");
} else {
    console.log("Người cao tuổi");
}

// 2. Vòng Lặp

// Ví dụ:
for (let i = 1; i <= 5; i++) {
    console.log("Số:", i);
}

let j = 1;
while (j <= 5) {
    console.log("Số:", j);
    j++;
}


// Bài Tập:
// - Viết một chương trình in ra bảng cửu chương từ 1 đến 10.

for (let i = 1; i <= 10; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("\n"); // Thêm dòng trống giữa các bảng
}

//  3. Hàm

// Ví dụ:

function greet(name) {
    console.log("Xin chào, " + name + "!");
}

greet("Alice");


// Bài Tập:

// - Viết một hàm tính tổng hai số và trả về kết quả.

function tinhTong(a, b) {
    return a + b;
}

// Ví dụ sử dụng
let ketQua = tinhTong(5, 7);
console.log("Tổng của 5 và 7 là:", ketQua);

// 4. Mảng và Đối Tượng

// Ví dụ:

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "cherry", "orange"]

let person = {
    name: "John",
    age: 30,
};
console.log(person.name); // "John"


// Bài Tập:
// - Tạo một mảng chứa các tên của bạn bè. Viết một hàm nhận vào tên và kiểm tra xem tên đó có trong mảng hay không.

// Mảng chứa tên của bạn bè
const tenBanBe = ["An", "Bình", "Cường", "Dũng", "Hà"];

// Hàm kiểm tra tên
function kiemTraTen(ten) {
    if (tenBanBe.includes(ten)) {
        return `${ten} có trong danh sách bạn bè.`;
    } else {
        return `${ten} không có trong danh sách bạn bè.`;
    }
}

// Ví dụ sử dụng
console.log(kiemTraTen("An"));    // An có trong danh sách bạn bè.
console.log(kiemTraTen("Mai"));   // Mai không có trong danh sách bạn bè.

// 5. Xử Lý Lỗi


try {
    let result = riskyFunction(); // Hàm có thể gây lỗi
} catch (error) {
    console.log("Đã xảy ra lỗi:", error.message);
}


// Bài Tập:
// - Viết một hàm chia hai số và sử dụng `try...catch` để xử lý trường hợp chia cho 0.
function chiaHaiSo(a, b) {
    try {
        if (b === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

// Ví dụ sử dụng
console.log(chiaHaiSo(10, 2));   // Kết quả: 5
console.log(chiaHaiSo(10, 0));   // Kết quả: Không thể chia cho 0


// 6. DOM


document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});


// Bài Tập:
// - Tạo một trang HTML với một nút. Khi nhấn nút, một thông báo "Nút đã được nhấn" sẽ hiển thị.
// <!DOCTYPE html>
// <html lang="vi">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Thông báo Nút Nhấn</title>
//     <script>
//         function hienThiThongBao() {
//             alert("Nút đã được nhấn");
//         }
//     </script>
// </head>
// <body>
//     <h1>Nhấn vào nút bên dưới</h1>
//     <button onclick="hienThiThongBao()">Nhấn vào đây</button>
// </body>
// </html>


// 7. Promise và Async/Await

// Ví dụ:

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dữ liệu đã được lấy");
        }, 2000);
    });
}

fetchData().then(data => console.log(data));


// Bài Tập:
// - Viết một hàm async để lấy dữ liệu từ một promise và in ra kết quả.
// Hàm async để lấy dữ liệu từ một Promise
async function layDuLieu() {
    // Giả sử có một Promise trả về dữ liệu sau 2 giây
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dữ liệu đã được lấy thành công");
        }, 2000);
    });

    try {
        // Đợi promise hoàn thành và lấy dữ liệu
        const ketQua = await promise;
        console.log(ketQua); // In ra kết quả
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    }
}

// Gọi hàm layDuLieu
layDuLieu();

// 8. Bài Tập Tổng Hợp

// - Tạo một ứng dụng quản lý danh sách việc cần làm. Người dùng có thể thêm, xóa và hiển thị danh sách việc cần làm.
// - Sử dụng DOM để hiển thị danh sách và các nút để thao tác với nó.

// <!DOCTYPE html>
// <html lang="vi">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Quản Lý Danh Sách Việc Cần Làm</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             height: 100vh;
//             margin: 0;
//             background-color: #f3f4f6;
//         }
//         .todo-container {
//             width: 300px;
//             padding: 20px;
//             background-color: #ffffff;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
//         h1 {
//             text-align: center;
//             font-size: 1.5em;
//             color: #333;
//         }
//         input[type="text"] {
//             width: 100%;
//             padding: 10px;
//             margin: 10px 0;
//             border-radius: 4px;
//             border: 1px solid #ddd;
//         }
//         button {
//             width: 100%;
//             padding: 10px;
//             background-color: #4CAF50;
//             color: #fff;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//             font-size: 1em;
//         }
//         button:hover {
//             background-color: #45a049;
//         }
//         ul {
//             list-style-type: none;
//             padding: 0;
//         }
//         li {
//             display: flex;
//             justify-content: space-between;
//             padding: 10px;
//             border: 1px solid #ddd;
//             margin-top: 5px;
//             border-radius: 4px;
//         }
//         .delete-btn {
//             background-color: #e74c3c;
//             color: #fff;
//             border: none;
//             border-radius: 4px;
//             padding: 5px;
//             cursor: pointer;
//         }
//     </style>
// </head>
// <body>
//     <div class="todo-container">
//         <h1>Danh Sách Việc Cần Làm</h1>
//         <input type="text" id="todo-input" placeholder="Nhập việc cần làm...">
//         <button onclick="themCongViec()">Thêm</button>
//         <ul id="todo-list"></ul>
//     </div>

//     <script>
//         // Hàm thêm công việc vào danh sách
//         function themCongViec() {
//             const input = document.getElementById("todo-input");
//             const danhSach = document.getElementById("todo-list");
//             const congViec = input.value.trim();

//             if (congViec !== "") {
//                 const li = document.createElement("li");
//                 li.innerHTML = `
//                     <span>${congViec}</span>
//                     <button class="delete-btn" onclick="xoaCongViec(this)">Xóa</button>
//                 `;
//                 danhSach.appendChild(li);
//                 input.value = ""; // Xóa nội dung trong ô input sau khi thêm
//             }
//         }

//         // Hàm xóa công việc khỏi danh sách
//         function xoaCongViec(button) {
//             const li = button.parentElement;
//             li.remove();
//         }
//     </script>
// </body>
// </html>
