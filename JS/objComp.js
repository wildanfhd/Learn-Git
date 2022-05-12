// Komposisi objek merupakan prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan perwarisan dari parent class.
// Prinsip ini didasarkan pada kumpulan perilaku (method/function) yang sudah kita definisikan.

// Konsep yang harus dilakukan :
// 1. Memisahkan fungsi-fungsi umum yang biasa digunakan
const yourGenericAction = params => ({
    actionA: () => { /**do action A */},
    actionB: () => {/**do action B */},
});

// 2. Membuat Class seperti biasa
const yourClassNameA = (paramA, paramB) => {
    // Berisi atribut dan perilaku
}

// 3. Kita dapat menyimpan atribut yang kita punya dalam sebuah object.
//    Umumnya, engineer menggunakan konstanta dengan nama self atau state untuk menampung atribute
const yourClassNameB = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };
}

// 4. Menambahkan perilaku(method/function) yang hanya ada pada kelas tersebut
const yourClassNameC = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };
    
    const yourSpecificActions = self => ({
        specificActionA: {/**do action A */}
    });
}


// 5. Membuat kumpulan attribute, generic method(method/function umum), dan spesific method menjadi satu objek
const yourClassNameD = (paramA, paramB) => {
    const self = {
        paramA,
        paramB
    };
    
    const yourSpecificActions = self => ({
        specificActionA: {/**do action A */}
    });

    return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
}
