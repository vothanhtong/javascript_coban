// ========================
// LÝ THUYẾT VỀ MÔ-ĐUN
// ========================

// 1️⃣ Mô-đun là gì?
//    - Mô-đun giúp tách mã thành các tệp nhỏ, dễ bảo trì và tái sử dụng.
//    - Dùng `export` để xuất dữ liệu và `import` để nhập dữ liệu.

// 2️⃣ Các loại mô-đun:
//    - Mô-đun tích hợp sẵn trong Node.js (vd: `fs`, `path`, `http`).
//    - Mô-đun bên ngoài (cài bằng npm, vd: `axios`, `lodash`).
//    - Mô-đun tự tạo (viết riêng và import vào tệp khác).

// ========================
// BÀI TẬP THỰC HÀNH
// ========================

// 1️⃣ Lấy tên tệp hiện tại bằng mô-đun path
const path = require('path');
function baiTap1() {
    console.log("Tên tệp hiện tại:", path.basename(__filename));
}

// 2️⃣ Đọc nội dung tệp bằng mô-đun fs
const fs = require('fs');
function baiTap2() {
    fs.readFile('./example.txt', 'utf8', (err, data) => {
        if (err) return console.error("Lỗi đọc tệp:", err);
        console.log("Nội dung tệp:", data);
    });
}

// 3️⃣ Sử dụng mô-đun tự tạo (myModule.js)
function baiTap3() {
    try {
        const myModule = require('./myModule');
        console.log(myModule.greet("Tòng"));
        console.log("Giá trị của pi:", myModule.pi);
    } catch (err) {
        console.error("Không thể tải mô-đun myModule:", err.message);
    }
}

// 4️⃣ Tính diện tích hình tròn
function baiTap4() {
    const radius = 5;
    console.log(`Diện tích hình tròn (r = ${radius}):`, (Math.PI * radius ** 2).toFixed(2));
}

// 5️⃣ Lấy ngày & giờ hiện tại
function baiTap5() {
    console.log("Ngày và giờ hiện tại:", new Date().toLocaleString());
}

// 6️⃣ Sử dụng mô-đun factorialModule để tính giai thừa
function baiTap6() {
    try {
        const { factorial } = require('./factorialModule');
        console.log("Giai thừa của 5:", factorial(5));
    } catch (err) {
        console.error("Không thể tải mô-đun factorialModule:", err.message);
    }
}

// 7️⃣ Tạo danh sách số ngẫu nhiên và tìm min/max
function baiTap7() {
    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    console.log("Danh sách số:", numbers);
    console.table({ "Số lớn nhất": Math.max(...numbers), "Số nhỏ nhất": Math.min(...numbers) });
}

// 8️⃣ Lấy thông tin hệ điều hành bằng mô-đun os
const os = require('os');
function baiTap8() {
    console.table({
        "Hệ điều hành": os.type(),
        "Nền tảng": os.platform(),
        "Kiến trúc": os.arch()
    });
}

// 9️⃣ Lấy phiên bản Node.js đang chạy
function baiTap9() {
    console.log("Phiên bản Node.js:", process.version);
}

// 🔟 Gọi API bằng axios (sử dụng async/await)
const axios = require('axios');
async function baiTap10() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log("Dữ liệu từ API:", response.data);
    } catch (error) {
        console.error("Lỗi khi gọi API:", error.message);
    }
}

// ========================
// GỌI HÀM ĐỂ CHẠY
// ========================
baiTap1();
baiTap2();
baiTap3();
baiTap4();
baiTap5();
baiTap6();
baiTap7();
baiTap8();
baiTap9();
baiTap10();
