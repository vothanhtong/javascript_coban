// Chương 3: Toán tử số học trong JavaScript

// Toán tử số học là các ký hiệu dùng để thực hiện các phép toán trên số (hoặc biểu thức) trong JavaScript, bao gồm các phép tính cơ bản như cộng, trừ, nhân, chia và nâng cao hơn như lấy dư, lũy thừa, hoặc tăng/giảm giá trị.

// 1. Khái niệm về toán tử số học
// Các toán tử số học bao gồm:

// 2. Lưu ý khi sử dụng toán tử số học trong JavaScript

// 2.1 Kiểu dữ liệu:
// - Toán tử số học chỉ hoạt động chính xác trên kiểu số (Number). Nếu áp dụng trên kiểu khác (như chuỗi), JavaScript có thể tự chuyển đổi nhưng không phải lúc nào cũng đúng.  
// Ví dụ:
// console.log("5" - 3); // Kết quả: 2 (tự chuyển đổi "5" thành 5)
// console.log("5" + 3); // Kết quả: "53" (nối chuỗi)

// 2.2 Chia cho 0:
// - Trong JavaScript, chia cho 0 không gây lỗi nhưng kết quả sẽ là `Infinity` hoặc `-Infinity`.  
// Ví dụ:
// console.log(10 / 0); // Kết quả: Infinity
// console.log(-10 / 0); // Kết quả: -Infinity

// 2.3 Modulo với số âm:
// - Kết quả của toán tử `%` phụ thuộc vào số bị chia. Nếu số bị chia âm, kết quả cũng sẽ âm.  
// Ví dụ:
// console.log(-10 % 3); // Kết quả: -1

// 2.4 Tăng và giảm giá trị (++, --):
// - Có hai dạng: Tiền tố và Hậu tố:  
//   - Tiền tố (`++a`): Tăng giá trị trước, sau đó trả về giá trị mới.  
//   - Hậu tố (`a++`): Trả về giá trị ban đầu, sau đó mới tăng.  
// Ví dụ: 
// let a = 5;
// console.log(++a); // Kết quả: 6 (tăng trước, trả giá trị mới)
// console.log(a++); // Kết quả: 6 (trả giá trị cũ, sau đó tăng)
// console.log(a);   // Kết quả: 7

// 2.5 Số không hợp lệ (NaN):
// - Nếu thực hiện phép toán với một giá trị không phải số, kết quả có thể là `NaN` (Not-a-Number).  
// Ví dụ:
// console.log("Hello" * 2); // Kết quả: NaN

// 2.6 Độ chính xác của số thực:
// - Các phép toán với số thực (số thập phân) có thể dẫn đến kết quả không chính xác do giới hạn của cách biểu diễn số trong máy tính.  
// Ví dụ:
// console.log(0.1 + 0.2); // Kết quả: 0.30000000000000004

// 2.7 Kết hợp với dấu ngoặc:
// - Sử dụng dấu ngoặc `()` để xác định thứ tự ưu tiên của các phép toán.  
// Ví dụ:
// console.log(5 + 3 * 2); // Kết quả: 11 (nhân trước)
// console.log((5 + 3) * 2); // Kết quả: 16 (cộng trước)

// 2.8 Hoạt động trên chuỗi số:
// - Nếu chuỗi chứa giá trị số, JavaScript có thể tự chuyển đổi khi cần thiết. Tuy nhiên, hãy kiểm tra cẩn thận đầu vào để tránh lỗi.  
// Ví dụ:
// console.log("10" - 5); // Kết quả: 5
// console.log("10a" - 5); // Kết quả: NaN

// 3. Khi nào cần cẩn thận?
// - Khi làm việc với các giá trị không rõ kiểu dữ liệu:
//   Hãy sử dụng hàm chuyển đổi (`Number()`, `parseInt()`, `parseFloat()`) để đảm bảo kết quả chính xác.  
// - Khi so sánh hoặc tính toán:
//   Tránh phụ thuộc vào các phép toán tự động chuyển đổi kiểu của JavaScript.  
// - Kiểm tra chia cho 0:
//   Tránh các kết quả `Infinity` bằng cách kiểm tra mẫu trước khi chia.  
// - Kiểm soát lỗi NaN:
//   Kiểm tra xem một giá trị có hợp lệ không bằng cách sử dụng `isNaN()` hoặc `typeof`.  

// Nắm rõ các khái niệm và lưu ý trên sẽ giúp bạn sử dụng toán tử số học trong JavaScript hiệu quả và tránh được các lỗi không mong muốn!

// 10 Bài tập vận dụng đủ dạng toán tử số học  

// 10. Bài tập 10:
//     Tính số tiền lãi đơn sau một thời gian
let principal = parseFloat(prompt("Nhập số tiền gốc: "));
let rate = parseFloat(prompt("Nhập lãi suất (% mỗi năm): ")) / 100;
let time = parseFloat(prompt("Nhập thời gian (năm): "));
let interest = principal * rate * time;
console.log("Số tiền lãi sau", time, "năm là:", interest);
