// Trò chơi đoán số trong JavaScript thuần túy (chạy trên console)

const randomNumber = Math.floor(Math.random() * 100) + 1; // Tạo số ngẫu nhiên từ 1 đến 100
let attempts = []; // Lưu lịch sử đoán

function checkGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Vui lòng nhập số từ 1 đến 100!");
        return;
    }

    attempts.push(guess);

    if (guess === randomNumber) {
        console.log(`Chúc mừng! Bạn đã đoán đúng số ${randomNumber} sau ${attempts.length} lần thử!`);
        console.log("Lịch sử đoán:", attempts);
        return true; // Kết thúc trò chơi
    } else if (guess < randomNumber) {
        console.log("Số của bạn quá thấp! Thử lại nhé.");
    } else {
        console.log("Số của bạn quá cao! Thử lại nhé.");
    }

    console.log("Lịch sử đoán:", attempts);
    return false; // Tiếp tục trò chơi
}

// Chạy vòng lặp cho đến khi đoán đúng
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    readline.question("Nhập số của bạn: ", (input) => {
        const guess = parseInt(input);
        if (checkGuess(guess)) {
            readline.close();
        } else {
            askGuess();
        }
    });
}

console.log("Trò chơi đoán số! Máy tính đã chọn một số từ 1 đến 100.");
askGuess();
