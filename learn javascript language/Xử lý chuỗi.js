//                                                              Xử lý chuỗi trong JavaScript

// 1. Tìm kiếm chuỗi con
// indexOf(substring): Tìm vị trí đầu tiên của chuỗi con.
// lastIndexOf(substring): Tìm vị trí cuối cùng của chuỗi con.
// search(substring): Tương tự indexOf nhưng hỗ trợ Regular Expressions.

// 2. Cắt chuỗi
// slice(start, end): Lấy chuỗi từ start đến end (không bao gồm end).
// substring(start, end): Giống slice, nhưng không hỗ trợ giá trị âm.
// substr(start, length): Lấy length ký tự từ vị trí start.

// 3. Thay thế chuỗi
// replace(searchValue, replaceValue): Thay thế chuỗi con bằng chuỗi khác.

// 4. Chuyển đổi chữ hoa/chữ thường
// toUpperCase(): Chuyển chuỗi thành chữ hoa.
// toLowerCase(): Chuyển chuỗi thành chữ thường.

// 5. Nối chuỗi
// Toán tử + hoặc concat(): Dùng để nối các chuỗi lại với nhau.

// 6. Lấy ký tự hoặc mã ASCII
// charAt(index): Trả về ký tự tại vị trí index.
// charCodeAt(index): Trả về mã ASCII của ký tự tại vị trí index.

// 7. Chuyển chuỗi thành mảng
// split(separator): Tách chuỗi thành mảng dựa trên ký tự separator.\

// 8. Lặp qua từng ký tự chuỗi
// Sử dụng vòng lặp để duyệt qua từng ký tự của chuỗi:


let str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}



// Bài tập xử lý chuỗi trong JavaScript

// 1. Kiểm tra vị trí xuất hiện đầu tiên của một từ
function findFirstPosition(str, word) {
    return str.indexOf(word);
}

// 2. Lấy một phần chuỗi
function sliceString(str, start, end) {
    return str.slice(start, end);
}

// 3. Đếm số lần xuất hiện của một từ trong chuỗi
function countOccurrences(str, word) {
    return (str.match(new RegExp(word, "g")) || []).length;
}

// 4. Thay thế một từ trong chuỗi
function replaceWord(str, oldWord, newWord) {
    return str.replace(new RegExp(oldWord, "g"), newWord);
}

// 5. Viết hoa ký tự đầu tiên của mỗi từ
function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// 6. Đảo ngược chuỗi
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 7. Kiểm tra chuỗi đối xứng (palindrome)
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

// 8. Chuyển chuỗi thành mảng từ
function stringToArray(str) {
    return str.split(" ");
}

// 9. Lặp qua từng ký tự của chuỗi
function loopThroughString(str) {
    for (let char of str) {
        console.log(char);
    }
}

// 10. Đếm số ký tự hoa và thường
function countUpperAndLowerCase(str) {
    let upperCount = str.split("").filter(char => char >= "A" && char <= "Z").length;
    let lowerCount = str.split("").filter(char => char >= "a" && char <= "z").length;
    return { upper: upperCount, lower: lowerCount };
}

// Chạy thử các hàm
let testString = "JavaScript is awesome!";

// 1. Vị trí đầu tiên
console.log("1. Vị trí xuất hiện:", findFirstPosition(testString, "JavaScript"));

// 2. Cắt chuỗi
console.log("2. Phần cắt:", sliceString(testString, 0, 10));

// 3. Đếm số lần xuất hiện
console.log("3. Số lần xuất hiện:", countOccurrences(testString, "is"));

// 4. Thay thế chuỗi
console.log("4. Thay thế chuỗi:", replaceWord(testString, "awesome", "fun"));

// 5. Viết hoa mỗi từ
console.log("5. Viết hoa:", capitalizeWords(testString));

// 6. Đảo ngược chuỗi
console.log("6. Đảo ngược:", reverseString(testString));

// 7. Kiểm tra đối xứng
console.log("7. Palindrome:", isPalindrome("madam"));

// 8. Chuyển chuỗi thành mảng
console.log("8. Chuyển thành mảng:", stringToArray(testString));

// 9. Lặp qua từng ký tự
console.log("9. Ký tự trong chuỗi:");
loopThroughString(testString);

// 10. Đếm ký tự hoa và thường
console.log("10. Ký tự hoa/thường:", countUpperAndLowerCase(testString));
