class Product{
    static countProducts = 0;

    constructor(name, price){
        this._idProduct = ++Product.countProducts;
        this._name = name;
        this._price = price;
    }

    get idProduct(){
        return this._idProduct;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get price(){
        return this._price;
    }

    set price(price){
        this._price = price;
    }

    toString(){
        return `${this._idProduct} ${this._name}   ${this._price}` ;
                
              
    } 
}

class Order{
    static countOrders = 0;

    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.countOrders;
        this._products = [];
        this._countAddedProducts = 0;

    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){
        if (this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
            //La siguiente sintaxis es equivalente al método push, pero no más conveniente.
            //this._products[this._countAddedProducts++] = product;
        }
        else{
            console.log('No se pueden aderir mas productos');
        }
    }

    calculateTotal(){
        let totalSales = 0;
        for(let product of this._products){
             totalSales += product.price;  // Linea equivalente a {totalSales = totalSales + product.price}
        }
        return totalSales;
    }

    showOrder(){
        let productsOrder = '';
        for( let variableAUX of this._products){
        productsOrder += '\n {' + variableAUX.toString() + '}';
        }
        console.log(`Order: ${this._idOrder}, Total: $  ${this.calculateTotal()}, Products: ${productsOrder}`)
    }
}

let product1 = new Product('T-shirt', 1400);
let product2 = new Product('Jean', 3000);

let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

order1.showOrder();

