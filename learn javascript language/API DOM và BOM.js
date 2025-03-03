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



// === Phần 1: Các khái niệm nâng cao về đối tượng (Objects) ===

// 1.1. Tạo đối tượng `person` và in thông tin
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log("Thông tin person:", person);
  
  // 1.2. Thêm phương thức `introduce`
  person.introduce = function() {
    console.log(`Tôi tên là ${this.name}, năm nay ${this.age} tuổi, sống tại ${this.city}.`);
  };
  person.introduce();
  
  // 1.3. Tạo hai đối tượng `car1` và `car2`, so sánh tuổi
  const car1 = { brand: "Toyota", model: "Corolla", year: 2018 };
  const car2 = { brand: "Honda", model: "Civic", year: 2020 };
  
  const currentYear = new Date().getFullYear();
  const ageCar1 = currentYear - car1.year;
  const ageCar2 = currentYear - car2.year;
  
  console.log(`Tuổi của car1: ${ageCar1}, Tuổi của car2: ${ageCar2}`);
  
  // 1.4. Sử dụng `for...in` để in thuộc tính của đối tượng `book`
  const book = { title: "JavaScript Guide", author: "John Doe", pages: 300 };
  
  console.log("Thuộc tính của book:");
  for (let key in book) {
    console.log(`${key}: ${book[key]}`);
  }
  
  // 1.5. Tạo đối tượng `student` với phương thức `averageScore`
  const student = {
    scores: [8, 9, 7, 10],
    averageScore: function() {
      const sum = this.scores.reduce((acc, score) => acc + score, 0);
      return sum / this.scores.length;
    }
  };
  console.log(`Điểm trung bình: ${student.averageScore()}`);
  
  // 1.6. Kế thừa từ đối tượng `Person`
  function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  
  function Teacher(name, age, city, subject) {
    Person.call(this, name, age, city);
    this.subject = subject;
  }
  
  const teacher = new Teacher("Alice", 40, "London", "Math");
  console.log("Thông tin teacher:", teacher);
  
  // 1.7. Tạo đối tượng `product` với phương thức `discount`
  const product = {
    price: 100,
    discount: function() {
      return this.price * 0.9;
    }
  };
  console.log(`Giá sau giảm: ${product.discount()}`);
  
  // 1.8. Sử dụng `Object.keys()`, `Object.values()`, `Object.entries()`
  const computer = { brand: "Dell", model: "XPS 13", year: 2021 };
  console.log("Keys:", Object.keys(computer));
  console.log("Values:", Object.values(computer));
  console.log("Entries:", Object.entries(computer));
  
  // 1.9. Tạo đối tượng `library` với phương thức `findBookByTitle`
  const library = {
    books: [
      { title: "Book 1", author: "Author 1" },
      { title: "Book 2", author: "Author 2" }
    ],
    findBookByTitle: function(title) {
      return this.books.find(book => book.title === title);
    }
  };
  console.log("Tìm sách theo tiêu đề:", library.findBookByTitle("Book 2"));
  
  // 1.10. Kết hợp hai đối tượng `user1` và `user2`
  const user1 = { name: "John" };
  const user2 = { age: 30 };
  const combinedUser = { ...user1, ...user2 };
  console.log("Kết hợp user1 và user2:", combinedUser);
  
  // === Phần 2: Các API DOM và BOM ===
  
  // 2.1. Thay đổi nội dung phần tử HTML
  document.getElementById("title").textContent = "Hello JavaScript";
  
  // 2.2. Thêm sự kiện click vào nút
  document.getElementById("btn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  // 2.3. Thay đổi màu chữ của tất cả phần tử `<p>`
  document.querySelectorAll("p").forEach(p => p.style.color = "red");
  
  // 2.4. Sử dụng `setTimeout`
  setTimeout(() => {
    console.log("3 giây đã trôi qua!");
  }, 3000);
  
  // 2.5. Lấy URL hiện tại
  console.log("URL hiện tại:", window.location.href);
  
  // 2.6. Thêm sự kiện `mouseover`
  document.getElementById("box").addEventListener("mouseover", () => {
    document.getElementById("box").style.backgroundColor = "blue";
  });
  
  // 2.7. Tạo và thêm phần tử `<div>`
  const newDiv = document.createElement("div");
  newDiv.textContent = "New Div";
  document.body.appendChild(newDiv);
  
  // 2.8. Sử dụng `window.history.back()`
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
  
  // === Phần 3: Làm việc với Async/await và Promises ===
  
  // 3.1. Tạo Promise kiểm tra số
  const checkNumber = new Promise((resolve) => {
    setTimeout(() => {
      const num = 15;
      resolve(num > 10 ? "Lớn hơn 10" : "Nhỏ hơn hoặc bằng 10");
    }, 2000);
  });
  checkNumber.then(console.log);
  
  // 3.2. Sử dụng `async/await` để gọi Promise
  async function getName() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("John"), 1000);
    });
  }
  
  (async () => {
    const name = await getName();
    console.log("Tên ngẫu nhiên:", name);
  })();
  
  // 3.3. Sử dụng `fetch` để lấy dữ liệu từ API
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Dữ liệu từ API:", data);
  }
  fetchData();
  
  // 3.4. Sử dụng `Promise.all`
  const promise1 = Promise.resolve("Result 1");
  const promise2 = Promise.resolve("Result 2");
  
  Promise.all([promise1, promise2]).then(results => {
    console.log("Kết quả từ Promise.all:", results);
  });
  
  // 3.5. Xử lý chuỗi Promise với `async/await`
  async function processData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await data.json();
    console.log("Dữ liệu đã xử lý:", json);
  }
  processData();
  
  // === Phần 4: Quản lý trạng thái và dữ liệu ===
  
  // 4.1. Lưu và đọc từ `localStorage`
  localStorage.setItem("name", "John");
  console.log("Giá trị từ localStorage:", localStorage.getItem("name"));
  
  // 4.2. Sử dụng `sessionStorage`
  sessionStorage.setItem("score", 50);
  let score = parseInt(sessionStorage.getItem("score")) + 10;
  sessionStorage.setItem("score", score);
  console.log("Điểm từ sessionStorage:", sessionStorage.getItem("score"));
  
  // 4.3. Kiểm tra và thêm giá trị mặc định vào `localStorage`
  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", "Guest");
  }
  console.log("Username từ localStorage:", localStorage.getItem("username"));