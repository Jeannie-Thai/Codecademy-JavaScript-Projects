// convert kelvin to fahrenheit
const kelvin = 293; //forecast today
const celsius = kelvin - 273; //convert to celsius
let fahrenheit = celsius * (9 / 5) + 32; //calculate fahrenheit
fahrenheit = Math.floor(fahrenheit); //round down to obtain whole number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
