/* function exemploFunction(parametro){
    //bloco de código
}

exemploFunction("Devolver o parametro")

 */
//------------------------
console.log(apresentar())//-> chamando a funcão antes, funciona

function apresentar(){
    return "exemplo"
}
//------------------------
//expressão de funcão - 
console.log(soma(10, 5))//-> nesse caso vai dar erro 
const soma = function(num1, num2){return num1 + num2}// -> vai se comportar como variavel.
