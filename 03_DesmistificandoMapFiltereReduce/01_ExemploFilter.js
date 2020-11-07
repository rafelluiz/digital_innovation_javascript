const pets = [
  {
    name:'rex',
    type:'dog',
    age: 10,
  },
  {
    name:'miau',
    type:'cat',
    age: 20,
  },
  {
    name:'gulp',
    type:'fish',
    age: 3,
  }
]

const newPets = pets.filter((pet) => {
  return pet.age <10;
})

console.log(pets);
console.log(newPets);