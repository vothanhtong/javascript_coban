// QUẢN LÝ THỜI KHÓA BIỂU 

1. Menu chính:  
   - 1: Thêm sự kiện  
   - 2: Xem lịch trình  
   - 3: Chỉnh sửa sự kiện  
   - 4: Thoát  

2. **Thêm sự kiện (1)**:  
   - Nhập thông tin: Tháng, Tuần, Ngày, Thời gian, Tên, Chi tiết, Quan trọng.  
   - Kiểm tra trùng, có thể hợp nhất nếu cần.  

3. **Xem lịch trình (2)**:  
   - Hiển thị danh sách sự kiện đã lưu.  
   - Thông báo "Không có sự kiện" nếu danh sách rỗng.  

4. **Chỉnh sửa sự kiện (3)**:  
   - Tìm sự kiện theo Tháng, Tuần, Ngày.  
   - Tùy chọn: Thêm chi tiết, sửa thông tin, xóa sự kiện.  

5. **Thoát (4)**:  
   - Kết thúc chương trình.  

**Hết.**const duLieuNgoai = [];

function hienThiMenu() {
    console.log("1. Thêm sự kiện mới");
    console.log("2. Xem lịch trình");
    console.log("3. Chỉnh sửa sự kiện");
    console.log("4. Thoát");
}

function themSuKienVaoThoiKhoaBieu() {
    while (true) {
        const suKien = {};
        suKien.Thang = prompt("Nhập tháng:");
        suKien.Tuan = prompt("Nhập tuần:");
        suKien.Ngay = prompt("Nhập ngày:");
        suKien.ThoiGianBatDau = prompt("Nhập thời gian bắt đầu:");
        suKien.ThoiGianKetThuc = prompt("Nhập thời gian kết thúc:");
        suKien.TenSuKien = prompt("Nhập tên sự kiện:");
        suKien.ChiTietSuKien = prompt("Nhập chi tiết sự kiện:");
        suKien.QuanTrong = prompt("Sự kiện có quan trọng không? (Có/Không):");

        const kiemTra = duLieuNgoai.find(event =>
            event.Thang === suKien.Thang &&
            event.Tuan === suKien.Tuan &&
            event.Ngay === suKien.Ngay &&
            event.TenSuKien === suKien.TenSuKien
        );

        if (kiemTra) {
            console.log(`Sự kiện '${suKien.TenSuKien}' đã tồn tại vào ngày này.`);
            const luaChon = prompt("Bạn muốn hợp nhất sự kiện không? (Có/Không):").trim().toLowerCase();
            if (luaChon === "có") {
                kiemTra.ChiTietSuKien += " | " + suKien.ChiTietSuKien;
                kiemTra.ThoiGianBatDau = Math.min(kiemTra.ThoiGianBatDau, suKien.ThoiGianBatDau);
                kiemTra.ThoiGianKetThuc = Math.max(kiemTra.ThoiGianKetThuc, suKien.ThoiGianKetThuc);
                kiemTra.QuanTrong = kiemTra.QuanTrong === "Có" || suKien.QuanTrong === "Có" ? "Có" : "Không";
                console.log("Sự kiện đã được hợp nhất.");
            } else {
                console.log("Sự kiện không được thêm.");
            }
        } else {
            duLieuNgoai.push(suKien);
            console.log(`\nSự kiện '${suKien.TenSuKien}' đã được thêm vào lịch trình.\n`);
        }

        const tiepTuc = prompt("Bạn có muốn thêm sự kiện khác không? (nhập 'end' để thoát):").trim().toLowerCase();
        if (tiepTuc === "end") break;
    }
}

function xemLichTrinh() {
    if (duLieuNgoai.length === 0) {
        console.log("Không có sự kiện nào được lên lịch.");
    } else {
        duLieuNgoai.forEach((suKien, index) => {
            console.log(`--- Sự kiện ${index + 1} ---`);
            console.log(`Tháng: ${suKien.Thang}`);
            console.log(`Tuần: ${suKien.Tuan}`);
            console.log(`Ngày: ${suKien.Ngay}`);
            console.log(`Thời gian bắt đầu: ${suKien.ThoiGianBatDau}`);
            console.log(`Thời gian kết thúc: ${suKien.ThoiGianKetThuc}`);
            console.log(`Tên sự kiện: ${suKien.TenSuKien}`);
            console.log(`Chi tiết sự kiện: ${suKien.ChiTietSuKien}`);
            console.log(`Quan trọng: ${suKien.QuanTrong}`);
            console.log();
        });
    }
}

function suaSuKien() {
    if (duLieuNgoai.length === 0) {
        console.log("Không có sự kiện nào để sửa.");
        return;
    }

    const thang = prompt("Nhập tháng của sự kiện cần sửa:");
    const tuan = prompt("Nhập tuần của sự kiện cần sửa:");
    const ngay = prompt("Nhập ngày của sự kiện cần sửa:");

    const foundEvents = duLieuNgoai.filter(event =>
        event.Thang === thang && event.Tuan === tuan && event.Ngay === ngay
    );

    if (foundEvents.length === 0) {
        console.log("Không tìm thấy sự kiện nào vào ngày này.");
        return;
    }

    console.log("\nCác sự kiện trong ngày đã chọn:");
    foundEvents.forEach((event, index) => {
        console.log(`${index + 1}. ${event.TenSuKien}`);
    });

    const index = parseInt(prompt("Chọn số của sự kiện bạn muốn chỉnh sửa:")) - 1;
    if (isNaN(index) || index < 0 || index >= foundEvents.length) {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }

    const event = foundEvents[index];

    console.log("\nChọn tùy chọn:");
    console.log("1. Thêm công việc.");
    console.log("2. Chỉnh sửa công việc.");
    console.log("3. Xóa công việc.");
    const luaChon = prompt("Chọn tùy chọn (1/2/3):");
    if (luaChon === "1") {
        event.ChiTietSuKien += " | " + prompt("Nhập chi tiết công việc mới:");
        console.log("Công việc đã được thêm.");
    } else if (luaChon === "2") {
        event.ThoiGianBatDau = prompt("Nhập thời gian bắt đầu mới:");
        event.ThoiGianKetThuc = prompt("Nhập thời gian kết thúc mới:");
        event.ChiTietSuKien = prompt("Nhập chi tiết sự kiện mới:");
        event.QuanTrong = prompt("Sự kiện này có quan trọng không? (Có/Không):");
        console.log("Sự kiện đã được chỉnh sửa.");
    } else if (luaChon === "3") {
        const indexToDelete = duLieuNgoai.indexOf(event);
        duLieuNgoai.splice(indexToDelete, 1);
        console.log("Sự kiện đã bị xóa.");
    } else {
        console.log("Tùy chọn không hợp lệ.");
    }
}

while (true) {
    hienThiMenu();
    const luaChon = prompt("Chọn một tùy chọn (1/2/3/4):");
    if (luaChon === "1") {
        themSuKienVaoThoiKhoaBieu();
    } else if (luaChon === "2") {
        xemLichTrinh();
    } else if (luaChon === "3") {
        suaSuKien();
    } else if (luaChon === "4") {
        break;
    } else {
        console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
}
