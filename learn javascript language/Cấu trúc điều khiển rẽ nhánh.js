// Cấu trúc điều khiển rẽ nhánh trong JavaScript

// Cấu trúc điều khiển rẽ nhánh trong JavaScript cho phép thực thi các khối mã dựa trên điều kiện logic.
// Các cấu trúc phổ biến bao gồm `if`, `if-else`, và `if-else if-else`.


// 1. Câu lệnh `if`
// Cú pháp:
if (điều_kiện) {
    // Khối lệnh thực thi nếu điều_kiện là true
}

// Ví dụ:
let xx = 10;
if (xx > 5) {
    console.log("xx lớn hơn 5");
}


// 2. Câu lệnh `if-else`
// Cú pháp:
if (điều_kiện) {
    // Khối lệnh thực thi nếu điều_kiện là true
} else {
    // Khối lệnh thực thi nếu điều_kiện là false
}

// Ví dụ:
let yy = 3;
if (yy % 2 === 0) {
    console.log("y là số chẵn");
} else {
    console.log("y là số lẻ");
}


// 3. Câu lệnh `if-else if-else`
// Cú pháp:
if (điều_kiện_1) {
    // Khối lệnh thực thi nếu điều_kiện_1 là true
} else if (điều_kiện_2) {
    // Khối lệnh thực thi nếu điều_kiện_2 là true
} else {
    // Khối lệnh thực thi nếu tất cả điều kiện đều false
}

// Ví dụ:
let z = 15;
if (z < 10) {
    console.log("z nhỏ hơn 10");
} else if (z === 15) {
    console.log("z bằng 15");
} else {
    console.log("z lớn hơn 10 nhưng khác 15");
}


// 4. Câu lệnh điều kiện lồng nhau
// Câu lệnh điều kiện có thể được lồng bên trong nhau để kiểm tra các trường hợp phức tạp hơn.

// Ví dụ:
let a = 20;
let b = 10;

if (a > 15) {
    if (b > 5) {
        console.log("Cả a và b đều thỏa mãn điều kiện");
    } else {
        console.log("Chỉ có a thỏa mãn điều kiện");
    }
}


// 5. Biểu thức điều kiện (Ternary Operator)
// JavaScript hỗ trợ cách viết ngắn gọn điều kiện bằng toán tử ba ngôi (ternary operator).

// Cú pháp:
let giáTrị = điều_kiện ? giáTrị_Đúng : giáTrị_Sai;

// Ví dụ:
let x = 10;
let y = 20;
let maxValue = x > y ? x : y;
console.log("Giá trị lớn nhất là:", maxValue);


// 6. Lưu ý khi sử dụng cấu trúc rẽ nhánh
// 1. Dấu ngoặc `{}`: Luôn sử dụng để nhóm các khối lệnh, kể cả khi chỉ có một dòng lệnh.
// 2. Cách viết điều kiện: Sử dụng các toán tử so sánh (`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`) và các toán tử logic (`&&`, `||`, `!`) để kết hợp nhiều điều kiện.
// 3. Đơn giản hóa mã nguồn: Tránh lồng ghép quá nhiều điều kiện để đảm bảo mã nguồn dễ đọc.


// Bài tập thực hành
// 1. Viết chương trình kiểm tra xem một số nguyên nhập vào là số âm, số dương hay bằng 0:
let number = prompt("Nhập một số:");
number = Number(number);

if (number > 0) {
    console.log("Số dương");
} else if (number < 0) {
    console.log("Số âm");
} else {
    console.log("Số bằng 0");
}


// 2. Kiểm tra xem một năm bất kỳ có phải là năm nhuận:
let year = prompt("Nhập một năm:");
year = Number(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " là năm nhuận");
} else {
    console.log(year + " không phải là năm nhuận");
}


// 3. Viết chương trình xếp loại học lực:
let score = prompt("Nhập điểm:");
score = Number(score);

if (score >= 9) {
    console.log("Xuất sắc");
} else if (score >= 7) {
    console.log("Giỏi");
} else if (score >= 5) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}


// Dưới đây là toàn bộ mã JavaScript thuần cho dự án **"Hệ thống đánh giá học sinh"**, được thiết kế để hoạt động trong một trang web cơ bản:

// Lấy tham chiếu đến các phần tử trong giao diện
const scoreInput = document.getElementById("score");
const evaluateButton = document.getElementById("evaluateButton");
const result = document.getElementById("result");

const yearInput = document.getElementById("year");
const checkLeapYearButton = document.getElementById("checkLeapYear");
const yearResult = document.getElementById("yearResult");

// Hàm đánh giá học lực
function evaluateStudent() {
    const score = parseFloat(scoreInput.value);

    // Kiểm tra giá trị điểm hợp lệ
    if (isNaN(score) || score < 0 || score > 10) {
        result.textContent = "Vui lòng nhập điểm hợp lệ (từ 0 đến 10).";
        result.style.color = "red";
        return;
    }

    // Đánh giá học lực dựa trên điểm
    let grade;
    if (score >= 9) {
        grade = "Xuất sắc";
    } else if (score >= 7) {
        grade = "Giỏi";
    } else if (score >= 5) {
        grade = "Trung bình";
    } else {
        grade = "Yếu";
    }

    result.textContent = `Học sinh đạt điểm ${score} - Xếp loại: ${grade}.`;
    result.style.color = "green";
}

// Hàm kiểm tra năm nhuận
function checkLeapYear() {
    const year = parseInt(yearInput.value);

    // Kiểm tra giá trị năm hợp lệ
    if (isNaN(year) || year <= 0) {
        yearResult.textContent = "Vui lòng nhập một năm hợp lệ.";
        yearResult.style.color = "red";
        return;
    }

    // Xác định năm nhuận
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeapYear) {
        yearResult.textContent = `${year} là năm nhuận.`;
        yearResult.style.color = "green";
    } else {
        yearResult.textContent = `${year} không phải là năm nhuận.`;
        yearResult.style.color = "orange";
    }
}

// Gắn sự kiện click vào các nút
evaluateButton.addEventListener("click", evaluateStudent);
checkLeapYearButton.addEventListener("click", checkLeapYear);

// Chức năng của mã JavaScript:
// 1. **Đánh giá học lực:**
//    - Người dùng nhập điểm từ 0 đến 10.
//    - Chương trình kiểm tra tính hợp lệ của điểm và trả về kết quả đánh giá (Xuất sắc, Giỏi, Trung bình, Yếu).
// 2. **Kiểm tra năm nhuận:**
//    - Người dùng nhập năm bất kỳ.
//    - Chương trình kiểm tra xem năm đó có phải là năm nhuận không.

// Hướng dẫn sử dụng:
// 1. Thêm mã này vào file JavaScript (`script.js`) của bạn.
// 2. Tạo một giao diện HTML với các phần tử nhập liệu (`<input>`) và nút (`<button>`) tương ứng, như:
//    - `id="score"` cho điểm số.
//    - `id="evaluateButton"` cho nút đánh giá.
//    - `id="result"` để hiển thị kết quả học lực.
//    - `id="year"` cho năm.
//    - `id="checkLeapYear"` cho nút kiểm tra năm nhuận.
//    - `id="yearResult"` để hiển thị kết quả năm nhuận.
// 3. Kết nối file `script.js` vào file HTML bằng thẻ `<script>`.
