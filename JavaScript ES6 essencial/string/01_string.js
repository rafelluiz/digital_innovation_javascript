// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna uma array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`);

//Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text','Texto');
console.log(`\nSubstituição de valor: ${replaceText}`);

//Retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log(`\nUltima letra de uma string: ${lastChar}`);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log(`\nValor da string da primeira letra menos a ultima: ${allWithoutLastChar}`);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra ate ultima: ${secondToEnd}`);

// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log(`\nAs duas letras primeiras lestras são: ${twoCharsBeforeFirstPos}`);
