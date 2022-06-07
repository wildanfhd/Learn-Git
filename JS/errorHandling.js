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