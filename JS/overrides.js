// Macam-macam Override
// 1) - Overriding Constructor
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
    constructor(username, isPersonalAccount, phone) {
        // Override Constructor dilakukan disini dengan super()
        super(phone);
        this.username = username;
        this.isPersonalAccount = isPersonalAccount;
    }

    myProfile() {
        return `my name is ${this.username}, its ${this.isPersonalAccount ? 'Personal' : 'Not Personal'}`
    }
}

const wa1 = new WhatsApp('Keanu Reeves', true, 088932);
console.log(wa1.myProfile());




// 2) - Overriding Method
// super.methodName()
class otherWA extends Mail {
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const otherWa1 = new otherWA();
otherWa1.sendMessage('Vamos!', 'Someone');