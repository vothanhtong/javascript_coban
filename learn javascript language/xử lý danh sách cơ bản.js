// Dưới đây là mã JavaScript hoàn chỉnh mà bạn đã cung cấp để xử lý danh sách cơ bản. Mã này trình bày cách làm việc với mảng (arrays) trong JavaScript, bao gồm việc tạo danh sách, truy cập và sửa đổi phần tử, thêm và xóa phần tử, duyệt danh sách, và thực hiện các thao tác như sắp xếp, lọc, và tính toán. Tôi cũng đã giữ lại phần bài tập thực hành:

// Xử lý danh sách cơ bản trong JavaScript

// 1. Tạo danh sách
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Danh sách ban đầu:", fruits);

// 2. Truy cập và sửa đổi phần tử
console.log("Phần tử đầu:", fruits[0]); // Truy cập
fruits[1] = "Kiwi"; // Sửa đổi
console.log("Sau khi sửa:", fruits);

// 3. Thêm và xóa phần tử
fruits.push("Orange"); // Thêm vào cuối
fruits.unshift("Mango"); // Thêm vào đầu
fruits.pop(); // Xóa phần tử cuối
fruits.shift(); // Xóa phần tử đầu
console.log("Danh sách sau khi thêm/xóa:", fruits);

// 4. Duyệt danh sách
fruits.forEach(fruit => console.log("Phần tử:", fruit));

// 5. Sắp xếp và đảo ngược
fruits.sort(); // Sắp xếp tăng dần
console.log("Sắp xếp tăng:", fruits);
fruits.reverse(); // Đảo ngược
console.log("Đảo ngược:", fruits);

// 6. Lọc, biến đổi, gộp phần tử
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); // Lọc số chẵn
console.log("Số chẵn:", evenNumbers);

const squares = numbers.map(num => num  ); // Bình phương
console.log("Bình phương:", squares);

const total = numbers.reduce((sum, num) => sum + num, 0); // Tính tổng
console.log("Tổng:", total);

// 7. Tìm kiếm
console.log("Số chẵn đầu:", numbers.find(num => num % 2 === 0)); // Tìm số chẵn
console.log("Vị trí đầu của số chẵn:", numbers.findIndex(num => num % 2 === 0));

// 8. Kiểm tra điều kiện
console.log("Tất cả > 0:", numbers.every(num => num > 0)); // Kiểm tra tất cả
console.log("Có số > 3 không:", numbers.some(num => num > 3)); // Kiểm tra ít nhất một

// 9. Bài tập thực hành
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Số lớn nhất:", findMax([1, 2, 3, 4, 5]));

function sumOdd(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}
console.log("Tổng số lẻ:", sumOdd([1, 2, 3, 4, 5]));

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
console.log("Số lần xuất hiện của 2:", countOccurrences([1, 2, 3, 2, 2, 4], 2));

function reverseArray(arr) {
    return arr.reverse();
}
console.log("Đảo ngược:", reverseArray([1, 2, 3]));

function filterGreaterThan(arr, n) {
    return arr.filter(item => item > n);
}
console.log("Lọc > 2:", filterGreaterThan([1, 2, 3, 4], 2));

// ### Mô Tả Các Chức Năng
// 1. Tạo danh sách: Khởi tạo một mảng `fruits` và in ra danh sách ban đầu.
// 2. Truy cập và sửa đổi phần tử: Truy cập phần tử đầu tiên và sửa đổi phần tử thứ hai.
// 3. Thêm và xóa phần tử: Sử dụng các phương thức `push`, `unshift`, `pop`, và `shift` để thêm và xóa phần tử trong danh sách.
// 4. Duyệt danh sách: Sử dụng `forEach` để duyệt từng phần tử trong mảng.
// 5. Sắp xếp và đảo ngược: Sắp xếp danh sách tăng dần và sau đó đảo ngược nó.
// 6. Lọc, biến đổi, gộp phần tử: Sử dụng `filter`, `map`, và `reduce` để thực hiện các thao tác trên mảng số.
// 7. Tìm kiếm: Tìm kiếm phần tử đầu tiên và vị trí của số chẵn trong mảng.
// 8. Kiểm tra điều kiện: Kiểm tra xem tất cả các số trong mảng đều lớn hơn 0 và có ít nhất một số lớn hơn 3 hay không.
// 9. Bài tập thực hành: Các hàm để tìm số lớn nhất, tính tổng số lẻ, đếm số lần xuất hiện của một giá trị, đảo ngược mảng, và lọc mảng theo điều kiện.
