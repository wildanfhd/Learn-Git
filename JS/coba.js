// TODO
class Animal{
	constructor(name, age, isMammal){
    	this.name = name,
        this.age = age,
        this.isMammal = isMammal
    };
}

class Rabbit extends Animal {
	eat(){
    	return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
	fly() {
    	return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit("Labi", 2, true);
console.log(myRabbit);
console.log(myRabbit.eat())

const myEagle = new Eagle("Elo", 4, false);
console.log(myEagle);
console.log(myEagle.fly())

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);



const capital = {
	"Jakarta" : "Indonesia", 
	"London": "England",
	"Tokyo": "Japan"
}

capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);


// function minMax(arrayOfNumbers) {
//     let currentMin = arrayOfNumbers[0];
//     let currentMax = arrayOfNumbers[0];
//     for (value of arrayOfNumbers) {
//         if (value < currentMin) {
//             currentMin = value;
//         } else if (value > currentMax) {
//             currentMax = value;
//         }
//     }

//     console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

export { capital };