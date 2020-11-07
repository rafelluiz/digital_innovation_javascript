let arr = [];

let line = parseInt(gets());

//Criando array
for (let i = 0; i <= line; i++){
  let line = parseInt(gets());
  if (line){
    arr.push(line);
  }
}

// ordernar array
arr.sort((numberIni,numberNext)=>{
  return numberIni - numberNext;
});

const tamanhoArray = arr.length;
let fimArray = 0;

let indiceInicial = 0;
let indiceFinal = 0;

while (tamanhoArray != fimArray){
  indiceInicial = arr.indexOf(arr[indiceInicial]);
  indiceFinal = arr.lastIndexOf(arr[indiceInicial]);
  let numeroVerificado = arr[indiceInicial];
  let totalNumeros = (indiceFinal - indiceInicial) + 1;

  console.log(`${numeroVerificado} aparece ${totalNumeros} vez(es)`);


  fimArray = indiceFinal + 1;
  indiceInicial = fimArray;
}