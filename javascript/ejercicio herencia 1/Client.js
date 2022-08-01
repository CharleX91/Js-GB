class Client extends Person{
    static contClients =  0;
    
    //fecha de refistro = regDate
    constructor(regDate){
        this._idClient = ++Client.contClients;
        this._regDate = regDate;
    }

    get idClient(){
        return this._idClient;
    }

    get regDate(){
        return this._regDate;
    }

    set regDate( regDate ){
        this._regDate = regDate;
    }

    toString(){
        return `${super.toString()} 
        ${this._idClient} 
        ${this._regDate}`;
    }
}