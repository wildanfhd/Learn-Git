
// --! Sebelum menerapkan async-await
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if(seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis")
            }
        }, 1000);
    });
}

// // Mendapatkan nilai dari method getCoffee() menggunakan .then()
// function makeCoffee() {
//     getCoffee()
//         .then((coffee) => {
//             console.log(coffee);
//         });
// }

// makeCoffee();


// --! Setelah menerapkan async-await
// keyword async perlu ditambahkan pada awal sebelum keyword function. 
    // berfungsi untuk memberi tahu JavaScript agar menjalankan fungsinya secara asynchronous
async function makeOtherCoffee() {
    const coffee = await getCoffee();  // keyword await digunakan untukk menghentikan pembacaan kkode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve
    console.log(coffee); // akan dieksekusi jika fungsi getCoffee() mengembalikan nilai promise resolve
}

makeOtherCoffee();



// ==================================================================================================
// Handling onRejected using async-await
// ==================================================================================================

// -- await hanya akan mengembalikan nilai jika promise berhasil dilakukan atau onFulfilled.
// kita dapat menggunakan try..catch untuk menangani nilai onRejected

const getFlour = () => {
    return new Promise((resolve, reject) => {
        const flour = 50
        setTimeout(() => {
            if(flour >= 20) {
                resolve("Tepung berhasil diambil");
            } else {
                reject("Tepung tidak cukuP!");
            }
        }, 2000);
    });
}


async function makeBread() {
    try {
        const bread = await getFlour();
        console.log(bread);
    } catch(rejectedReason) {
        console.log(rejectedReason);
    }
}

makeBread();