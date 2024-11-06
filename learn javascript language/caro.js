// Kích thước của bảng caro là 15x15
const size = 15;

// Khởi tạo một bảng rỗng với các ô giá trị null (chưa có người đánh)
const board = Array(size).fill(null).map(() => Array(size).fill(null));

// Biến để lưu trữ người chơi hiện tại ('X' hoặc 'O'). 'X' sẽ đi trước.
let currentPlayer = 'X';

/**
 * Hàm drawBoard
 * - Mục đích: Vẽ bảng hiện tại ra console, hiển thị các ô đã đánh dấu và ô trống.
 * - Các ô có giá trị null sẽ được hiển thị là dấu '.' để dễ quan sát.
 */
function drawBoard() {
    console.clear(); // Xóa bảng console để in lại bảng mới sau mỗi lượt đi
    for (let i = 0; i < size; i++) {
        // In từng hàng của bảng. Các ô chưa đánh sẽ là '.', các ô đã đánh sẽ là 'X' hoặc 'O'
        console.log(board[i].map(cell => cell || '.').join(' '));
    }
}

/**
 * Hàm makeMove
 * - Mục đích: Đánh dấu một ô với vị trí (row, col) mà người chơi đã chọn.
 * - row: Hàng của ô mà người chơi muốn đánh
 * - col: Cột của ô mà người chơi muốn đánh
 */
function makeMove(row, col) {
    // Kiểm tra điều kiện: Nếu (row, col) nằm ngoài bảng hoặc đã có người đánh, thông báo ô không hợp lệ
    if (row < 0 || row >= size || col < 0 || col >= size || board[row][col]) {
        console.log('Ô không hợp lệ! Hãy chọn ô khác.');
        return;
    }

    // Đánh dấu ô bằng ký hiệu của người chơi hiện tại
    board[row][col] = currentPlayer;

    // Vẽ lại bảng sau khi đã đánh dấu
    drawBoard();

    // Kiểm tra xem người chơi hiện tại có thắng không
    if (checkWinner(row, col)) {
        console.log(`Người chơi ${currentPlayer} đã thắng!`);
        resetGame(); // Nếu có người thắng, khởi động lại trò chơi
    } else {
        // Chuyển lượt cho người chơi khác
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

/**
 * Hàm checkWinner
 * - Mục đích: Kiểm tra xem người chơi có tạo được chuỗi 5 ký hiệu liên tiếp không.
 * - row, col: Vị trí ô mà người chơi vừa đánh
 * - Trả về true nếu người chơi thắng, ngược lại trả về false.
 */
function checkWinner(row, col) {
    // Các hướng kiểm tra (ngang, dọc, chéo chính, chéo phụ)
    const directions = [
        [[0, 1], [0, -1]], // Kiểm tra theo hàng ngang
        [[1, 0], [-1, 0]], // Kiểm tra theo cột dọc
        [[1, 1], [-1, -1]], // Kiểm tra theo đường chéo chính
        [[1, -1], [-1, 1]]  // Kiểm tra theo đường chéo phụ
    ];

    // Duyệt qua từng hướng trong mảng directions
    for (let direction of directions) {
        let count = 1; // Đếm số ô liên tiếp của người chơi hiện tại

        // Kiểm tra theo hai hướng (về trước và về sau) của mỗi hướng trong bảng directions
        for (let [dx, dy] of direction) {
            let x = row + dx;
            let y = col + dy;

            // Tiếp tục đếm các ô có cùng ký hiệu của người chơi
            while (x >= 0 && x < size && y >= 0 && y < size && board[x][y] === currentPlayer) {
                count++;
                x += dx;
                y += dy;
            }
        }

        // Nếu đếm được ít nhất 5 ô liên tiếp, người chơi hiện tại thắng
        if (count >= 5) return true;
    }
    return false; // Không tìm thấy chuỗi 5 ô liên tiếp, chưa có người thắng
}

/**
 * Hàm resetGame
 * - Mục đích: Khởi động lại trò chơi, xóa hết các ô trên bảng và đặt lại người chơi là 'X'.
 */
function resetGame() {
    // Đặt tất cả các ô trên bảng về null để xóa dấu cũ
    board.forEach(row => row.fill(null));
    
    // Đặt người chơi hiện tại lại thành 'X' để bắt đầu lượt đầu tiên
    currentPlayer = 'X';

    // Vẽ lại bảng trống
    drawBoard();
}

// Bắt đầu trò chơi bằng cách vẽ bảng trống ra console
drawBoard();

// Cách chơi:
// - Sử dụng hàm `makeMove(row, col)` để đánh dấu vị trí của bạn (với `row` và `col` là hàng và cột).
// - Ví dụ: `makeMove(0, 0)` để đánh dấu ô trên cùng bên trái với ký hiệu của người chơi hiện tại.
// - Trò chơi sẽ tự động chuyển lượt giữa 'X' và 'O' và kiểm tra xem có ai thắng sau mỗi lượt.
// - Khi có người thắng, trò chơi sẽ thông báo và tự động khởi động lại.