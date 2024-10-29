// Hướng dẫn sử dụng
// Mở trình duyệt web (Chrome, Firefox, v.v.).
// Nhấn F12 để mở Developer Tools.
// Chọn tab "Console".
// Dán mã JavaScript trên vào và nhấn Enter.
// Sử dụng hàm makeMove(row, col) để đánh vào ô tương ứng. Ví dụ: makeMove(0, 0) để đánh vào ô đầu tiên.
// Trò chơi sẽ in ra bảng và thông báo người chiến thắng khi có người thắng.

const size = 15;
const board = Array(size).fill(null).map(() => Array(size).fill(null));
let currentPlayer = 'X';

function drawBoard() {
    console.clear();
    for (let i = 0; i < size; i++) {
        console.log(board[i].map(cell => cell || '.').join(' '));
    }
}

function makeMove(row, col) {
    if (row < 0 || row >= size || col < 0 || col >= size || board[row][col]) {
        console.log('Ô không hợp lệ! Hãy chọn ô khác.');
        return;
    }

    board[row][col] = currentPlayer;
    drawBoard();

    if (checkWinner(row, col)) {
        console.log(`Người chơi ${currentPlayer} đã thắng!`);
        resetGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(row, col) {
    const directions = [
        [[0, 1], [0, -1]], // Ngang
        [[1, 0], [-1, 0]], // Dọc
        [[1, 1], [-1, -1]], // Chéo /
        [[1, -1], [-1, 1]]  // Chéo \
    ];

    for (let direction of directions) {
        let count = 1;
        for (let [dx, dy] of direction) {
            let x = row + dx;
            let y = col + dy;

            while (x >= 0 && x < size && y >= 0 && y < size && board[x][y] === currentPlayer) {
                count++;
                x += dx;
                y += dy;
            }
        }
        if (count >= 5) return true;
    }
    return false;
}

function resetGame() {
    board.forEach(row => row.fill(null));
    currentPlayer = 'X';
    drawBoard();
}

// Bắt đầu trò chơi
drawBoard();
