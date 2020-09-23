//spread

const partes = ['ombro','joelhos'];
const musica = ['cabeca',...partes,'e','pes'];

function fn(x,y,z) {
  const arg= [0,1,2];
  console.log(x,y,z)
}
args = [4,5,6]

fn(...args);

console.log(musica);