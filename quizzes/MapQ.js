const priceInJPY = 5000;


let currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
]);

// Mengkonversi mata uang jepang ke indonesia
const priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);
