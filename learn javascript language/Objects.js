// 1.1. Tạo đối tượng person và in thông tin
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person);
// 1.2. Thêm phương thức introduce
person.introduce = function() {
  console.log(`Tôi tên là ${this.name}, năm nay ${this.age} tuổi, sống tại ${this.city}.`);
};
person.introduce();
// 1.3. Tạo hai đối tượng car1 và car2, so sánh tuổi
const car1 = { brand: "Toyota", model: "Corolla", year: 2018 };
const car2 = { brand: "Honda", model: "Civic", year: 2020 };

const currentYear = new Date().getFullYear();
const ageCar1 = currentYear - car1.year;
const ageCar2 = currentYear - car2.year;

console.log(`Tuổi của car1: ${ageCar1}, Tuổi của car2: ${ageCar2}`);
// 1.4. Sử dụng for...in để in thuộc tính của đối tượng book
const book = { title: " Guide", author: "John Doe", pages: 300 };

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}
// 1.5. Tạo đối tượng student với phương thức averageScore
const student = {
  scores: [8, 9, 7, 10],
  averageScore: function() {
    const sum = this.scores.reduce((acc, score) => acc + score, 0);
    return sum / this.scores.length;
  }
};
console.log(`Điểm trung bình: ${student.averageScore()}`);
// 1.6. Kế thừa từ đối tượng Person
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
console.log(teacher);
// 1.7. Tạo đối tượng product với phương thức discount
const product = {
  price: 100,
  discount: function() {
    return this.price * 0.9;
  }
};
console.log(`Giá sau giảm: ${product.discount()}`);
// 1.8. Sử dụng Object.keys(), Object.values(), Object.entries()
const computer = { brand: "Dell", model: "XPS 13", year: 2021 };
console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(Object.entries(computer));
// 1.9. Tạo đối tượng library với phương thức findBookByTitle
const library = {
  books: [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" }
  ],
  findBookByTitle: function(title) {
    return this.books.find(book => book.title === title);
  }
};
console.log(library.findBookByTitle("Book 2"));
// 1.10. Kết hợp hai đối tượng user1 và user2
const user1 = { name: "John" };
const user2 = { age: 30 };
const combinedUser = { ...user1, ...user2 };
console.log(combinedUser);