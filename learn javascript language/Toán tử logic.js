// Chương 4: Toán tử Logic trong JavaScript

// Toán tử logic trong JavaScript được sử dụng để kiểm tra các điều kiện và kết hợp chúng. Chúng rất quan trọng trong các câu lệnh điều kiện (`if-else`) và vòng lặp.  

// *Khái niệm về toán tử logic
// Toán tử logic trong JavaScript hoạt động trên các biểu thức boolean (true/false) hoặc các giá trị mà JavaScript có thể chuyển đổi sang boolean (truthy/falsy).  

// Các toán tử logic cơ bản  
// 3. Ứng dụng toán tử logic 
// Toán tử logic thường được dùng để:  
// - Kết hợp nhiều điều kiện trong câu lệnh `if-else`.  
// - Điều chỉnh logic của các vòng lặp hoặc biểu thức.  

// Ví dụ 1: Câu lệnh điều kiện
let xx = 8;
let yy = 3; // Sửa lỗi: biến 'yy' cần được khai báo
if ((xx > 5) && (yy < 10)) {
    console.log("Điều kiện đúng!");
}

// Ví dụ 2: Sử dụng `!`
let z = 4;
if (!(z > 5)) {
    console.log("z không lớn hơn 5");
}

// Ví dụ 3: Kết hợp `&&` và `||`
let x = 6;
let y = 15;
if ((x > 5) || (y < 10) && (x < 10)) {
    console.log("Đúng!");
}

// 4. Thứ tự ưu tiên của toán tử logic
// 1. **`!`** (Phủ định - ưu tiên cao nhất)  
// 2. **`&&`** (Và)  
// 3. **`||`** (Hoặc - ưu tiên thấp nhất)  

// > **Lưu ý**: Dấu ngoặc `()` nên được sử dụng để đảm bảo thứ tự ưu tiên đúng theo ý muốn.  

// Thực hành

// Dưới đây là một số bài tập:  

// 1. Kiểm tra số nằm trong khoảng
// Viết chương trình kiểm tra xem một số `n` có nằm trong khoảng từ 10 đến 20 không:  
let n = 15;
if (n >= 10 && n <= 20) {
    console.log("Số nằm trong khoảng 10 đến 20");
} else {
    console.log("Số không nằm trong khoảng");
}

// 2. Số chẵn hoặc số âm
// Viết chương trình kiểm tra xem một số có phải là số chẵn hoặc số âm không:  
let nn = -4;
if (nn % 2 === 0 || nn < 0) { // Sửa lỗi: dùng biến 'nn' thay vì 'n'
    console.log("Số là số chẵn hoặc số âm");
} else {
    console.log("Số không phải số chẵn và cũng không phải số âm");
}

// 3. Sử dụng `!` để kiểm tra điều kiện ngược lại
// Kiểm tra nếu một số không nằm trong khoảng từ 1 đến 100:  
let nx = 150;
if (!(nx >= 1 && nx <= 100)) { // Sửa lỗi: dùng biến 'nx'
    console.log("Số không nằm trong khoảng 1 đến 100");
} else {
    console.log("Số nằm trong khoảng 1 đến 100");
}

// 4. Kiểm tra ngày trong tuần
// Viết chương trình kiểm tra xem một số có tương ứng với ngày trong tuần hay không (1-7).  
let day = 5; // 1 = Chủ nhật, 2 = Thứ hai, ..., 7 = Thứ bảy
if (day >= 1 && day <= 7) {
    console.log("Đây là một ngày trong tuần.");
} else {
    console.log("Số không phải là ngày trong tuần.");
}

// 5. Số nguyên tố
// Viết chương trình kiểm tra xem một số có phải là số nguyên tố không.  
let num = 29;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " là số nguyên tố.");
} else {
    console.log(num + " không phải là số nguyên tố.");
}

// Bài Thực Hành: Kiểm Tra Hệ Thống Đăng Nhập  

// Mô tả bài toán: 
// Bạn sẽ xây dựng một chương trình JavaScript để kiểm tra tính hợp lệ khi người dùng đăng nhập. Hệ thống sẽ sử dụng toán tử logic để kiểm tra:  
// 1. Tên đăng nhập (`username`) và mật khẩu (`password`) có chính xác không.  
// 2. Người dùng phải nằm trong danh sách người được phép đăng nhập.  
// 3. Nếu thông tin không đúng, chương trình sẽ phản hồi thông báo lỗi thích hợp.  

// Yêu cầu:  
// - Danh sách tài khoản hợp lệ được lưu trong một mảng.  
// - Hệ thống sẽ chỉ cho phép người dùng truy cập nếu:
//   - Tên đăng nhập và mật khẩu đều chính xác.
//   - Người dùng thuộc danh sách hợp lệ.
// - Nếu không, hệ thống sẽ thông báo lỗi cụ thể:  
//   - "Sai tên đăng nhập hoặc mật khẩu."  
//   - "Người dùng không được phép đăng nhập."

// Chương trình mẫu:

// Danh sách tài khoản hợp lệ
const validUsers = [
    { username: "admin", password: "123456" },
    { username: "user1", password: "password1" },
    { username: "guest", password: "guest123" }
];

// Hàm kiểm tra thông tin đăng nhập
function login(username, password) {
    // Kiểm tra thông tin đăng nhập
    const user = validUsers.find(user => user.username === username);

    if (!user) {
        console.log("Người dùng không được phép đăng nhập.");
    } else if (user.password !== password) {
        console.log("Sai tên đăng nhập hoặc mật khẩu.");
    } else {
        console.log(`Chào mừng ${username}! Bạn đã đăng nhập thành công.`);
    }
}

// Thử nghiệm với các trường hợp khác nhau
login("admin", "123456"); // Đăng nhập thành công
login("user1", "wrongPassword"); // Sai mật khẩu
login("unknown", "123456"); // Người dùng không được phép đăng nhập.
login("guest", "guest123"); // Đăng nhập thành công
