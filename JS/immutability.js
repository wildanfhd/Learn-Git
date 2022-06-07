import { capital } from './coba.js';

const user = {
    firstName: 'Khim', // Typo
    lastName: 'Jisoo'
};

const createUserWithNewFirstName = (newFirstName, user) => {
    return {...user, firstName: newFirstName} // Destrukturisasi firstName menjadi newFirstName.
};

const createUserWithNewName = (newFirstName, newLastName) => {
    return {firstName: newFirstName, lastName: newLastName} // Mengubah nama tanpa destrukturisasi
};

const newUser = createUserWithNewFirstName('Kim', user);
const newBornUser = createUserWithNewName('Taylor', 'Swift');


console.log(newUser);
console.log(newBornUser);

// Mencoba object yang diimport
console.log(capital["Tokyo"]);

// Menambahkan properti baru pada object capital 
capital["Seoul"] = "Korea";
console.log(capital["Seoul"]);
