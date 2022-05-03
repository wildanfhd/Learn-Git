function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

/* output
Halo, Obi Wan
 */

// ==================================================================================================

function otherInit() {
    var newName = "Jennie"; // Variabel lokal di dalam scope fungsi otherInit
    
    function otherGreet() {  // Inner function, yang merupakan contoh closure
        console.log(`Halo, ${newName}`); // Memanggil variabel yang dideklarasikan di parent function
    }
    
    otherGreet();
}

otherInit();

// ==================================================================================================
// Penerapan closure untuk sebuah counter
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };

}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());