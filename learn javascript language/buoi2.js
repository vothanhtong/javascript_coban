
// 1. Câu lệnh điều kiện (`if...else`)
// - **Mục đích**: Dùng để kiểm tra điều kiện và thực hiện các hành động khác nhau.
// - **Ví dụ**:

  let age = Number(prompt("Nhập tuổi của bạn:"));
  if (age < 18) {
      console.log("Chưa đủ tuổi");
  } else if (age >= 18 && age <= 60) {
      console.log("Người lớn");
  } else {
      console.log("Người cao tuổi");
  }
  
  // 2. Vòng lặp (`for`, `while`, `do...while`)**
// - **Mục đích**: Lặp lại một hành động nhiều lần dựa trên điều kiện.
// - **Ví dụ**:
//   - **Vòng lặp `for`:**
    
    for (let i = 1; i <= 5; i++) {
        console.log("Số:", i);
    }
    
  // - **Vòng lặp `while`:**

    let j = 1;
    while (j <= 5) {
        console.log("Số:", j);
        j++;
    }
    
  // - **Bài tập**: In bảng cửu chương từ 1 đến 10.

    for (let i = 1; i <= 10; i++) {
        console.log(`Bảng cửu chương ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
    

// 3. Hàm (Function)
// - **Mục đích**: Tổ chức mã tốt hơn, tái sử dụng nhiều lần.
// - **Ví dụ**:
 
  function greet(name) {
      console.log("Xin chào, " + name + "!");
  }
  greet("Alice");

// - **Bài tập**: Tạo hàm tính tổng hai số.

  function tinhTong(a, b) {
      return a + b;
  }
  console.log("Tổng của 5 và 7 là:", tinhTong(5, 7));
  
// 4. Mảng và Đối tượng**
// - **Mục đích**: Lưu trữ và thao tác với nhiều giá trị.
// - **Ví dụ**:
 
  let fruits = ["apple", "banana", "cherry"];
  fruits.push("orange");
  console.log(fruits);
  
// - **Bài tập**: Tạo mảng tên bạn bè và kiểm tra tên.

  const tenBanBe = ["An", "Bình", "Cường", "Dũng", "Hà"];

  function kiemTraTen(ten) {
      return tenBanBe.includes(ten) ? `${ten} có trong danh sách bạn bè.` : `${ten} không có trong danh sách bạn bè.`;
  }
  console.log(kiemTraTen("An"));
  console.log(kiemTraTen("Mai"));


// 5. Xử lý lỗi (`try...catch`)**
// - **Mục đích**: Xử lý lỗi trong quá trình chạy chương trình.
// - **Ví dụ**:
 
  function chiaHaiSo(a, b) {
      try {
          if (b === 0) throw new Error("Không thể chia cho 0");
          return a / b;
      } catch (error) {
          return error.message;
      }
  }
  console.log(chiaHaiSo(10, 2)); // Kết quả: 5
  console.log(chiaHaiSo(10, 0)); // Kết quả: Không thể chia cho 0
 

// /7. Xử lý không đồng bộ (Promise và Async/Await)**
// - **Mục đích**: Làm việc với các tác vụ bất đồng bộ.
// - **Ví dụ**:

  function fetchData() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("Dữ liệu đã được lấy");
          }, 2000);
      });
  }

  async function layDuLieu() {
      const ketQua = await fetchData();
      console.log(ketQua);
  }

  layDuLieu();



// Tạo giao diện chính của ứng dụng
document.body.style.fontFamily = "Arial, sans-serif";

const title = document.createElement("h1");
title.textContent = "Quản Lý Bài Tập";
document.body.appendChild(title);

const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Thêm Bài Tập";
document.body.appendChild(addTaskButton);

const viewTasksButton = document.createElement("button");
viewTasksButton.textContent = "Xem Danh Sách";
document.body.appendChild(viewTasksButton);

const taskList = document.createElement("ul");
document.body.appendChild(taskList);

// Mảng lưu trữ danh sách bài tập
let tasks = [];

// Hàm thêm bài tập
function addTask() {
    const taskName = prompt("Nhập tên bài tập:");
    if (!taskName) {
        alert("Tên bài tập không được để trống!");
        return;
    }

    tasks.push({ name: taskName, status: "Chưa hoàn thành" });
    alert(`Đã thêm bài tập: ${taskName}`);
}

// Hàm hiển thị danh sách bài tập
function viewTasks() {
    taskList.innerHTML = ""; // Xóa nội dung cũ

    if (tasks.length === 0) {
        alert("Chưa có bài tập nào!");
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${task.name} - ${task.status}`;
        taskList.appendChild(li);

        // Thêm nút "Hoàn thành"
        const completeButton = document.createElement("button");
        completeButton.textContent = "Hoàn thành";
        completeButton.style.marginLeft = "10px";
        completeButton.addEventListener("click", () => {
            task.status = "Đã hoàn thành";
            viewTasks();
        });
        li.appendChild(completeButton);

        // Thêm nút "Xóa"
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            viewTasks();
        });
        li.appendChild(deleteButton);
    });
}

// Sự kiện click nút thêm bài tập
addTaskButton.addEventListener("click", addTask);

// Sự kiện click nút xem danh sách bài tập
viewTasksButton.addEventListener("click", viewTasks);

// Chức năng của mã
// 1. **Tạo giao diện thuần JavaScript**:
//    - Tiêu đề, các nút chức năng và danh sách bài tập được tạo hoàn toàn bằng JavaScript.
// 2. **Thêm bài tập**:
//    - Nhập tên bài tập qua `prompt`.
//    - Kiểm tra để đảm bảo tên không bị để trống.
// 3. **Xem danh sách bài tập**:
//    - Hiển thị danh sách với trạng thái hiện tại (`Chưa hoàn thành` hoặc `Đã hoàn thành`).
//    - Hiển thị các nút hành động cho từng bài tập:
//      - **Hoàn thành**: Đánh dấu bài tập là "Đã hoàn thành".
//      - **Xóa**: Loại bỏ bài tập khỏi danh sách.
// 4. **Mảng và vòng lặp**:
//    - Dùng mảng để quản lý bài tập và vòng lặp để hiển thị danh sách.
// 5. **Thao tác DOM**:
//    - Tạo, xóa, và cập nhật nội dung danh sách động bằng cách thao tác với các phần tử DOM. 

// ---

// ### **Hướng dẫn sử dụng**
// 1. Sao chép code trên vào file `index.html`.
// 2. Thêm thẻ `<script>` trong file HTML để chạy mã:
//    ```html
//    <script src="main.js"></script>
//    ```
// 3. Mở file HTML trong trình duyệt để sử dụng.