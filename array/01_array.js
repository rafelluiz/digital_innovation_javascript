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