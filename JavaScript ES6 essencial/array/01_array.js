const users = ['Manel','Rafael','Tamara'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Manel',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Rafael',
    age: 36,
    gender: gender.MAN
  },
  {
    name: 'Tamara',
    age: 25,
    gender: gender.WOMAN
  }
];

// Retorna a quantidade de itens de um array
console.log('Items: ',persons.length);

// Verificar se é array
console.log('A varivel persons é um array: ',Array.isArray(persons));

// Iterar os itens do arrau
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
})

// Filtar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova lista apenas com homens:',mens);

//Retorna um novo
const personsWithCourse = persons.map(person => {
  if (person.gender === gender.MAN){
    person.course = 'Introdução ao JavaScript';
  } else {
    person.course = 'Introdução ao Python';
  }
  return person;
});

console.log('Pessoas com a adição do course',personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age,person) => {
  age += person.age;
  return age;
},0);

console.log('Soma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
  .filter(persons => persons.age % 2 === 0)
  .reduce((age,person) => {
    age += person.age;
    return age;
  },0);

console.log('Soma de idades das pessoas que possuem idade par', totalEvenAges);