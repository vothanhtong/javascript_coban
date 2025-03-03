// 2.1. Thay đổi nội dung phần tử HTML
document.getElementById("title").textContent = "Hello ";
// 2.2. Thêm sự kiện click vào nút
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
// 2.3. Thay đổi màu chữ của tất cả phần tử <p>
document.querySelectorAll("p").forEach(p => p.style.color = "red");
// 2.4. Sử dụng setTimeout
setTimeout(() => {
  console.log("3 giây đã trôi qua!");
}, 3000);
// 2.5. Lấy URL hiện tại
console.log(window.location.href);
// 2.6. Thêm sự kiện mouseover
document.getElementById("box").addEventListener("mouseover", () => {
  document.getElementById("box").style.backgroundColor = "blue";
});
// 2.7. Tạo và thêm phần tử <div>
const newDiv = document.createElement("div");
newDiv.textContent = "New Div";
document.body.appendChild(newDiv);
// 2.8. Sử dụng window.history.back()
document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});
// 2.9. Lấy chiều rộng và chiều cao cửa sổ
console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
// 2.10. Tạo đồng hồ số
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
