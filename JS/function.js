// Function tanpa parameter
function printHello () {
    console.log("Hello");
}

printHello();



// Parameter Function
function addValue (value1, value2) {
    return value1 + value2;
}

console.log(addValue(10, 30));

function greetings (name, language) {
    if(language === "English"){
        return `Good Morning ${name}`;
    } else if(language === "Korea"){
        return `Annyeonghaseyo ${name}!`;
    } else if(language === "French") {
        return `Bonjour ${name}`;
    } else {
        return `Selamat pagi ${name}`;
    }
}

// Pakai console.log() untuk function yang mengembalikan nilai (return)
// Sementara jika tidak mengembalikan nilai, kita tidak perlu memakai console.log() 
let kor = greetings("Jamal", "Korea");
console.log(kor);


// Expression Function
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting("Jennie", "French"));


// Default Parameter - Pemberian nilai pada parameter secara langsung
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);


// Rest Parameter - Dipakai pada saat kita ingin membuat function yang parameternya tidak menentu
function jumlah(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(jumlah(3, 4, 5, 6));


// Arrow Function - Hanya bisa menggunakan expression function
const sayHello = (halo) => {
    console.log(`${halo}`);
}

sayHello("YA!");