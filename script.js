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

    //Part 3 will go here.

    static applyDiscount(products, discount) {
        //looping thru every product in the array and for each one we reduce the price by the discounted %
        products.forEach(product => {
            //for example, if the discount is 0.15 it means 15 %
            product.price = product.price - (product.price * discount); //here, we take 15 percent of the price and then subtract it from the original price.
        }); 
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


console.log(milk.toString());
console.log(yogurt.toString());
