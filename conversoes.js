// tipo de dado
// booleans

// conversão implícita
const numero = 456;
const numeroString = "456";
//or const numeroString = Number("456");

console.log(numero === numeroString)

console.log(numero + numeroString)

// conversão explícita

//Number()
console.log(numero + Number(numeroString))
//String()
console.log(String(numero) + numeroString)
//NaN
const num = Number("123a")
console.log(num)
