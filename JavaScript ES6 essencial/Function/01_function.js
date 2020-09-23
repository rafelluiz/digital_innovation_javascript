function fn() {
  return'Code Here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
  //mais de uma expressão
  return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso Criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed){
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executara a função fn
handleFnExecution();

//ControlfnExec como função
function controlFnExecNotArrow(fnParam) {
  return function (allowed) {
    if (allowed){
      fnParam();
    }
  }
}
