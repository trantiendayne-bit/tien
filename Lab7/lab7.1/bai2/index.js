import { Product } from "./product.js";

const products = [
    new Product(1, "Latte Almond", 59000, "https://makehealthyrecipes.com/wp-content/uploads/2023/02/almond-milk-latte-15-1024x1536.jpg"),
    new Product(2, "Latte Caramel", 59000, "https://tse1.mm.bing.net/th/id/OIP.Xr5P-ihkK-GWDACXDiSzIgHaLI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"),
    new Product(3, "Latte Hazelnut", 59000, "https://tse1.explicit.bing.net/th/id/OIP.D1Yp6cWoYL248YfhvU7wRAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"),
    new Product(4, "Latte Coconut", 59000, "https://tse1.explicit.bing.net/th/id/OIP.mth-Pm6Qz5NFbCQTzM2hMQHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"),
    new Product(5, "Latte Bạc Xỉu", 49000, "https://th.bing.com/th/id/OIP.fK0nvFaPycS0muRXx0v6mAHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"),
    new Product(6, "Latte Classic", 55000, "https://tse4.mm.bing.net/th/id/OIP.wphPnRDc4JDFWn2uOdXx5AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")
];

const productList = document.getElementById("product-list");

productList.innerHTML = products
    .map(product => product.display())
    .join("");