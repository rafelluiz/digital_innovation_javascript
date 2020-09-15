'use strict';

class Person {
  #name = '';

  constructor(initialName) {
    this.#name = initialName;
  }

  setName(name) {
    this.#name = name;
  }

  getName(){
    return this.#name;
  }
}
const p = new  Person('Andre');
console.log(p)

console.log(p.getName());

console.log(p.name);

p.setName('Rafael')
console.log(p.getName());
