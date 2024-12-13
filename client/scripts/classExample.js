class Product {
    
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductName() {
        return this.name;
    }

    setProductName(name) {
        this.name = name;
    }

    getProductPrice() {
        return this.price;
    }

    setProductPrice(price) {
        this.price = price;
    }

}