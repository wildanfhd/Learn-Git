// Try-catch
try {
    console.log("Tes Eror");
    console.log("Masih aman");
    errorGuys; // Penyebab eror, akan langsung masuk ke dalam blok catch
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}


// Try-catch-finally
try {
    console.log("Tes Eror lagi");
    console.log("Masih aman");
    console.log("Aman aman");
    ehError();
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Yak anda masuk ke blok finally : ");
    console.log("Blok Finally akan tetap dieksekusi walaupun error terjadi");
}


// Throwing Errors
// Steps : try -> if statement to throw Errors -> going to catch block
// let json = '{ "brand":"BMW", "type":"SUV"}';

let json = '{"type":"SUV"}'

try {
    let car = JSON.parse(json); // Mengkonversi json yang berbentuk string menjadi object

    // Throw Error
    if(!car.brand) {
        throw new SyntaxError("'brand' is required.");
    }

    console.log(car.brand); // undefined
    console.log(car.type); // SUV

} catch(error) {
    console.log(`JSON Error : ${error.message}`);
}

// Menampilkan pesan error sesuai error yang muncul
// Menggunakan instanceOf

let json2 = '{ "name": "Obi Wan", "age": 20 }';

try {
    let user = JSON.parse(json2);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Obi Wan
    console.log(user.age);  // 20
} catch (error) {
    if(error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if(error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}