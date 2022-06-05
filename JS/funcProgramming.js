// 1. Pure Function
// Fungsi tidak bergantung terhadap nilai diluar pada fungsi atau parameternya.
// Impure Function - Salah :
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(3)); // 28.26

PI = 5;
console.log(hitungLuasLingkaran(3)); // Berubah menjadi 45

// Pure Function - Benar : 
const hitungLuasLingkaran2 = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(3)); // 28.26
console.log(hitungLuasLingkaran(3)); // 28.26


