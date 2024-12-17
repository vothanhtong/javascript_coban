// Tóm tắt lý thuyết về Mô-đun trong JavaScript

// 1. Mô-đun là gì?
//    - Mô-đun trong JavaScript là các tệp chứa mã (hàm, biến, lớp) được xuất (export) ra và sử dụng lại bằng cách nhập (import) vào tệp khác.

// 2. Sử dụng mô-đun:
//    - `export` để xuất các thành phần trong mô-đun.
//    - `import` để nhập các thành phần từ mô-đun.

// 3. Ví dụ về mô-đun tích hợp (built-in modules):
//    - Trong Node.js: `fs`, `path`, `http`.

// 4. Thư viện bên ngoài:
//    - Cài đặt bằng `npm install package_name`.

// 5. Module ES6:
//    - Sử dụng cú pháp `import/export` và chạy với trình duyệt hoặc môi trường hỗ trợ ES6.


// Bài tập thực hành với mô-đun

// Bài tập 1: Sử dụng mô-đun tích hợp path để lấy tên tệp
const path = require('path');
function baiTap1() {
    console.log("Tên tệp hiện tại là:", path.basename(__filename));
}

// Bài tập 2: Sử dụng mô-đun fs để đọc nội dung một tệp
const fs = require('fs');
function baiTap2() {
    fs.readFile('./example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Lỗi khi đọc tệp:", err);
            return;
        }
        console.log("Nội dung tệp:", data);
    });
}

// Bài tập 3: Tạo một mô-đun riêng và sử dụng nó
// Tạo tệp myModule.js với nội dung:
// module.exports = {
//     greet: (name) => `Hello, ${name}!`,
//     pi: 3.14159
// };
function baiTap3() {
    const myModule = require('./myModule');
    console.log(myModule.greet("Tòng"));
    console.log("Giá trị của pi là:", myModule.pi);
}

// Bài tập 4: Tính diện tích hình tròn bằng mô-đun Math
function baiTap4() {
    const radius = 5;
    const area = Math.PI * Math.pow(radius, 2);
    console.log("Diện tích hình tròn bán kính 5 là:", area);
}

// Bài tập 5: Lấy ngày và giờ hiện tại bằng mô-đun Date
function baiTap5() {
    const now = new Date();
    console.log("Ngày và giờ hiện tại là:", now);
}

// Bài tập 6: Tạo và sử dụng một mô-đun chứa hàm tính giai thừa
// Tạo tệp factorialModule.js với nội dung:
// module.exports = {
//     factorial: (n) => n === 0 ? 1 : n * module.exports.factorial(n - 1)
// };
function baiTap6() {
    const { factorial } = require('./factorialModule');
    console.log("Giai thừa của 5 là:", factorial(5));
}

// Bài tập 7: Tạo danh sách số ngẫu nhiên và tìm giá trị lớn nhất, nhỏ nhất
function baiTap7() {
    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    console.log("Danh sách số:", numbers);
    console.log("Giá trị lớn nhất:", Math.max(...numbers));
    console.log("Giá trị nhỏ nhất:", Math.min(...numbers));
}

// Bài tập 8: Sử dụng mô-đun os để lấy thông tin hệ điều hành
const os = require('os');
function baiTap8() {
    console.log("Thông tin hệ điều hành:", os.type(), os.platform(), os.arch());
}

// Bài tập 9: Sử dụng process để lấy thông tin phiên bản Node.js đang chạy
function baiTap9() {
    console.log("Phiên bản Node.js đang sử dụng:", process.version);
}

// Bài tập 10: Sử dụng axios để lấy nội dung từ một trang web (cần cài axios)
const axios = require('axios');
function baiTap10() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log("Dữ liệu từ API:", response.data);
        })
        .catch(error => {
            console.error("Lỗi khi gọi API:", error);
        });
}

// Gọi các bài tập
function main() {
    baiTap1();
    baiTap2(); // Lưu ý: Tạo tệp example.txt trước khi chạy
    baiTap3(); // Lưu ý: Tạo tệp myModule.js trước khi chạy
    baiTap4();
    baiTap5();
    baiTap6(); // Lưu ý: Tạo tệp factorialModule.js trước khi chạy
    baiTap7();
    baiTap8();
    baiTap9();
    baiTap10(); // Lưu ý: Cài thư viện axios bằng npm
}

main();
