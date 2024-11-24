// Khái niệm Toán tử số học trong JavaScript
// Toán tử số học là các ký hiệu dùng để thực hiện các phép toán trên số (hoặc biểu thức) trong JavaScript, bao gồm các phép tính cơ bản như cộng,
// trừ, nhân, chia và nâng cao hơn như lấy dư, lũy thừa, hoặc tăng/giảm giá trị.
// Lưu ý khi sử dụng toán tử số học trong JavaScript
 
// 1. Kiểu dữ liệu:
//    - Toán tử số học chỉ hoạt động chính xác trên các kiểu số

//    (Number). Nếu áp dụng trên kiểu khác (như chuỗi), JavaScript có thể tự chuyển đổi nhưng không phải lúc nào cũng đúng.  
//    - Ví dụ:
//      console.log("5" - 3); // Kết quả: 2 (tự chuyển đổi "5" thành 5)
//      console.log("5" + 3); // Kết quả: "53" (nối chuỗi)
  

// 2. Chia cho 0:

 
//    - Trong JavaScript, chia cho 0 không gây lỗi nhưng kết quả sẽ là `Infinity` hoặc `-Infinity`.  
//    - Ví dụ:
     console.log(10 / 0); // Kết quả: Infinity
     console.log(-10 / 0); // Kết quả: -Infinity
  

// 3. Modulo với số âm:
//    - Kết quả của toán tử `%` phụ thuộc vào số bị chia. Nếu số bị chia âm, kết quả cũng sẽ âm.  
//    - Ví dụ:
     console.log(-10 % 3); // Kết quả: -1
  
// 4. Tăng và giảm giá trị (++, --):
//    - Có hai dạng: Tiền tố
//    và Hậu tố:  

//      - Tiền tố (`++a`): Tăng giá trị trước, sau đó trả về giá trị mới.  
//      - Hậu tố (`a++`): Trả về giá trị ban đầu, sau đó mới tăng.  
//    - Ví dụ: 
   //   let a = 5;
   //   console.log(++a); // Kết quả: 6 (tăng trước, trả giá trị mới)
   //   console.log(a++); // Kết quả: 6 (trả giá trị cũ, sau đó tăng)
   //   console.log(a);   // Kết quả: 7
  

// 5. Số không hợp lệ (NaN):
//    - Nếu thực hiện phép toán với một giá trị không phải số, kết quả có thể là `NaN` (Not-a-Number).  
//    - Ví dụ:
     console.log("Hello" * 2); // Kết quả: NaN

// 6. Độ chính xác của số thực:
//    - Các phép toán với số thực (số thập phân) có thể dẫn đến kết quả không chính xác do giới hạn của cách biểu diễn số trong máy tính.  
//    - Ví dụ:

    
     console.log(0.1 + 0.2); // Kết quả: 0.30000000000000004
  

// 7. Kết hợp với dấu ngoặc:

 
//    - Sử dụng dấu ngoặc `()` để xác định thứ tự ưu tiên của các phép toán.  
//    - Ví dụ:

    
     console.log(5 + 3 * 2); // Kết quả: 11 (nhân trước)
     console.log((5 + 3) * 2); // Kết quả: 16 (cộng trước)
  

// 8. Hoạt động trên chuỗi số:

//    - Nếu chuỗi chứa giá trị số, JavaScript có thể tự chuyển đổi khi cần thiết. Tuy nhiên, hãy kiểm tra cẩn thận đầu vào để tránh lỗi.  
//    - Ví dụ:
     console.log("10" - 5); // Kết quả: 5
     console.log("10a" - 5); // Kết quả: NaN
  

// Khi nào cần cẩn thận?
 
// - Khi làm việc với các giá trị không rõ kiểu dữ liệu:

// Hãy sử dụng hàm chuyển đổi (`Number()`, `parseInt()`, `parseFloat()`) để đảm bảo kết quả chính xác.  
// - Khi so sánh hoặc tính toán:

// Tránh phụ thuộc vào các phép toán tự động chuyển đổi kiểu của JavaScript.  
// - Kiểm tra chia cho 0:

// Tránh các kết quả `Infinity` bằng cách kiểm tra mẫu trước khi chia.  
// - Kiểm soát lỗi NaN:

// Kiểm tra xem một giá trị có hợp lệ không bằng cách sử dụng `isNaN()` hoặc `typeof`.  

 

// Nắm rõ các khái niệm và lưu ý trên sẽ giúp bạn sử dụng toán tử số học trong JavaScript hiệu quả và tránh được các lỗi không mong muốn!

// 10 Bài tập vận dụng đủ dạng toán tử số học  
// 1. Bài tập 1: 
//    Viết chương trình cộng hai số bất kỳ do người dùng nhập vào.  

    
   // let a = parseFloat(prompt("Nhập số thứ nhất:"));
   // let b = parseFloat(prompt("Nhập số thứ hai:"));
   // console.log("Tổng hai số là:", a + b);

// 2. Bài tập 2:  
//    Nhập một số và tính bình phương của nó.  

 
   // let num = parseFloat(prompt("Nhập một số:"));
   // console.log("Bình phương là:", num 
   //  2);
   

// 3. Bài tập 3:  
//    Tính thương và phần dư khi chia hai số.  


   // let a = parseFloat(prompt("Nhập số bị chia:"));
   // let b = parseFloat(prompt("Nhập số chia:"));
   // console.log("Thương là:", a / b);
   // console.log("Phần dư là:", a % b);

// 4. Bài tập 4: 
//    Tăng giá trị một biến số lên 1 đơn vị, sau đó giảm đi 1 đơn vị, và in kết quả.  


   // let num = 5;
   // console.log("Giá trị ban đầu:", num);
   // num++;
   // console.log("Sau khi tăng:", num);
   // num--;
   // console.log("Sau khi giảm:", num);


// 5. Bài tập 5: 
//    Viết chương trình nhập 3 cạnh của tam giác và tính chu vi của nó.  


   let a = parseFloat(prompt("Nhập cạnh a:"));
   let b = parseFloat(prompt("Nhập cạnh b:"));
   let c = parseFloat(prompt("Nhập cạnh c:"));
   console.log("Chu vi tam giác là:", a + b + c);
   

// 6. Bài tập 6:  
//    Nhập chiều dài và chiều rộng của một hình chữ nhật, tính diện tích và chu vi.  

   let length = parseFloat(prompt("Nhập chiều dài:"));
   let width = parseFloat(prompt("Nhập chiều rộng:"));
   console.log("Diện tích:", length * width);
   console.log("Chu vi:", 2 * (length + width));
   

// 7. Bài tập 7: 
//    Kiểm tra một số có phải là số chẵn hay không.  

   
   let num = parseInt(prompt("Nhập một số:"));
   console.log(num % 2 === 0 ? "Là số chẵn" : "Không phải số chẵn");


// 8. Bài tập 8: 
//    Viết chương trình nhập điểm 3 môn học và tính trung bình.  

   let math = parseFloat(prompt("Nhập điểm Toán:"));
   let physics = parseFloat(prompt("Nhập điểm Lý:"));
   let chemistry = parseFloat(prompt("Nhập điểm Hóa:"));
   console.log("Điểm trung bình:", (math + physics + chemistry) / 3);


// 9. Bài tập 9:  
//    Viết chương trình để chuyển đổi từ độ C sang độ F. Công thức: `F = C * 9/5 + 32`.  

  
   let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));
   console.log("Nhiệt độ (°F):", celsius * 9 / 5 + 32);

// 10. Bài tập 10:
//     Tính số tiền lãi đơn sau một thời gian. Công thức: `Lãi = Tiền gốc * Lãi suất * Số năm`.  
   
    let principal = parseFloat(prompt("Nhập số tiền gốc:"));
    let rate = parseFloat(prompt("Nhập lãi suất (%):")) / 100;
    let years = parseInt(prompt("Nhập số năm:"));
    console.log("Số tiền lãi là:", principal * rate * years);
 