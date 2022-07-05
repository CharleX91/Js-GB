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
        return `${this._idProduct} 
                ${this._name} 
                ${this._price}` ;
    } 
}