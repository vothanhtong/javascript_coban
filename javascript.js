const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fullname;
let age;
let mail;
let number;

// Hàm để yêu cầu người dùng nhập dữ liệu
function askForFullName() {
    rl.question("Nhập tên người dùng (không được để trống): ", (input) => {
        if (input.trim() !== "") {
            fullname = input;
            askForAge(); // Gọi hàm yêu cầu tuổi
        } else {
            console.log("Tên không được để trống. Vui lòng nhập lại.");
            askForFullName(); // Gọi lại hàm nếu tên trống
        }
    });
}

function askForAge() {
    rl.question("Nhập tuổi của bạn: ", (input) => {
        age = parseInt(input);
        if (age > 0) {
            askForEmail(); // Gọi hàm yêu cầu email
        } else {
            console.log("Tuổi phải là một số dương. Vui lòng nhập lại.");
            askForAge(); // Gọi lại hàm nếu tuổi không hợp lệ
        }
    });
}

function askForEmail() {
    rl.question("Nhập địa chỉ email của bạn: ", (input) => {
        if (input.endsWith("@gmail.com")) {
            mail = input;
            askForPhone(); // Gọi hàm yêu cầu số điện thoại
        } else {
            console.log("Địa chỉ email phải có đuôi @gmail.com. Vui lòng nhập lại.");
            askForEmail(); // Gọi lại hàm nếu email không hợp lệ
        }
    });
}

function askForPhone() {
    rl.question("Nhập số điện thoại của bạn: ", (input) => {
        if (input.length === 10 && !isNaN(input)) {
            number = input;
            printResult(); // Gọi hàm in kết quả
        } else {
            console.log("Số điện thoại phải có 10 chữ số. Vui lòng nhập lại.");
            askForPhone(); // Gọi lại hàm nếu số điện thoại không hợp lệ
        }
    });
}

function printResult() {
    const ageGroup = age < 15 ? "nhỏ" : "người lớn";
    console.log(`\nChào ${fullname},\nBạn ${age} tuổi, thuộc nhóm ${ageGroup}.\nĐịa chỉ mail của bạn là: ${mail}.\nSố điện thoại của bạn là: ${number}.`);
    rl.close(); // Đóng giao diện readline
}

// Bắt đầu chương trình
askForFullName();

hello 