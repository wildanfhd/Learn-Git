// Property pada class
// Cara 1 - Tanpa menggunakan object prototype
class Mail {
    constructor() {
        this.from = 'pengirim@yahoo.com';
        this.contacts = [];
        this.yourOtherProperty = 'The values';
    }

    sendMessage(msg, to) {
        console.log(`You send : ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to)
        console.log(this.contacts);
    }
}

const yMail = new Mail();
yMail.sendMessage('whats up!', 'James Bond');
yMail.sendMessage('Hello There!', 'Kingsman');


// Cara 2 - Dengan menggunakan object prototype
function otherMail() {
        this.from2 = 'me@pengirim.com';
        this.contact2 = [];
        this.yourOtherProperty2 = 'The values';
}

otherMail.prototype.sendMoreMessage = function (msg2, to2) {
    console.log(`You send : ${msg2} to ${to2} from ${this.from2}`);
    this.contact2.push(to2); // Menyimpan kontak
    console.log(this.contact2);
}

    // Pada pemanggilannya, Cara 2 juga harus dibuat object barunya terlebih dahulu, baru bisa memanggil methodnya
const otherMsg = new otherMail();
otherMsg.sendMoreMessage('doing good?', 'Someone');