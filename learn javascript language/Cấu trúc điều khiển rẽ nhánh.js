// Dưới đây là nội dung chương "Cấu trúc điều khiển rẽ nhánh" 
// Cấu trúc điều khiển rẽ nhánh trong JavaScript

// Cấu trúc điều khiển rẽ nhánh trong JavaScript được sử dụng để thực thi các khối mã dựa trên điều kiện logic.
// Các cấu trúc phổ biến bao gồm `if`, `if-else`, và `if-else if-else`.

// 1. Câu lệnh `if`
// Cú pháp:
if (điều_kiện) {
    // Khối lệnh thực thi nếu điều_kiện là true
}

// Ví dụ:

// let x = 10;
if (x > 5) {
    console.log("x lớn hơn 5");
}

// 2. Câu lệnh `if-else`
// Cú pháp:

if (điều_kiện) {
    // Khối lệnh thực thi nếu điều_kiện là true
} else {
    // Khối lệnh thực thi nếu điều_kiện là false
}
// Ví dụ:

// let y = 3;
if (y % 2 === 0) {
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
    