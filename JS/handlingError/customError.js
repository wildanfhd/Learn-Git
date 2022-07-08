// Membuat Custom Error dengan class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"; // this.name mengambil referensi dari properti error.name
    }
}

let json = '{"name":"Call of Duty : Black OPS II"}';

try {
    let newGame = JSON.parse(json);

    if(!newGame.name) {
        throw new ValidationError("The Game must have a 'name'!");
    }

    if(!newGame.type) {
        throw new ValidationError("The Game must have the 'type' of game!");
    }

    console.log(newGame.game);
    console.log(newGame.type);
} catch (error) {
    if(error instanceof SyntaxError) {
        console.log(`JSON Error : ${error.message}`);
    } else if(error instanceof ValidationError) {
        console.log(`Invalid data : ${error.message} `);
    } else if(error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}