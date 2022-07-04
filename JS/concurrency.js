// Synchronous : Kode dijalankan baris perbaris dari awal sampai akhir
// Asynchronous : Sebuah baris kode bisa dijalankan sambil menunggu baris kode lainnya dieksekusi.

// SetTimeout - Menjalankan kode secara async dengan mengatur lamanya durasi eksekusi
// console.log("Selamat datang");
// setTimeout(() => {
//     console.log("Terima kasih telah berkunjung :)");
// }, 3000);
// console.log("Ingin pesan apa?");


// Callback Function
const orderFood = callback => {
    let pasta = null;
    console.log("Sedang membuat pasta, silahkan tunggu....");
    setTimeout(() => {
        pasta = "Pasta sudah siap disantap!";
        callback(pasta);
    }, 3000)
}

// Memanggil function orderFood
orderFood(pasta => {
    console.log(pasta);
});



