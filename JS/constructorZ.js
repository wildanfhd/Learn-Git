// Constructor merupakan method/function yang dieksekusi pertama kali pada saat object dibuat.
// Cara 1 - Menggunakan keyword constructor (harus menggunakan keyword class)
class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author); 
    };
}

// Cara 2 - Menggunakan function
function otherMail(author) {
    this.from = author;
    console.log('is instantiated', author); 
}

// Pemanggilan
const myMail = new Mail('Jajang');
const isMail = new otherMail('Otong');