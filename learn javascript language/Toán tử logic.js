const duLieuNgoai = JSON.parse(localStorage.getItem("lichTrinh")) || [];

function hienThiMenu() {
    console.log("====================");
    console.log(" QUẢN LÝ THỜI KHÓA BIỂU ");
    console.log("====================");
    console.log("1. Thêm sự kiện");
    console.log("2. Xem lịch trình");
    console.log("3. Chỉnh sửa sự kiện");
    console.log("4. Thoát");
    console.log("====================");
}

function luuDuLieu() {
    localStorage.setItem("lichTrinh", JSON.stringify(duLieuNgoai));
}

function nhapThongTinSuKien() {
    return {
        Thang: prompt("Nhập tháng:"),
        Tuan: prompt("Nhập tuần:"),
        Ngay: prompt("Nhập ngày:"),
        ThoiGianBatDau: prompt("Nhập thời gian bắt đầu:"),
        ThoiGianKetThuc: prompt("Nhập thời gian kết thúc:"),
        TenSuKien: prompt("Nhập tên sự kiện:"),
        ChiTietSuKien: prompt("Nhập chi tiết sự kiện:"),
        QuanTrong: prompt("Sự kiện có quan trọng không? (Có/Không):")
    };
}

function themSuKien() {
    while (true) {
        const suKien = nhapThongTinSuKien();
        const tonTai = duLieuNgoai.find(event => 
            event.Thang === suKien.Thang && 
            event.Tuan === suKien.Tuan && 
            event.Ngay === suKien.Ngay && 
            event.TenSuKien === suKien.TenSuKien
        );

        if (tonTai) {
            console.log(`Sự kiện '${suKien.TenSuKien}' đã tồn tại.`);
            const luaChon = prompt("Bạn có muốn hợp nhất sự kiện không? (Có/Không):").trim().toLowerCase();
            if (luaChon === "có") {
                tonTai.ChiTietSuKien += " | " + suKien.ChiTietSuKien;
                tonTai.ThoiGianBatDau = Math.min(tonTai.ThoiGianBatDau, suKien.ThoiGianBatDau);
                tonTai.ThoiGianKetThuc = Math.max(tonTai.ThoiGianKetThuc, suKien.ThoiGianKetThuc);
                tonTai.QuanTrong = tonTai.QuanTrong === "Có" || suKien.QuanTrong === "Có" ? "Có" : "Không";
                console.log("Sự kiện đã được hợp nhất.");
            } else {
                console.log("Sự kiện không được thêm.");
            }
        } else {
            duLieuNgoai.push(suKien);
            console.log(`Sự kiện '${suKien.TenSuKien}' đã được thêm vào lịch trình.`);
        }

        luuDuLieu();
        if (prompt("Nhập 'end' để thoát hoặc nhấn Enter để tiếp tục:").trim().toLowerCase() === "end") break;
    }
}

function xemLichTrinh() {
    if (duLieuNgoai.length === 0) {
        console.log("Không có sự kiện nào được lên lịch.");
        return;
    }
    console.log("\n======= LỊCH TRÌNH =======");
    duLieuNgoai.forEach((suKien, index) => {
        console.log(`(${index + 1}) ${suKien.TenSuKien} - ${suKien.Thang}/${suKien.Ngay}, ${suKien.ThoiGianBatDau}-${suKien.ThoiGianKetThuc}`);
    });
    console.log("========================\n");
}

function suaSuKien() {
    xemLichTrinh();
    if (duLieuNgoai.length === 0) return;
    
    const index = parseInt(prompt("Nhập số thứ tự của sự kiện muốn chỉnh sửa:")) - 1;
    if (isNaN(index) || index < 0 || index >= duLieuNgoai.length) {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    
    const suKien = duLieuNgoai[index];
    console.log("Chỉnh sửa sự kiện:", suKien.TenSuKien);
    
    suKien.Thang = prompt(`Tháng (${suKien.Thang}):`) || suKien.Thang;
    suKien.Tuan = prompt(`Tuần (${suKien.Tuan}):`) || suKien.Tuan;
    suKien.Ngay = prompt(`Ngày (${suKien.Ngay}):`) || suKien.Ngay;
    suKien.ThoiGianBatDau = prompt(`Bắt đầu (${suKien.ThoiGianBatDau}):`) || suKien.ThoiGianBatDau;
    suKien.ThoiGianKetThuc = prompt(`Kết thúc (${suKien.ThoiGianKetThuc}):`) || suKien.ThoiGianKetThuc;
    suKien.TenSuKien = prompt(`Tên (${suKien.TenSuKien}):`) || suKien.TenSuKien;
    suKien.ChiTietSuKien = prompt(`Chi tiết (${suKien.ChiTietSuKien}):`) || suKien.ChiTietSuKien;
    suKien.QuanTrong = prompt(`Quan trọng (${suKien.QuanTrong}):`) || suKien.QuanTrong;

    luuDuLieu();
    console.log("Sự kiện đã được cập nhật.");
}

while (true) {
    hienThiMenu();
    const luaChon = prompt("Chọn một tùy chọn (1/2/3/4):").trim();
    if (luaChon === "1") themSuKien();
    else if (luaChon === "2") xemLichTrinh();
    else if (luaChon === "3") suaSuKien();
    else if (luaChon === "4") {
        console.log("Thoát chương trình.");
        break;
    } else console.log("Lựa chọn không hợp lệ.");
}
