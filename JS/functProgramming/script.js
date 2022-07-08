const name = 'Dicoding';
const language = 'JavaScript';

// console.log(`Hello ${name}. Welcome to ${language}!`);


// Object pada javascript

const mobil = {
    type: "Supercar",
    brand: "Porsche",
    price: 1000000
};

// console.log(mobil.type);
// mobil.type = "Offroad";
// console.log(mobil);

// Array pada JS
const myArray = ["Cokelat", 32, 5.5, true];

// console.log(myArray[0]);
// myArray.push("Keju");

// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// myArray.shift();
// myArray.unshift("Coklat Keju");
// console.log(myArray);

// myArray.splice(1, 1);
// console.log(myArray);


// Spread operator untuk menggabungkan 2 array atau object
const myHeroes = ["Avengers", "X-Men", "Batman", "Daredevil"];
const anotherHeroes = ["Spiderman", "Dr Stranger", "Hawkeye"];

    // Menggabungkan 2 array dengan spread operator
const heroes = [...myHeroes, ...anotherHeroes];

console.log(heroes);

const obj1 = {firstName: 'ningning', age: 20};
const obj2 = {lastName: 'yizhou', gender: 'F'};
    
    // Menggabungkan 2 object dengan spread operator
const newObj = {...obj1, ...obj2};

console.log(newObj);

// Destructuring object
const profile = {
    firstName: "Jennie",
    lastName: "Kim",
    age: 26
};

const {firstName, lastName, age} = profile;

console.log("Destructuring Object");
console.log(firstName);
console.log(lastName);
console.log(age);
    
    // Destructuring Assignment
    // const myProfile = {
    //     firstName: "Hwang",
    //     lastName: "Yeji",
    //     age: 24
    // };

    // let firstName = "Yuna"; 
    // let age = 23;

// Default Values
const myProfile = {
        namaDepan: "Hwang",
        namaBelakang: "Yeji",
        umur: 24
};


// const {namaDepan, umur, isFemale} = myProfile;
    // Jika sebuah nilai yang tidak ada di dalam object tidak diberikan nilai, maka nilai defaultnya akan menjadi undefined
    // console.log(isFemale); Output : undefined
const {namaDepan, umur, isFemale = true} = myProfile;

console.log("Output dari object myProfile");
console.log(namaDepan);
console.log(umur);
console.log(isFemale);

// Assigning to a different local variable
const car = {
    name: "BMW E100",
    type: "Sedan",
    speed: 120
}

const {name: localName, type:localType, speed: localSpeed} = car;

console.log("Output dari Assigning to a different local variable");
console.log(`Mobil ${localName} dengan type ${localType} berkecepatan ${localSpeed} km/jam`);


// Destructuring Array using spread operator
const favorites = ["Chocolate Cheese", "Cheese", "Chocolate", "Vanila"];

const [firstFood, secondFood, , fourthFood] = favorites;

console.log("Desctructuring Array");
console.log(firstFood);
console.log(secondFood);
console.log(fourthFood);

// Destructuring nilai tertentu dengan menggunakan koma untuk menunjukkan posisi indexnya
const [, , thirdFood] = favorites;

console.log(thirdFood);

// Destructuring Assignment ARRAY
const favoritos = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favoritos;

console.log("Destructuring assignment array");
console.log(myFood);
console.log(herFood);

// Menukar nilai dengan destructuring assignment
let a = 1;
let b = 2;

console.log("Menukar dua nilai dengan Destructuring assignment");
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a]

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);


//Default values - ARRAY
const shipment = ["JNT"];

// const [shipmentOne, shipmentTwo] = shipment;
// console.log(shipmentOne);
// console.log(shipmentTwo); // Undefined

const [shipmentOne, shipmentTwo = "SiCepat"] = shipment;
console.log(shipmentOne, shipmentTwo);

// MAP - [key, value]
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Seoul", "Korea"]
]);

console.log("Output dari Map capital");
console.log(capital.size); // 3
console.log(capital.get("Seoul")); // Mengambil salah satu value dengan memanggil keynya dengan method get()
capital.set("Tokyo", "Japan");
console.log(capital.size);
console.log(capital.get("Tokyo"));


// SET
const mySet = new Set([1, 5, 7, 9, 11]);

console.log("Output dari Set mySet");
console.log(mySet);
mySet.add(10);
mySet.add(3);
mySet.delete(7);
console.log(mySet);