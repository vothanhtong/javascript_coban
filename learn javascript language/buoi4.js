// Chương 4: Toán tử Logic trong JavaScript

// Toán tử logic trong JavaScript được sử dụng để kiểm tra các điều kiện và kết hợp chúng. Chúng rất quan trọng trong các câu lệnh điều kiện (`if-else`) và vòng lặp.  
// *Khái niệm về toán tử logic
// Toán tử logic trong JavaScript hoạt động trên các biểu thức boolean (true/false) hoặc các giá trị mà JavaScript có thể chuyển đổi sang boolean (truthy/falsy).  

// Các toán tử logic cơ bản  

// | Toán tử | Miêu tả                | Cú pháp                                  | Ví dụ                                   | Kết quả        |
// |---------|------------------------|------------------------------------------|-----------------------------------------|----------------|
// | `&&`    | **Và**: đúng khi cả hai điều kiện đúng | `condition1 && condition2`               | `(x > 5) && (y < 10)`                  | True nếu cả hai đúng |
// | `||`    | **Hoặc**: đúng khi ít nhất một điều kiện đúng | `condition1 || condition2`               | `(x > 5) || (y < 10)`                  | True nếu ít nhất một đúng |
// | `!`     | **Phủ định**: đảo ngược giá trị logic | `!condition`                             | `!(x > 5)`                             | True nếu điều kiện sai |

// 3. Ứng dụng toán tử logic 
// Toán tử logic thường được dùng để:  
// - Kết hợp nhiều điều kiện trong câu lệnh `if-else`.  
// - Điều chỉnh logic của các vòng lặp hoặc biểu thức.  

//  Ví dụ 1: Câu lệnh điều kiện

let xx = 8;
let yx = 3;
if ((xx > 5) && (yy < 10)) {
    console.log("Điều kiện đúng!");
}

//  Ví dụ 2: Sử dụng `!`

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


//  4. Thứ tự ưu tiên của toán tử logic
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

// 2.Số chẵn hoặc số âm
// Viết chương trình kiểm tra xem một số có phải là số chẵn hoặc số âm không:  

let nn = -4;
if (n % 2 === 0 || n < 0) {
    console.log("Số là số chẵn hoặc số âm");
} else {
    console.log("Số không phải số chẵn và cũng không phải số âm");
}
// 3. Sử dụng `!` để kiểm tra điều kiện ngược lại
// Kiểm tra nếu một số không nằm trong khoảng từ 1 đến 100:  

let nx = 150;
if (!(n >= 1 && n <= 100)) {
    console.log("Số không nằm trong khoảng 1 đến 100");
} else {
    console.log("Số nằm trong khoảng 1 đến 100");
}
