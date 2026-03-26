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

//part 4, store class to manage all the productgs
class Store { 
    constructor() {
        this.inventory = []; 
    } 
        //to add new product into the inventory array
    addProduct(product) {
        this.inventory.push(product)
    }
    //to make it loop thru all products and add up their total value we will insert following
    getInventoryValue() {
        let total=0;
        this.inventory.forEach(product => {
            total += product.getTotalValue();
        });
        return total;
    }
    //to search thru the inventory by product name, if nothing comes up , it will shows null
    findProductByName(name) {
        for (let product of this.inventory) {
            if (product.name == name) {
                return product;
            }
        }
        //if didn't find anything so will display null
        return null;
    }
}
    const store= new Store();
    const product1 = new Product("Apple", 2.99,60);
    const product2 = new Product("Cold Drink", 3.99, 40);
    const product3 = new Product("Shampoo", 12.99, 25);