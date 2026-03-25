class Product {
    constructor(name, price, quantity) {

        this.name = name;
        this.price= price;
        this.quantity= quantity;
    }
    
    getTotalValue() {
        return this.price * this.quantity;
    }
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}

class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

const milk = new PerishableProduct("Milk", 1.50, 10, "2026-04-31");
const yogurt = new PerishableProduct("Yogurt", 3.00, 15, "2026-05-31");

