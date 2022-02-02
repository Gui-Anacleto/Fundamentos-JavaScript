const texto1 = "Hello World !";
const texto2 = 'Hello Friend !';
const senha = "TEXTO Random"
const strnumber = "0123456789"

const citacao1 = 'O coringa disse "Why so Serius"';
const citacao2 = "O coringa disse 'Why so Serius'";
console.log(citacao1+'\n'+citacao2)

//template string OU template literal

//concatenação (+)
const nome = 'Guilherme';
const frasenome = "Meu nome é ";

const frase_nome = "Meu nome é "+nome;

console.log(frase_nome)
//or
console.log(frasenome + nome)

//decifrar ASCII
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//comparar(===)
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//---usar toLowerCase - deixar tudo em minusculo
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true

//contar letras (lenght)

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres

//tipos
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

/*
camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.
kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario.
PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.
*/