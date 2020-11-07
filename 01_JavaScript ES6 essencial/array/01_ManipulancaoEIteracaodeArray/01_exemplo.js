const persons = Array.of("John", "Cris","Jenny");
console.log(persons);

//Cria um array com posicoes vazias
const arrWith3Positions = Array(3);
console.log(arrWith3Positions);

//Inserir no final do Array obs. retorna o tamanho do array modificado
const retornodoarrray = persons.push("Rafael");
console.log(`retorno do array ${persons}. tamanho novo do array: ${retornodoarrray}`);

//Remover o ultimo item do array
const removedItem = persons.pop();
console.log(`Item removido ${removedItem}. Novo array: ${persons}`);

//Inserir no inicio do Array. O retorno é o tamanho do array modificado
const unshiftLengthArray = persons.unshift("Luiz Primeiro");
console.log(`Novo array: ${persons} . tamanho array ${unshiftLengthArray}`);

//Remover no Início do array. Retorna o item removido
const itemRemovedArray = persons.shift();
console.log(`Novo array: ${persons}. Item removido ${itemRemovedArray}`);

//Concatenar arrays
const personsDies = ["Vô","Gordo","Tio do Dú"];
const newArrayConcat = persons.concat(personsDies);
console.log(`Pessoas mortas: ${personsDies}. Novo Grupo ${newArrayConcat}`);

//Fatiar Array. podemos usar slice para copiar um array simples. ex. arr.slice();
const sliceArrayExemple = newArrayConcat;
console.log(`Fatia o 4 item do array ate o 5. ${sliceArrayExemple.slice(2,4)}`);

const sliceArrayExemple01 = newArrayConcat;
console.log(`Fatia o array a partir do 3 item: ${sliceArrayExemple01.slice(2)}`);

const sliceArrayExemple02 = newArrayConcat;
console.log(`Fatia do final para o inicio, pegando o ultimo item: ${sliceArrayExemple02.slice(-4)}`);

//Remover itens de uma posicao especifica modifica o array

const removePosicionSpecific = newArrayConcat.slice();
removePosicionSpecific.splice(2,1);

console.log(`Remove uma posicao especifica: Array Original:${newArrayConcat}.\n array Modificado: ${removePosicionSpecific}`);

//Inserir em uma posicao especifica
const insertPositionSpecific = newArrayConcat.slice();
insertPositionSpecific.splice(2,0,'Terceira Posicao');
console.log(`Inserido na 3 posicao: ${insertPositionSpecific}`);

//Podemos remover e inserir ao mesmo tempo
const insertRemovePositionSpecific = insertPositionSpecific.slice();
insertRemovePositionSpecific.splice(2,1,'Suely','Monica');
console.log(`Removemos da 3 posicao e inserimos mais dois itens: ${insertRemovePositionSpecific}`)


