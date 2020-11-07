//lazy evaluation
const randomNumber =  () => {
  return Math.random() * 10;
}

//Atribuir valor padrao a parametros de uma funcao
// o b vai receber 1 como parametro caso nao seja passado nenhum
const multiply = (a = 2, b = 1) => {
  return a * b;
}

console.log(multiply(5));
console.log(multiply());
console.log(multiply(5,3));

//usando uma funcao como default

const sum = (a,b = randomNumber()) => {
  return a + b;
}
console.log(sum(2,4))
console.log(sum(2,));


// podemos tambem usar como parametro default sempre a variavel antecessora

const division = (a,b = a) => {
  return a / b;
}

console.log(division(0));
console.log(division(2,5));
