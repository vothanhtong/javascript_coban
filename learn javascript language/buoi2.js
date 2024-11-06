// 1. Câu Lệnh Điều Kiện
// if...else : Kiểm tra điều kiện và thực thi câu lệnh dựa trên kết quả điều kiện.
  let score = 85;

  if (score >= 90) {
      console.log("Xuất sắc");
  } else if (score >= 75) {
      console.log("Khá");
  } else {
      console.log("Cần cải thiện");
  }

// Bài tập : Kiểm tra độ tuổi của một người và in ra kết quả phù hợp.
  let age = prompt("Nhập tuổi của bạn:");
  age = Number(age);
  if (age < 18) {
      console.log("Chưa đủ tuổi");
  } else if (age >= 18 && age <= 60) {
      console.log("Người lớn");
  } else {
      console.log("Người cao tuổi");
  }

//  2. Vòng Lặp

// for , while , do...while : Dùng để lặp lại các câu lệnh dựa trên điều kiện.

  for (let i = 1; i <= 5; i++) {
      console.log("Số:", i);
  }

  let j = 1;
  while (j <= 5) {
      console.log("Số:", j);
      j++;
  }

// Bài tập : In bảng cửu chương từ 1 đến 10.
  for (let i = 1; i <= 10; i++) {
      console.log(`Bảng cửu chương ${i}:`);
      for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
      }
  }

//  3. Hàm

// Khai báo hàm : Hàm giúp tổ chức mã và tái sử dụng dễ dàng.
  function greet(name) {
      console.log("Xin chào, " + name + "!");
  }

  greet("Alice");

// Bài tập: Tạo hàm tính tổng hai số.
  function tinhTong(a, b) {
      return a + b;
  }

  let ketQua = tinhTong(5, 7);
  console.log("Tổng của 5 và 7 là:", ketQua);

//  4. Mảng và Đối Tượng Nâng Cao

// Phương thức mảng : `push`, `map`, `filter`, `reduce`, v.v.
  let fruits = ["apple", "banana", "cherry"];
  fruits.push("orange");
  console.log(fruits);

// Bài tập : Tạo mảng tên bạn bè và kiểm tra tên có trong mảng không.
  const tenBanBe = ["An", "Bình", "Cường", "Dũng", "Hà"];

  function kiemTraTen(ten) {
      return tenBanBe.includes(ten) ? `${ten} có trong danh sách bạn bè.` : `${ten} không có trong danh sách bạn bè.`;
  }

  console.log(kiemTraTen("An"));
  console.log(kiemTraTen("Mai"));

//  5. Xử Lý Lỗi

// try...catch`**: Xử lý lỗi khi có vấn đề xảy ra trong mã.
  function chiaHaiSo(a, b) {
      try {
          if (b === 0) throw new Error("Không thể chia cho 0");
          return a / b;
      } catch (error) {
          return error.message;
      }
  }

  console.log(chiaHaiSo(10, 2));
  console.log(chiaHaiSo(10, 0));

//  6. DOM (Document Object Model)

// - Thao tác với DOM: Thay đổi nội dung trang web và thêm sự kiện.

  <button onclick="alert('Nút đã được nhấn')">Nhấn vào đây</button>


// Bài tập : Tạo nút trên trang HTML, khi nhấn sẽ hiển thị thông báo.
//  7. Promise và Async/Await

// Promise và Async/Await**: Hỗ trợ làm việc với các tác vụ không đồng bộ.
  function fetchData() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("Dữ liệu đã được lấy");
          }, 2000);
      });
  }

  fetchData().then(data => console.log(data));

  async function layDuLieu() {
      const ketQua = await fetchData();
      console.log(ketQua);
  }

  layDuLieu();