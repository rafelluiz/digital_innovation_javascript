let user = {
  name: 'Raton',
  lastName: 'Doidon'
};

//Recupera as chaves do objeto
console.log(`Propriedades do objeto user: ${Object.keys(user)}`);

//Recupera os valores das chaves do obejeto
console.log(`Valores das propriedades do objeto user: ${Object.values(user)}`)

//Retorna um array de arrays contanto [nome_prop , valor_prop]
console.log(`Lista de Propriedades e valores ${Object.entries(user)}`)

// mergear propriedades do objetos
Object.assign(user,{fullName: 'Raton Doidon'});

console.log(`Adiciona a propriedade fullName no objeto user ${user}`);
console.log(`Retorna um novo objeto mergeando dois ou mais objetos${Object.assign({},user,{age:40})}`);

// Previne todas as alterações em um objeto
const newObj = {foo:'bar'};

console.log(`Variavel newObj original:${newObj}`,newObj)

Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log(`Variavel newObj apos as alterações:${newObj}`,newObj)

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name:'Guilherme'};
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('Variavel person apos as alteraçoes: ',person);

person.name = 'Toinnn';

console.log('Trocando a propriedade ja criada: ',person);