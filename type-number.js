// tipo Number

const Numero1 = 3;
const Numero2 = 2;

const soma = Numero1+Numero2
const mult = Numero1*Numero2
const div = Numero1/Numero2
const sub = Numero1-Numero2

console.log('\n Soma: '+soma+'\n','Subtração: '+sub+'\n','Multiplicação: '+mult+'\n','Divisão: '+div)

// ponto flutuante

const Numero3 = 3;
const Numero4 = 0.5;

const div_ponto = Numero3*Numero4
console.log(div_ponto)

// NaN (Not a Number) 

const Numero5= 'a';
const Numero6 = 0.5;

const nan = Numero5*Numero6
console.log(nan)
//or
var a = 0
var b = 0
console.log(a/b) // NaN

var c = 10
var d = 0
console.log(c/d) // Infinity