// Buscando el elemento perdido.

const elemento = 'Elemento9';
document.getElementById('buscado').innerText = elemento;

const { EMPTY, from, Subject, of } = rxjs;
const { expand, takeWhile } = rxjs.operators;

const fuente$ = of(document.getElementById('elementos'));

fuente$.pipe(expand(nodo => {
  if (nodo.innerHTML === elemento || nodo.innerText === elemento) {
    return of(true);
  }

  if (!nodo || !nodo.children || nodo.children.length === 0) {
    return EMPTY;
  }

  const arr = [];
  for (const hijo of nodo.children) {
    arr.push(hijo);
  }

  return from(arr);
}), takeWhile(valor => valor !== true, true)).subscribe(encontrado => {
  console.log(encontrado);
  document.getElementById('encontrado_span').innerText = 'No';
  if (encontrado === true) {
    document.getElementById('encontrado_span').innerText = 'Si';
  }
})