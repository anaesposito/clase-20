// // ACA ESTA DIVINAMENTE HECHO EL BOTON LIMPIAR

const limpiar = document.querySelector("#limpiar");
const filtroRaiting = document.getElementsByClassName("check");
const filtroNombre = document.querySelector("#busqueda");
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
const botonCerrarCarrito = document.querySelector("#cerrar");

clickCarrito.onclick = () => {
  overlay.classList.remove("ocultar");
};

botonCerrarCarrito.onclick = () => {
  overlay.classList.add("ocultar");
};

// LISTO CARRITO APARECE Y DESAPRECE CON ESPACIO

// LISTO FILTRO DE BUSQUEDA
const tarjetas = document.getElementsByClassName("tarjeta");
const filtroRating = document.getElementsByClassName("review-filter");

busqueda.oninput = () => {
  for (let tarjeta of tarjetas) {
    let titulo = tarjeta.dataset.nombre;
    let consulta = busqueda.value;
    console.log(titulo);

    if (titulo.includes(consulta)) {
      tarjeta.classList.remove("ocultar");
    } else {
      tarjeta.classList.add("ocultar");
    }
    if (busqueda.value == "") {
      tarjeta.classList.remove("ocultar");
    }
  }
};
