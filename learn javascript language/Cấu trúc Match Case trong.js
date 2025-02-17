// 1. Xác định loại ngày trong tuần
function ngayTrongTuan(n) {
    switch (n) {
        case 1: return "Thứ Hai";
        case 2: return "Thứ Ba";
        case 3: return "Thứ Tư";
        case 4: return "Thứ Năm";
        case 5: return "Thứ Sáu";
        case 6: return "Thứ Bảy";
        case 7: return "Chủ Nhật";
        default: return "Số không hợp lệ!";
    }
}

// 2. Chuyển đổi số tháng thành tên tháng
function tenThang(n) {
    switch (n) {
        case 1: return "Tháng Một";
        case 2: return "Tháng Hai";
        case 3: return "Tháng Ba";
        case 4: return "Tháng Tư";
        case 5: return "Tháng Năm";
        case 6: return "Tháng Sáu";
        case 7: return "Tháng Bảy";
        case 8: return "Tháng Tám";
        case 9: return "Tháng Chín";
        case 10: return "Tháng Mười";
        case 11: return "Tháng Mười Một";
        case 12: return "Tháng Mười Hai";
        default: return "Số không hợp lệ!";
    }
}

// 3. Máy tính đơn giản
function mayTinh(a, b, toanTu) {
    switch (toanTu) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Không thể chia cho 0!";
        default: return "Phép toán không hợp lệ!";
    }
}

// 4. Xác định nhóm máu
function nhomMau(ma) {
    switch (ma.toUpperCase()) {
        case "A": return "Nhóm máu A có thể nhận từ A, O.";
        case "B": return "Nhóm máu B có thể nhận từ B, O.";
        case "AB": return "Nhóm máu AB có thể nhận từ tất cả nhóm máu.";
        case "O": return "Nhóm máu O chỉ nhận từ O.";
        default: return "Nhóm máu không hợp lệ!";
    }
}

// 5. Phân loại hình học
function loaiHinh(n) {
    switch (n) {
        case 3: return "Tam giác";
        case 4: return "Tứ giác";
        case 5: return "Ngũ giác";
        case 6: return "Lục giác";
        default: return "Hình chưa được hỗ trợ!";
    }
}

// 6. Chuyển đổi đơn vị nhiệt độ
function chuyenNhietDo(giaTri, loai) {
    switch (loai.toUpperCase()) {
        case "C": return `${giaTri}°C = ${(giaTri * 9/5) + 32}°F`;
        case "F": return `${giaTri}°F = ${(giaTri - 32) * 5/9}°C`;
        default: return "Loại chuyển đổi không hợp lệ!";
    }
}

// 7. Hệ thống xếp loại học sinh
function xepLoaiHS(diem) {
    switch (true) {
        case (diem >= 8.5): return "Loại A";
        case (diem >= 7): return "Loại B";
        case (diem >= 5.5): return "Loại C";
        case (diem >= 4): return "Loại D";
        default: return "Loại F";
    }
}

// 8. Xác định kiểu dữ liệu
function kieuDuLieu(value) {
    switch (typeof value) {
        case "number": return Number.isInteger(value) ? "Kiểu dữ liệu: int" : "Kiểu dữ liệu: float";
        case "string": return "Kiểu dữ liệu: str";
        case "object":
            if (Array.isArray(value)) return "Kiểu dữ liệu: list";
            return "Kiểu dữ liệu: object";
        default: return "Kiểu dữ liệu không xác định";
    }
}

// 9. Lựa chọn phương tiện di chuyển
function phuongTien(ten) {
    switch (ten.toLowerCase()) {
        case "xe máy": return "Mất khoảng 15 phút";
        case "ô tô": return "Mất khoảng 10 phút";
        case "xe đạp": return "Mất khoảng 40 phút";
        case "đi bộ": return "Mất khoảng 120 phút";
        default: return "Không rõ thời gian";
    }
}

// 10. Hệ thống tư vấn nghề nghiệp
function tuVanNgheNghiep(soThich) {
    switch (soThich.toLowerCase()) {
        case "khoa học": return "Bạn có thể trở thành nhà nghiên cứu!";
        case "nghệ thuật": return "Bạn có thể trở thành họa sĩ hoặc nhạc sĩ!";
        case "thể thao": return "Bạn có thể trở thành vận động viên!";
        case "công nghệ": return "Bạn có thể trở thành lập trình viên!";
        default: return "Hãy tìm kiếm đam mê của mình!";
    }
}

// Chạy thử các hàm
console.log(ngayTrongTuan(3));
console.log(tenThang(12));
console.log(mayTinh(10, 5, "+"));
console.log(nhomMau("O"));
console.log(loaiHinh(4));
console.log(chuyenNhietDo(100, "C"));
console.log(xepLoaiHS(8));
console.log(kieuDuLieu(3.14));
console.log(phuongTien("ô tô"));
console.log(tuVanNgheNghiep("công nghệ"));
