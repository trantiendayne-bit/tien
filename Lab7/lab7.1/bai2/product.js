export class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    display() {
        return `
            <div class="product">
                <img src="${this.image}" alt="${this.name}">
                <h4>${this.name}</h4>
                <p>${this.price.toLocaleString("vi-VN")} đ</p>
            </div>
        `;
    }
}