// Sebagai contoh, dari hirarki Mail yang sudah kita buat sebelumnya. Kita akan merombak dan membuatnya dengan pendekatan Object composition


// [1] - Membuat list of abstractions (abstraksi pada materi OOP)
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

const seeEmailSender = self => ({
    sender: () => console.log('sender: ', self.from)
});

// [2] - membuat komposisi object (object composition)
const personalEnterprise = (from, message, store) => {
    // [3] - attributes
    const self = {
        from,
        message,
        store
    };

    // [4] - Method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has been created :', self.store)
    });

    // [5] - Membuat komposisi objek
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self), seeEmailSender(self));
    // Jika kita membuat method/function umum baru (abstraksi), kita juga harus menambahkannya ke dalam Object.assign agar dapat mengakses properti yang ada pada class
};

const myPE = personalEnterprise('siPengirim@gmail.com', 'Theres a new product!', 'Tuding Store');
myPE.createCatalog(); // Output: Catalog has been created : Tuding Store
myPE.sendMessage();  // Output: send message: Theres a new product!
myPE.sender(); // Output: siPengirim@gmail.com
myPE.isValid(); // Output: valid phone siPengirim@gmail.com