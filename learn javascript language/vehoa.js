
// Tạo một canvas
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Hàm vẽ cánh hoa
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

// Hàm vẽ cỏ
function drawGrass(ctx, x, y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, 10, 20);
}

// Hàm vẽ cây
function drawTree(ctx, x, y) {
    // Thân cây
    ctx.fillStyle = 'sienna';
    ctx.fillRect(x, y, 15, 30);
    
    // Tán cây
    ctx.fillStyle = 'forestgreen';
    ctx.beginPath();
    ctx.arc(x + 7.5, y - 10, 25, 0, Math.PI * 2);
    ctx.fill();
}

// Vẽ nhiều bông hoa
for (let i = 0; i < 5; i++) {
    const x = Math.random() * 800;
    const y = Math.random() * 200 + 200;
    drawFlower(ctx, x, y, 8, 50, 15);
}

// Vẽ cỏ
for (let i = 0; i < 80; i++) {
    const x = Math.random() * 800;
    const y = 350; // Vị trí cỏ
    drawGrass(ctx, x, y);
}

// Vẽ cây
for (let i = 0; i < 3; i++) {
    const x = Math.random() * 800;
    const y = 300; // Vị trí thân cây
    drawTree(ctx, x, y);
}


// Hướng dẫn sử dụng
// 1. **Mở trình duyệt**: Mở bất kỳ trình duyệt nào (Chrome, Firefox, v.v.).
// 2. **Mở Console**: Nhấn F12 hoặc chuột phải vào trang và chọn "Inspect", sau đó chuyển sang tab "Console".
// 3. **Dán mã vào Console**: Sao chép và dán mã trên vào console và nhấn Enter.
//  Giải thích mã
// - **Vẽ nhiều bông hoa**: Sử dụng vòng lặp để vẽ ngẫu nhiên 5 bông hoa ở các vị trí khác nhau trên canvas.
// - **Vẽ cỏ**: Sử dụng vòng lặp để vẽ 80 thanh cỏ ở đáy canvas.
// - **Vẽ cây**: Sử dụng vòng lặp để vẽ 3 cây ở các vị trí ngẫu nhiên trên canvas.
