let user = {
  name: 'Raton'
};
console.log(`Tipo user: ${typeof (user)}`);

console.log(user);

//Alterando a propriedade de um objeto
user.name = 'Outro Nome 1';
user['name'] = 'Outro nome 2';

console.log(user);

const prop = 'name';
user[prop] = 'outro nome 3';

// Criando uma propiedade
user.lastName = 'Tongas';

console.log(user);

//Deletando uma propriedade
delete user.name;

console.log(user);