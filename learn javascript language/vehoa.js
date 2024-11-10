// Tạo và thiết lập canvas
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Hàm vẽ nền trời
function drawSky(ctx) {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

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

// Hàm vẽ cảnh toàn bộ
function drawScene() {
    drawSky(ctx);

    // Vẽ nhiều bông hoa
    for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * 200 + 200;
        drawFlower(ctx, x, y, 8, 50, 15);
    }

    // Vẽ cỏ
    for (let i = 0; i < 80; i++) {
        const x = Math.random() * canvas.width;
        const y = 350; // Vị trí cỏ
        drawGrass(ctx, x, y);
    }

    // Vẽ cây
    for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = 300; // Vị trí thân cây
        drawTree(ctx, x, y);
    }
}

// Gọi hàm vẽ cảnh
drawScene();


// Hàm tính toán
function calculate() {
    const operator = prompt("Nhập phép tính (+, -, *, /): ");
    const num1 = parseFloat(prompt("Nhập số thứ nhất: "));
    const num2 = parseFloat(prompt("Nhập số thứ hai: "));

    // Kiểm tra đầu vào có hợp lệ không
    if (isNaN(num1) || isNaN(num2)) {
        alert("Vui lòng nhập hai số hợp lệ.");
        return;
    }

    let result;

    // Thực hiện tính toán dựa trên phép tính đã chọn
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Lỗi: Không thể chia cho 0";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Phép tính không hợp lệ";
    }

    // Hiển thị kết quả
    alert("Kết quả: " + result);
}

// Gọi hàm calculate để thực hiện phép tính
calculate();
