// ## Hướng dẫn sử dụng

// 1. Mở trình duyệt: Bạn có thể mở bất kỳ trình duyệt nào (Chrome, Firefox, etc.).
// 2. Mở Console: Nhấn F12 hoặc chuột phải vào trang và chọn "Inspect" rồi chuyển sang tab "Console".
// 3. Dán mã vào Console: Sao chép và dán mã trên vào console và nhấn Enter.

//  Giải thích mã

// - Tạo canvas: Sử dụng `document.createElement('canvas')` để tạo một đối tượng canvas.
// - Chức năng `drawFlower`: Vẽ cánh hoa và nhụy hoa tương tự như ví dụ trước.
// - Gọi hàm: Gọi hàm `drawFlower` để vẽ bông hoa ở giữa canvas.

// Nếu bạn cần thêm điều chỉnh hoặc có câu hỏi khác, hãy cho tôi biết nhé!


// Tạo một canvas
const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function drawFlower(ctx, x, y, petalCount, petalLength, petalWidth) {
    ctx.beginPath();
    for (let i = 0; i < petalCount; i++) {
        const angle = (i * 2 * Math.PI) / petalCount;
        const petalX = x + Math.cos(angle) * petalLength;
        const petalY = y + Math.sin(angle) * petalLength;
        ctx.ellipse(petalX, petalY, petalWidth, petalLength / 2, angle, 0, 2 * Math.PI);
    }
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();

    // Vẽ nhụy hoa
    ctx.beginPath();
    ctx.arc(x, y, petalWidth / 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
}

// Vẽ bông hoa
drawFlower(ctx, 200, 200, 8, 70, 25);
