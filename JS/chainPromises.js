// Objek yang berisi bahan bahan untuk membuat kopi
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000
    },
    isCoffeeMakerBusy: false,
}

// method untuk mengecek apakah mesin kopi siap digunakan
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isCoffeeMakerBusy) {
                resolve("Mesin kopi siap digunakan");
            } else {
                reject("Maaf, mesin kopi sedang digunakan");
            }
        }, 2000);
    });
};

// Method untuk mengecek ketersediaan stok untuk membuat kopi
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMakerBusy = true; // Mengubah status menjadi sibuk / true
        setTimeout(() => {
            if(state.stock.coffeeBeans >= 18 && state.stock.water >= 300) {
                resolve("Stop cukup, bisa membuat kopi");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 2000);
    });  
};




// Method untuk mencampurkan kopi dengan air lalu dihidangkan ke dalam gelas
const brewCoffee = () => {
    console.log("Kopi anda sedang dibuat....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 3000);
    });
};

// Function/method untuk membuat kopi dengan memanggil satu per satu fungsi yang sudah dibuat dengan menggunakan .then lalu .catch untuk kondisi terakhir.
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
        });
}

makeEspresso();



