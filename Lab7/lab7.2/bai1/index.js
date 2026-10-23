
import { Product } from "./product.js";

let products = [
    new Product(1, "Laptop", 15000000, 5),
    new Product(2, "Điện thoại", 8000000, 10),
    new Product(3, "Bàn phím", 500000, 20)
];

let productList = document.getElementById("productList");
let productForm = document.getElementById("productForm");
let idInput = document.getElementById("id");
let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let quantityInput = document.getElementById("quantity");
let submitBtn = document.getElementById("submitBtn");

// Hiển thị danh sách sản phẩm
function renderProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString("vi-VN")} đ</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="edit"
                        data-id="${product.id}">
                        Sửa
                    </button>

                    <button class="delete"
                        data-id="${product.id}">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });
}

// Thêm sản phẩm
productForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let id = idInput.value;
    let name = nameInput.value.trim();
    let price = Number(priceInput.value);
    let quantity = Number(quantityInput.value);

    if (!name || price < 0 || quantity < 0) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return;
    }

    if (id === "") {
        let newId = products.length > 0
            ? Math.max(...products.map(p => p.id)) + 1
            : 1;

        let product = new Product(
            newId, name, price, quantity
        );

        products.push(product);
    } else {
        // Sửa sản phẩm
        let product = products.find(p => p.id === Number(id));

        if (product) {
            product.name = name;
            product.price = price;
            product.quantity = quantity;
        }
    }

    renderProducts();
    productForm.reset();
    idInput.value = "";
    submitBtn.textContent = "Thêm sản phẩm";
});

// Bắt sự kiện Sửa và Xóa
productList.addEventListener("click", function(event) {
    let id = Number(event.target.dataset.id);

    // Sửa sản phẩm
    if (event.target.classList.contains("edit")) {
        let product = products.find(p => p.id === id);

        if (product) {
            idInput.value = product.id;
            nameInput.value = product.name;
            priceInput.value = product.price;
            quantityInput.value = product.quantity;

            submitBtn.textContent = "Cập nhật sản phẩm";
        }
    }

    // Xóa sản phẩm
    if (event.target.classList.contains("delete")) {
        let confirmDelete = confirm(
            "Bạn có muốn xóa sản phẩm này không?"
        );

        if (confirmDelete) {
            products = products.filter(p => p.id !== id);
            renderProducts();
        }
    }
});

// Hiển thị lần đầu
renderProducts();
