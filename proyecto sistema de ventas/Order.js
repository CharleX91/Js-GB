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
            //this._products[this._countAddedProducts++] = product;
        }
        else{
            console.log('No se pueden aderir mas productos');
        }
    }

    calculateTotal(){
        let totalSales = 0;
        for(let product of this._products){
            totalSales += product.price
        }
    }
}