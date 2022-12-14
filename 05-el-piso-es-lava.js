
function generarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

function generarRocas() {

  var fragmento = new DocumentFragment();

  for (let i = 0; i <= 50; i++) {
      const elemento = document.createElement('div');
      elemento.style.position = 'absolute';
      elemento.style.width = `${generarNumeroAleatorio(70)}px`;
      elemento.style.height = `${generarNumeroAleatorio(70)}px`;
      elemento.style.top = `${generarNumeroAleatorio(window.innerHeight)}px`;
      elemento.style.left = `${generarNumeroAleatorio(window.innerWidth)}px`;
      elemento.style.borderRadius = '10px';
      elemento.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      fragmento.appendChild(elemento);
  }

  document.getElementById('scenario').appendChild(fragmento);
}

generarRocas();

// Determinar si el puntero se encuentra encima del fondo de la pantalla 
// o si esta tocando algún elemento en la página.

const span_a_salvo_o_quemado = document.getElementById('span_a_salvo_o_quemado');

//const { fromEvent } = rxjs;
//const { map } = rxjs.operators;

fromEvent(document, 'mousemove').pipe(map(evento => {
  const x = evento.clientX;
  const y = evento.clientY;
  const el = document.elementFromPoint(x, y);
  if (el.tagName == 'BODY' || el.tagName == 'HTML') {
      return 'El puntero se está quemando!';
  } else {
      return 'El puntero está a salvo!';
  }
})).subscribe(respuesta => span_a_salvo_o_quemado.innerText = respuesta);