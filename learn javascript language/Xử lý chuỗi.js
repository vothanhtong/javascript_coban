// Lý thuyết chi tiết về xử lý chuỗi trong JavaScript

// 1. Tìm kiếm chuỗi con
let textt = "JavaScript is awesome!";
console.log("indexOf:", text.indexOf("is")); // Tìm vị trí đầu tiên
console.log("lastIndexOf:", text.lastIndexOf("is")); // Tìm vị trí cuối cùng
console.log("search:", text.search(/is/)); // Tìm bằng Regex

// 2. Cắt chuỗi
console.log("slice:", text.slice(0, 10)); // Lấy phần tử từ 0 đến 10
console.log("substring:", text.substring(0, 10)); // Giống slice nhưng không nhận số âm
console.log("substr:", text.substr(0, 10)); // Lấy 10 ký tự đầu tiên

// 3. Thay thế chuỗi
console.log("replace:", text.replace("awesome", "great")); // Thay "awesome" thành "great"
console.log("replaceAll:", text.replaceAll("is", "was")); // Thay tất cả "is" thành "was"

// 4. Chuyển đổi chữ hoa/chữ thường
console.log("toUpperCase:", text.toUpperCase()); // Chuyển thành chữ hoa
console.log("toLowerCase:", text.toLowerCase()); // Chuyển thành chữ thường

// 5. Nối chuỗi
console.log("Concatenation:", "JavaScript" + " is awesome!");

// 6. Lấy ký tự hoặc mã ASCII
console.log("charAt:", text.charAt(0)); // Lấy ký tự đầu tiên
console.log("charCodeAt:", text.charCodeAt(0)); // Mã ASCII của ký tự đầu tiên

// 7. Chuyển chuỗi thành mảng
console.log("split:", text.split(" ")); // Chuyển chuỗi thành mảng tách bởi khoảng trắng

// 8. Lặp qua từng ký tự của chuỗi
//  Lý thuyết chi tiết về xử lý chuỗi trong JavaScript


// 1. Tìm kiếm chuỗi con

// indexOf(substring): Tìm vị trí xuất hiện đầu tiên của chuỗi con
let text = "JavaScript is awesome!";
console.log("indexOf:", text.indexOf("is")); // Output: 11

// lastIndexOf(substring): Tìm vị trí xuất hiện cuối cùng của chuỗi con
console.log("lastIndexOf:", text.lastIndexOf("is")); // Output: 11

// search(substring): Tương tự indexOf nhưng hỗ trợ biểu thức chính quy (Regex)
console.log("search:", text.search(/is/)); // Output: 11

// 2. Cắt chuỗi

// slice(start, end): Trả về một phần chuỗi từ `start` đến `end` (không bao gồm end)
console.log("slice:", text.slice(0, 10)); // Output: "JavaScript"

// substring(start, end): Tương tự slice nhưng không hỗ trợ số âm
console.log("substring:", text.substring(0, 10)); // Output: "JavaScript"

// substr(start, length): Lấy `length` ký tự từ vị trí `start` (cũ, không khuyến khích)
console.log("substr:", text.substr(0, 10)); // Output: "JavaScript"

// 3. Thay thế chuỗi

// replace(searchValue, replaceValue): Thay chuỗi con đầu tiên tìm được
console.log("replace:", text.replace("awesome", "great")); // Output: "JavaScript is great!"

// replaceAll(searchValue, replaceValue): Thay tất cả các chuỗi con
console.log("replaceAll:", text.replaceAll("is", "was")); // Output: "JavaScript was awesome!"

// 4. Chuyển đổi chữ hoa/chữ thường

// toUpperCase(): Chuyển toàn bộ chuỗi thành chữ hoa
console.log("toUpperCase:", text.toUpperCase()); // Output: "JAVASCRIPT IS AWESOME!"

// toLowerCase(): Chuyển toàn bộ chuỗi thành chữ thường
console.log("toLowerCase:", text.toLowerCase()); // Output: "javascript is awesome!"

// 5. Nối chuỗi

// Toán tử + hoặc concat(): Dùng để nối các chuỗi
console.log("Concatenation:", "JavaScript" + " is awesome!"); // Output: "JavaScript is awesome!"

// 6. Lấy ký tự hoặc mã ASCII

// charAt(index): Lấy ký tự tại vị trí index
console.log("charAt:", text.charAt(0)); // Output: "J"

// charCodeAt(index): Lấy mã ASCII của ký tự tại index
console.log("charCodeAt:", text.charCodeAt(0)); // Output: 74

// 7. Chuyển chuỗi thành mảng

// split(separator): Tách chuỗi thành mảng dựa trên ký tự phân tách separator
console.log("split:", text.split(" ")); // Output: ["JavaScript", "is", "awesome!"]

// 8. Lặp qua từng ký tự của chuỗi

for (let char of text) {
    console.log("Character:", char);
}

// Các hàm xử lý chuỗi nâng cao


// 1. Tìm vị trí đầu tiên của từ
function getFirstOccurrence(input, word) {
    return input.indexOf(word);
}

// 2. Cắt chuỗi
function getSubstring(input, start, end) {
    return input.slice(start, end);
}

// 3. Đếm số lần xuất hiện của một từ
function countWords(input, word) {
    return (input.match(new RegExp(word, "g")) || []).length;
}

// 4. Thay thế một từ
function swapWords(input, searchWord, newWord) {
    return input.replace(new RegExp(searchWord, "g"), newWord);
}

// 5. Viết hoa ký tự đầu tiên của từng từ
function toTitleCase(input) {
    return input.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

// 6. Đảo ngược chuỗi
function reverseStr(input) {
    return input.split("").reverse().join("");
}

// 7. Kiểm tra chuỗi đối xứng
function checkPalindrome(input) {
    let reversed = input.split("").reverse().join("");
    return input === reversed;
}

// 8. Tách chuỗi thành mảng
function splitStringToArray(input) {
    return input.split(" ");
}

// 9. Duyệt từng ký tự
function iterateCharacters(input) {
    for (let char of input) {
        console.log(char);
    }
}

// 10. Đếm số ký tự in hoa và in thường
function countCase(input) {
    let uppercase = 0, lowercase = 0;
    for (let char of input) {
        if (char >= "A" && char <= "Z") uppercase++;
        else if (char >= "a" && char <= "z") lowercase++;
    }
    return { uppercase, lowercase };
}

// Test các hàm

let testStringg = "JavaScript is amazing!";
console.log("\n==== TESTING ====");
console.log("1. Vị trí xuất hiện:", getFirstOccurrence(testString, "JavaScript"));
console.log("2. Phần cắt:", getSubstring(testString, 0, 10));
console.log("3. Số lần xuất hiện:", countWords(testString, "is"));
console.log("4. Thay thế:", swapWords(testString, "amazing", "fantastic"));
console.log("5. Viết hoa:", toTitleCase(testString));
console.log("6. Đảo ngược:", reverseStr(testString));
console.log("7. Palindrome:", checkPalindrome("madam"));
console.log("8. Chuyển mảng:", splitStringToArray(testString));
console.log("9. Ký tự trong chuỗi:");
iterateCharacters(testString);
console.log("10. Số ký tự:", countCase(testString));

for (let char of text) {
    console.log("Character:", char);
}

// ======================
// Các hàm xử lý chuỗi

// 1. Tìm vị trí đầu tiên của từ
function getFirstOccurrence(input, word) {
    return input.indexOf(word);
}

// 2. Cắt chuỗi
function getSubstring(input, start, end) {
    return input.slice(start, end);
}

// 3. Đếm số lần xuất hiện của một từ
function countWords(input, word) {
    return (input.match(new RegExp(word, "g")) || []).length;
}

// 4. Thay thế một từ
function swapWords(input, searchWord, newWord) {
    return input.replace(new RegExp(searchWord, "g"), newWord);
}

// 5. Viết hoa ký tự đầu tiên của từng từ
function toTitleCase(input) {
    return input.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

// 6. Đảo ngược chuỗi
function reverseStr(input) {
    return input.split("").reverse().join("");
}

// 7. Kiểm tra chuỗi đối xứng
function checkPalindrome(input) {
    let reversed = input.split("").reverse().join("");
    return input === reversed;
}

// 8. Tách chuỗi thành mảng
function splitStringToArray(input) {
    return input.split(" ");
}

// 9. Duyệt từng ký tự
function iterateCharacters(input) {
    for (let char of input) {
        console.log(char);
    }
}
// 10. Đếm số ký tự in hoa và in thường
function countCase(input) {
    let uppercase = 0, lowercase = 0;
    for (let char of input) {
        if (char >= "A" && char <= "Z") uppercase++;
        else if (char >= "a" && char <= "z") lowercase++;
    }
    return { uppercase, lowercase };
}
// ======================
// Test các hàm
let testString = "JavaScript is amazing!";

console.log("1. Vị trí xuất hiện:", getFirstOccurrence(testString, "JavaScript"));
console.log("2. Phần cắt:", getSubstring(testString, 0, 10));
console.log("3. Số lần xuất hiện:", countWords(testString, "is"));
console.log("4. Thay thế:", swapWords(testString, "amazing", "fantastic"));
console.log("5. Viết hoa:", toTitleCase(testString));
console.log("6. Đảo ngược:", reverseStr(testString));
console.log("7. Palindrome:", checkPalindrome("madam"));
console.log("8. Chuyển mảng:", splitStringToArray(testString));
console.log("9. Ký tự trong chuỗi:");
iterateCharacters(testString);
console.log("10. Số ký tự:", countCase(testString));
