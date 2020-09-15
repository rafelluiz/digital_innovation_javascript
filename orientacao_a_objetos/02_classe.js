'use strict'

class Animal {
  constructor(qtdePatas) {
    this.qtdePatas = 4;
  }
}

class Cachorro extends Animal{
  constructor(morde) {
    super();
    this.morde = morde;
  }
}

const pug = new Cachorro(false);

console.log(pug);
