// ACA ESTA DIVINAMENTE HECHO EL BOTON LIMPIAR

const limpiar = document.querySelector("#limpiar");
const filtroRaiting = document.getElementsByClassName("check");
const busqueda = document.querySelector("#busqueda");
const numeroQueMuestra = document.querySelector(".nro-mostrado");
const totalNumerosMostrados = document.querySelector(".total-nros");

limpiar.onclick = () => {
  busqueda.value = "";
  for (let checkbox of filtroRaiting) {
    checkbox.checked = false;
  }
};

// ACA TERMINA EL BELLO BOTON LIMPIAR

//empieza ocultar carrito//
const clickCarrito = document.querySelector("#ocultar-carrito");
const overlay = document.querySelector("#carrito");

clickCarrito.onclick = () => {
  overlay.classList.remove("ocultar");
};

window.onkeypress = (e) => {
  if (e.keyCode === 32) {
    overlay.classList.add("ocultar");
  }
};
// LISTO CARRITO APARECE Y DESAPRECE CON ESPACIO
