 // Khái niệm Toán tử so sánh trong javascript 
 // Toán tử so sánh là các ký hiệu được sử dụng để so sánh hai giá trị. Kết quả của các phép so sánh là `true` hoặc `false`, và thường được dùng trong các câu lệnh điều kiện như `if`, `else`.

// ### Các loại toán tử so sánh trong javascript

// 1. So sánh bằng (`==`)  
//    So sánh giá trị của hai biến, bỏ qua kiểu dữ liệu.  
//    - Ví dụ:  
//     
//      console.log(5 == "5"); // true (vì giá trị giống nhau)
//      

// 2. So sánh bằng nghiêm ngặt (`===`)  
//    So sánh giá trị và cả kiểu dữ liệu.  
//    - Ví dụ:  
//     
//      console.log(5 === "5"); // false (vì khác kiểu dữ liệu)
//      

// 3. So sánh khác (`!=`)  
//    So sánh giá trị, bỏ qua kiểu dữ liệu.  
//    - Ví dụ:  
//     
//      console.log(5 != "5"); // false
//      

// 4. So sánh khác nghiêm ngặt (`!==`)  
//    So sánh giá trị và kiểu dữ liệu.  
//    - Ví dụ:  
//     
//      console.log(5 !== "5"); // true
//      

// 5. Lớn hơn (`>`)  
//    Kiểm tra xem giá trị bên trái có lớn hơn giá trị bên phải không.  
//    - Ví dụ:  
//     
//      console.log(10 > 5); // true
//      

// 6. Nhỏ hơn (`<`)  
//    Kiểm tra xem giá trị bên trái có nhỏ hơn giá trị bên phải không.  
//    - Ví dụ:  
//     
//      console.log(10 < 5); // false
//      

// 7. Lớn hơn hoặc bằng (`>=`)  
//    Kiểm tra xem giá trị bên trái có lớn hơn hoặc bằng giá trị bên phải không.  
//    - Ví dụ:  
//     
//      console.log(5 >= 5); // true
//      

// 8. Nhỏ hơn hoặc bằng (`<=`)  
//    Kiểm tra xem giá trị bên trái có nhỏ hơn hoặc bằng giá trị bên phải không.  
//    - Ví dụ:  
//     
//      console.log(5 <= 10); // true
//      

// 

// ### Lưu ý khi sử dụng toán tử so sánh trong

// 1. Phân biệt `==` và `===`:  
//    - Sử dụng `===` để tránh kết quả bất ngờ do tự động chuyển đổi kiểu.  
//     
//      console.log(0 == false);  // true (chuyển đổi kiểu)
//      console.log(0 === false); // false (không chuyển đổi kiểu)
//      

// 2. Kiểu dữ liệu khác:  
//    Khi so sánh các kiểu dữ liệu khác, sẽ cố gắng chuyển đổi về cùng một kiểu.  
//    - Ví dụ:  
//     
//      console.log("5" > 3); // true (chuyển đổi "5" thành số)
//      

// 3. So sánh giá trị không xác định (`undefined`) hoặc giá trị rỗng (`null`):  
//    - `undefined == null` là `true`, nhưng `undefined === null` là `false`.  
//     
//      console.log(undefined == null);  // true
//      console.log(undefined === null); // false
//      

// 4. So sánh chuỗi:  
//    So sánh chuỗi dựa trên thứ tự từ điển (unicode).  
//    - Ví dụ:  
//     
//      console.log("apple" > "banana"); // false
//      

// 

// ### 10 Bài tập vận dụng toán tử so sánh

// 1. Bài tập 1: Kiểm tra hai số bằng nhau.
//   
//    let a = parseFloat(prompt("Nhập số thứ nhất:"));
//    let b = parseFloat(prompt("Nhập số thứ hai:"));
//    console.log(a === b ? "Hai số bằng nhau" : "Hai số không bằng nhau");
//    

// 2. Bài tập 2: Kiểm tra số nhập vào có lớn hơn 0 không.
//   
//    let num = parseFloat(prompt("Nhập một số:"));
//    console.log(num > 0 ? "Số lớn hơn 0" : "Số không lớn hơn 0");
//    

// 3. Bài tập 3: Kiểm tra số chẵn hay số lẻ.
//   
//    let num = parseInt(prompt("Nhập một số nguyên:"));
//    console.log(num % 2 === 0 ? "Số chẵn" : "Số lẻ");
//    

// 4. Bài tập 4: Kiểm tra một số có thuộc khoảng [10, 20].
//   
//    let num = parseFloat(prompt("Nhập một số:"));
//    console.log(num >= 10 && num <= 20 ? "Số nằm trong khoảng [10, 20]" : "Số không nằm trong khoảng");
//    

// 5. Bài tập 5: So sánh hai chuỗi.
//   
//    let str1 = prompt("Nhập chuỗi thứ nhất:");
//    let str2 = prompt("Nhập chuỗi thứ hai:");
//    console.log(str1 === str2 ? "Hai chuỗi bằng nhau" : "Hai chuỗi không bằng nhau");
//    

// 6. Bài tập 6: So sánh điểm học sinh với ngưỡng đậu.
//   
//    let score = parseFloat(prompt("Nhập điểm thi:"));
//    console.log(score >= 50 ? "Đậu" : "Rớt");
//    

// 7. Bài tập 7: Kiểm tra số nhập vào có phải là số âm.
//   
//    let num = parseFloat(prompt("Nhập một số:"));
//    console.log(num < 0 ? "Số âm" : "Không phải số âm");
//    

// 8. Bài tập 8: Xác định số lớn nhất trong 3 số.
//   
//    let a = parseFloat(prompt("Nhập số thứ nhất:"));
//    let b = parseFloat(prompt("Nhập số thứ hai:"));
//    let c = parseFloat(prompt("Nhập số thứ ba:"));
//    let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
//    console.log("Số lớn nhất là:", max);
//    

// 9. Bài tập 9: Kiểm tra năm có phải năm nhuận.
//   
//    let year = parseInt(prompt("Nhập năm:"));
//    console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Năm nhuận" : "Không phải năm nhuận");
//    

// 10. Bài tập 10: So sánh độ dài hai chuỗi.
//    
//     let str1 = prompt("Nhập chuỗi thứ nhất:");
//     let str2 = prompt("Nhập chuỗi thứ hai:");
//     console.log(str1.length === str2.length ? "Hai chuỗi có độ dài bằng nhau" : "Hai chuỗi có độ dài khác nhau");
//     