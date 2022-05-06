// Konsep OOP
// -) Encapsulation : Kondisi di mana sebuah attribute atau method di dalam class dibungkus dan bersifat private.

class Store {
    constructor(brand) {
        this._prices = [];
        this.brand = brand;
    }

    productDetail = function(product, price) {
        console.log(`its ${product} with ${price} dollar price from ${this.brand}`);
        this._prices.push(price);
    }
    
    showPrices() {
        return this._prices;
    }
}

const newStore = new Store('BrownFields');
newStore.productDetail('Chocolate Milk', 4);
console.log(newStore.showPrices());


// -) Inheritance
// Parent Class
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

// Child Class
class WhatsApp extends Mail {
    constructor() {
        super();
        this.username = 'Keanu Reeves';
        this.isPersonalAccount = true;
    }

    myProfile() {
        return `my name is ${this.username}, its ${this.isPersonalAccount ? 'Personal' : 'Not Personal'}`
    }
}

const myWa = new WhatsApp();
console.log(myWa.myProfile());
myWa.sendMessage('Hows your day?', 'Sofia');