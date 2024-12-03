// **Xử lý danh sách cơ bản trong JavaScript**

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

const squares = numbers.map(num => num ** 2); // Bình phương
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
