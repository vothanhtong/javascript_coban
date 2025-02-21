// ======================
// Nâng cấp các hàm xử lý chuỗi
// ======================

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
    return (input.match(new RegExp(word, "gi")) || []).length;
}

// 4. Thay thế một từ
function swapWords(input, searchWord, newWord) {
    return input.replace(new RegExp(searchWord, "gi"), newWord);
}

// 5. Viết hoa ký tự đầu tiên của từng từ
function toTitleCase(input) {
    return input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

// 6. Đảo ngược chuỗi
function reverseStr(input) {
    return input.split("").reverse().join("");
}

// 7. Kiểm tra chuỗi đối xứng
function checkPalindrome(input) {
    let cleanStr = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
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
// Tính năng bổ sung
// ======================

// 11. Loại bỏ ký tự đặc biệt
function removeSpecialChars(input) {
    return input.replace(/[^a-zA-Z0-9 ]/g, "");
}

// 12. Đếm số từ trong chuỗi
function countWordsInString(input) {
    return input.trim().split(/\s+/).length;
}

// 13. Kiểm tra chuỗi có chứa từ khóa không
function containsWord(input, word) {
    return new RegExp("\\b" + word + "\\b", "i").test(input);
}

// 14. Chuyển đổi chữ hoa - chữ thường xen kẽ (Alternating Case)
function toAlternatingCase(input) {
    return input.split("").map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("");
}

// 15. Kiểm tra xem chuỗi có phải là số hay không
function isNumeric(input) {
    return !isNaN(input) && !isNaN(parseFloat(input));
}

// ======================
// Test các hàm
// ======================
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
console.log("11. Loại bỏ ký tự đặc biệt:", removeSpecialChars("Hello @World!!"));
console.log("12. Đếm số từ:", countWordsInString("JavaScript is really awesome!"));
console.log("13. Chứa từ khóa không:", containsWord(testString, "JavaScript"));
console.log("14. Alternating Case:", toAlternatingCase("javascript"));
console.log("15. Kiểm tra số:", isNumeric("1234"));
