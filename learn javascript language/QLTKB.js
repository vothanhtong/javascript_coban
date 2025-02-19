const duLieuNgoai = JSON.parse(localStorage.getItem("duLieuNgoai")) || [];

function luuDuLieu() {
    localStorage.setItem("duLieuNgoai", JSON.stringify(duLieuNgoai));
}

function hienThiMenu() {
    console.log("=== QUẢN LÝ THỜI KHÓA BIỂU ===");
    console.log("1. Thêm sự kiện mới");
    console.log("2. Xem lịch trình");
    console.log("3. Chỉnh sửa sự kiện");
    console.log("4. Tìm kiếm sự kiện");
    console.log("5. Xóa tất cả sự kiện");
    console.log("6. Thoát");
}

function nhapThongTinSuKien() {
    return {
        Thang: prompt("Nhập tháng:").trim(),
        Tuan: prompt("Nhập tuần:").trim(),
        Ngay: prompt("Nhập ngày:").trim(),
        ThoiGianBatDau: prompt("Nhập thời gian bắt đầu:").trim(),
        ThoiGianKetThuc: prompt("Nhập thời gian kết thúc:").trim(),
        TenSuKien: prompt("Nhập tên sự kiện:").trim(),
        ChiTietSuKien: prompt("Nhập chi tiết sự kiện:").trim(),
        QuanTrong: prompt("Sự kiện có quan trọng không? (Có/Không):").trim()
    };
}

function themSuKienVaoThoiKhoaBieu() {
    const suKien = nhapThongTinSuKien();
    
    const kiemTra = duLieuNgoai.find(event =>
        event.Thang === suKien.Thang &&
        event.Tuan === suKien.Tuan &&
        event.Ngay === suKien.Ngay &&
        event.TenSuKien === suKien.TenSuKien
    );

    if (kiemTra) {
        console.log(`Sự kiện '${suKien.TenSuKien}' đã tồn tại.`);
        const luaChon = prompt("Bạn muốn hợp nhất sự kiện không? (Có/Không):").trim().toLowerCase();
        if (luaChon === "có") {
            kiemTra.ChiTietSuKien += " | " + suKien.ChiTietSuKien;
            kiemTra.QuanTrong = kiemTra.QuanTrong === "Có" || suKien.QuanTrong === "Có" ? "Có" : "Không";
            console.log("Sự kiện đã được hợp nhất.");
        } else {
            console.log("Sự kiện không được thêm.");
        }
    } else {
        duLieuNgoai.push(suKien);
        console.log(`Sự kiện '${suKien.TenSuKien}' đã được thêm.`);
    }
    luuDuLieu();
}

function xemLichTrinh() {
    if (duLieuNgoai.length === 0) {
        console.log("Không có sự kiện nào.");
        return;
    }
    duLieuNgoai.forEach((suKien, index) => {
        console.log(`(${index + 1}) ${suKien.TenSuKien} - ${suKien.Ngay}/${suKien.Thang} [${suKien.QuanTrong}]`);
    });
}

function suaSuKien() {
    const tenSuKien = prompt("Nhập tên sự kiện cần sửa:").trim();
    const suKien = duLieuNgoai.find(event => event.TenSuKien.toLowerCase() === tenSuKien.toLowerCase());
    if (!suKien) {
        console.log("Không tìm thấy sự kiện.");
        return;
    }
    console.log("Chỉnh sửa sự kiện:");
    Object.assign(suKien, nhapThongTinSuKien());
    luuDuLieu();
    console.log("Sự kiện đã được cập nhật.");
}

function timKiemSuKien() {
    const tuKhoa = prompt("Nhập từ khóa để tìm kiếm:").trim().toLowerCase();
    const ketQua = duLieuNgoai.filter(event =>
        event.TenSuKien.toLowerCase().includes(tuKhoa) ||
        event.ChiTietSuKien.toLowerCase().includes(tuKhoa)
    );
    if (ketQua.length === 0) {
        console.log("Không tìm thấy sự kiện nào phù hợp.");
    } else {
        ketQua.forEach(event => console.log(`${event.TenSuKien} - ${event.Ngay}/${event.Thang}`));
    }
}

function xoaTatCaSuKien() {
    const xacNhan = prompt("Bạn có chắc chắn muốn xóa tất cả sự kiện không? (Có/Không):").trim().toLowerCase();
    if (xacNhan === "có") {
        duLieuNgoai.length = 0;
        luuDuLieu();
        console.log("Tất cả sự kiện đã bị xóa.");
    }
}

while (true) {
    hienThiMenu();
    const luaChon = prompt("Chọn một tùy chọn (1-6):").trim();
    if (luaChon === "1") themSuKienVaoThoiKhoaBieu();
    else if (luaChon === "2") xemLichTrinh();
    else if (luaChon === "3") suaSuKien();
    else if (luaChon === "4") timKiemSuKien();
    else if (luaChon === "5") xoaTatCaSuKien();
    else if (luaChon === "6") break;
    else console.log("Lựa chọn không hợp lệ.");
}
