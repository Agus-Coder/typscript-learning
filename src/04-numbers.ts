(()=>{

let productPrice = 100;
productPrice = 12;
console.log(productPrice);

let customerAge: number = 28;
customerAge = customerAge + 1;
console.log('custormer Age: ', customerAge);

let productInStock: number;
console.log('product in stock: ', productInStock); //warning in here!

//again, warning originated from a non initializated variable

if (productInStock>10) {
    console.log('enough!');
    
}

let discount = parseInt('123');

console.log('discount: ', discount);

let hex = 0xfff;
console.log('hex', hex);

let bin = 0b01011;
console.log('bin: ', bin);

//Cuidado con numbery Number, el primero es un tipo de datos mientras que el segundo es un objeto propio en JS.


})();