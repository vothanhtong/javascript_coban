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
// - Viết một chương trình kiểm tra tuổi của một người. Nếu tuổi nhỏ hơn 18, in ra "Chưa đủ tuổi"; nếu từ 18 đến 60, in ra "Người lớn"; còn nếu lớn hơn 60, in ra "Người cao tuổi".

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

//  3. Hàm

// Ví dụ:

function greet(name) {
    console.log("Xin chào, " + name + "!");
}

greet("Alice");


// Bài Tập:

// - Viết một hàm tính tổng hai số và trả về kết quả.

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

// 5. Xử Lý Lỗi


try {
    let result = riskyFunction(); // Hàm có thể gây lỗi
} catch (error) {
    console.log("Đã xảy ra lỗi:", error.message);
}


// Bài Tập:
// - Viết một hàm chia hai số và sử dụng `try...catch` để xử lý trường hợp chia cho 0.

// 6. DOM


document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});


// Bài Tập:
// - Tạo một trang HTML với một nút. Khi nhấn nút, một thông báo "Nút đã được nhấn" sẽ hiển thị.

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

// 8. Bài Tập Tổng Hợp

// - Tạo một ứng dụng quản lý danh sách việc cần làm. Người dùng có thể thêm, xóa và hiển thị danh sách việc cần làm.
// - Sử dụng DOM để hiển thị danh sách và các nút để thao tác với nó.

//  Hướng Dẫn Thực Hiện Bài Tập
// - Hãy thử làm từng bài tập một, lưu ý đến các lỗi có thể xảy ra và cách xử lý chúng.
// - Sau khi hoàn thành, nếu bạn gặp khó khăn, hãy hỏi để được giải đáp!

