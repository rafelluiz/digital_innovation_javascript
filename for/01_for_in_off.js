let arr = [5,5,6,8];
arr.foo = "hello";

objeto = {}


objeto[0]={nome:'rafel',idade:23};
objeto[1]={nome:'suely',idade:21};
objeto[2]={nome:'mion',idade:20};


console.log(objeto);

for (let i in arr){
  console.log(i);
}

for (let i of arr.foo){
  console.log(i);
}

for (let i in objeto){
  console.log(objeto[i].nome)
}