const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbos são unicos
console.log('symbol1 é igual a symbol2', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Raton',
  [nameSymbol2]: 'Outro Nome',
  lastName: 'Mike'
}

console.log(user);