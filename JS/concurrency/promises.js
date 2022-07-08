// const executorFunction = (resolve, reject) => {

//     const isOvenReady = true;
//     if(isOvenReady) {
//         resolve("Roti berhasil dibuat")
//     } else {
//         reject("Oven tidak dapat digunakan");
//     }
// }

// const makeBread = () => {
//     return new Promise(executorFunction)
// }

// const breadPromise = makeBread();
// console.log(breadPromise);

// Membuat objek state yang berisi properti :
const state = {
    stock: {
        water : 1000,
        oil : 1000,
        flour : 500,
        sugar : 500,
        salt : 1000,
        "choco powder": 500
    },
    isOvenReady : false
};

// Membuat function untuk mengecek ketersediaan oven
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isOvenReady) {
                resolve("Oven siap digunakan");
            } else {
                reject("Maaf, Oven sedang digunakan");
            }
        }, 1000)
    })
}

// Membuat function untuk mengecek ketersediaan bahan untuk membuat roti
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isOvenReady = true;

        setTimeout(() => {
            if(water == 500 && flour == 500) {
                resolve("Roti Sedang dibuat");
            } else {
                reject("Roti gagal dibuat karena bahan tidak cukup");
            }
        }, 1500);

    })
}

export default state;