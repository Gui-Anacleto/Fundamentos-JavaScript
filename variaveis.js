//var  -> var é carregada primeiro, independente de onde esta(baixo ou em cima). Muito Solta

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)
var area;

//let  -> vai de cima pra baixo, ao invés do var. Solta - mode se mudar o valor

let forma = 'retangulo'
let altura1 = 5;
let comprimento1 = 7;
let area1

if (forma === 'retangulo'){
    area1 = altura1 * comprimento1;
} else{
    area1 = (altura1 * comprimento1)/2;
}

console.log(area1)

//const -> um tipo de variavel que não pode mudar de valor.

const forma1 = 'quadrado'
const altura2 = 5;
const comprimento2 = 7;
let area2

if (forma1 === 'quadrado'){
    area2 = altura2 * comprimento2;
} else{
    area2 = (altura2 * comprimento2)/2;
}

console.log(area2)

//Utilizar Let ou Const - maioria das vezes utilizar const (mais segurança).





