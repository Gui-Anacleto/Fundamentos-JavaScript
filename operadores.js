// == (comparação implicita)

const numero = 5;
const texto = "5";

console.log(numero === texto)

//typeof
console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor 
// === compara o valor e o ti´po de dado

//conversaõ explicita

Number()
String()

/*
||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false. */

//Operador ternário (comparação em apenas uma linha)

const idadeMin = 18;
const idadeCli = 16;

if (idadeCli >= idadeMin){
    console.log('Cerveja')
}else{
    console.log('Suco')
}


console.log(idadeCli >= idadeMin ? "Cerveja" : "Suco")