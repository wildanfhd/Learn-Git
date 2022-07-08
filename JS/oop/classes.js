// Classes
// Cara 1 - Membuat Class Menggunakan PROTOTYPE
function Mail() {
    this.from = 'pengirim@dicoding.com';
};

Mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

// Membuat objek
const mail1 = new Mail();
// Memanggil method
mail1.sendMessage('Hola', 'penerima@dicoding.com');

// Keterangan


// Cara 2 - Menggunakan sintaks Class
class otherMail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
    
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }

}

// Membuat objek 
const mail2 = new otherMail();
// Memanggil method
mail2.sendMessage('Bonjour!', 'siPenerima@dicoding.com');
