function apresentar(nome){
    return `meu nome é ${nome}`
}


//  Arrow function
//ex:1
const exemploArrow = nome => `Meu nome é ${nome}`;
//ex:2
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha
const somaNum = (num1, num2) => {
    if (num1 || num2 >= 10){
        return "Somente numeros até 10"
    } else{
        return num1 + num2;
    }
} 

// Hoisting: arrow function se comporta como expressão

// operador de maior ou igual que
// >=