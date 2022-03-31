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
