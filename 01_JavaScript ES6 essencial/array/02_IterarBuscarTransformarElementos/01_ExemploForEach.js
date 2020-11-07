//
const persons = Array.of("John", "Cris","Jenny");
persons.forEach((value,index,persons) => {
  console.log(`${index}: ${value} array: ${persons}`);
})

//map retorna um novo array do array.
const personsStatus = persons.map((value,index)=>
  `id:${index} nome:${value} status: Vivo`
);
console.log(personsStatus);

//Flat coloca itens de uma sub matriz no mesmo nivel .flat e o flatMap(usado parecido com o map0
const matrixLevelOne = [3,5,77,[34,343,7, 8 ,[99,77],88,9],56,44];
console.log(matrixLevelOne.flat(2));

//keys retornar um array iterator mostra so a chave
const personsIteratorKeys = persons.keys();
console.log(personsIteratorKeys.next());
console.log(personsIteratorKeys.next());
console.log(personsIteratorKeys.next());

//values retorna um array iterrtor
const personsIteratorValues = persons.values();
console.log(personsIteratorValues.next());
console.log(personsIteratorValues.next());
console.log(personsIteratorValues.next());

//Retorna chave valor de um array iterator
const perssonsIteratorKeyValue = persons.entries();
console.log(perssonsIteratorKeyValue.next());
console.log(perssonsIteratorKeyValue.next());
console.log(perssonsIteratorKeyValue.next());

//Find retorna o primeiro item do array
const firstName = persons.find(value => value == 'Cris');
console.log(firstName);

//Findindex retorna o indice do primeiro valor
const firstNameIndex = persons.findIndex(value => value == 'Cris');
console.log(firstNameIndex);

//Filter retorna todos elemento que satisfazem a solucao
const allNamesSix = persons.filter(value => value.length <= 4);
console.log(allNamesSix);

//Retorna o primerio index do item
const morePersons = persons.concat("Luzia","Monica","Monica","Suely","Monica");
console.log(morePersons);
const firstIndexItem = morePersons.indexOf("Monica");
console.log(firstIndexItem);

//Retorna o ultimo index do item
const lastIndexItem = morePersons.lastIndexOf("Monica");
console.log(lastIndexItem);

//Saber se existe um item no array
const hasItemOne = morePersons.includes("Suely");
console.log(hasItemOne);

//Saber se algum item satisfaz uma condicao
const hasSomeEvenNumber = matrixLevelOne.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

const hasSomeEvenName = morePersons.some(value => value === "Suely");
console.log(hasSomeEvenName);

const studentsGrade = [
  {name:"Rafael", grade:15},
  {name:"Monica", grade:8},
  {name:"Suely", grade:10}
];
const StudentMore = studentsGrade.some(studentsGrade => studentsGrade.grade > 8);

console.log(`Existe algum aluno com nota maior que 8? ${StudentMore}`);

//Para saber se todas condicoes satisfazem
const everyStudent = studentsGrade.every(studentsGrade => studentsGrade.grade >8);
console.log(`Todos passaram? ${everyStudent}`);

//Order array ordem crescente e decrescente
const orderArrayCrescent = studentsGrade.sort((current, next) =>
  current.grade - next.grade);

orderArrayCrescent.forEach((student,index) => {
  console.log(`Ordem crescente : nome: ${student.name}, nota: ${student.grade}`);
});

const orderArrayDecrescent = studentsGrade.sort((current, next) =>
  next.grade - current.grade);

orderArrayDecrescent.forEach((student,index) => {
  console.log(`Ordem Decrescente: nome: ${student.name}, nota: ${student.grade}`);
});

//Inverter um Array
console.log(morePersons);
console.log(morePersons.reverse());

//Juntar elementos de um array separado por um uma string delimitadora
console.log(morePersons.join('*'));

//Reduce um novo tipo de dado iterando cada posicao de um array
const totalMatrixLevelOne = matrixLevelOne.flat(2).reduce((total,value) => total +=value, 0);
console.log(matrixLevelOne.flat(2));
console.log(`Total soma matrix ${totalMatrixLevelOne}`);