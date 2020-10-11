// ----------------------------------------------------------Inicio Filtros ------------------------------------------//

//...........Inicio Boton Limpiar Filtros...................//
const limpiar = document.querySelector("#limpiar");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const filtroNombre = document.querySelector("#busqueda");
const numeroQueMuestra = document.querySelector(".nro-mostrado");
const totalNumerosMostrados = document.querySelector(".total-nros");

limpiar.onclick = () => {
  busqueda.value = "";
  for (let checkbox of checkboxes) {
    checkbox.checked = false;
  }
};
//..............Fin Boton Limpiar Filtros...................//

//.................Inicio Filtro Busqueda...................//
const tarjetas = document.querySelectorAll(".tarjeta");

busqueda.oninput = () => {
  for (let tarjeta of tarjetas) {
    let titulo = tarjeta.dataset.nombre;
    let consulta = busqueda.value;

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
//....................Fin Filtro Busqueda...................//

//.................Inicio Filtro Categoria..................//

const checkboxesCategoria = document.querySelectorAll(
  ".check-filtro-categoria"
);

for (let checkboxCategoria of checkboxesCategoria) {
  checkboxCategoria.onclick = () => {
    filtrarPorCheckboxesCategoria();
  };
}

const filtrarPorCheckboxesCategoria = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add("ocultar");
    if (checkboxSeleccionadoCategoria()) {
      if (coincideCategoria(tarjeta)) {
        tarjeta.classList.remove("ocultar");
      }
    } else {
      tarjeta.classList.remove("ocultar");
    }
  }
};
const checkboxSeleccionadoCategoria = () => {
  for (let checkboxCategoria of checkboxesCategoria) {
    if (checkboxCategoria.checked) {
      return true;
    }
  }
};

const coincideCategoria = (tarjeta) => {
  const categoria = tarjeta.dataset.categoria;
  for (let checkboxCategoria of checkboxesCategoria) {
    if (checkboxCategoria.name === categoria && checkboxCategoria.checked) {
      return true;
    }
  }
};

//.................Fin Filtro Categoria.....................//

//.................Inicio Filtro Puntaje..................//
const checkboxesPuntaje = document.querySelectorAll(".check-filtro-puntaje");

for (let checkbox of checkboxesPuntaje) {
  checkbox.onclick = () => {
    filtrarPorCheckboxesPuntaje();
  };
}

const filtrarPorCheckboxesPuntaje = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add("ocultar");
    if (checkboxSeleccionadoPuntaje()) {
      if (coincidePuntaje(tarjeta)) {
        tarjeta.classList.remove("ocultar");
      }
    } else {
      tarjeta.classList.remove("ocultar");
    }
  }
};
const checkboxSeleccionadoPuntaje = () => {
  for (let checkbox of checkboxesPuntaje) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidePuntaje = (tarjeta) => {
  const rating = tarjeta.dataset.rating;
  for (let checkbox of checkboxesPuntaje) {
    if (checkbox.value === rating && checkbox.checked) {
      return true;
    }
  }
};

//.................Fin Filtro checkboxes.....................//

//..............Inicia Ver Como............................//

const descripcionProducto = document.querySelectorAll(
  "#descripcion-producto-vista-lista"
);
const especificacionesProducto = document.querySelectorAll(
  ".div-especificaciones"
);
const botonVistaLista = document.querySelector("#vista-lista");
const botonVistaGrilla = document.querySelector("#vista-grilla");
const imagenesProductos = document.querySelectorAll(".producto");

botonVistaLista.onclick = () => {
  for (tarjeta of tarjetas) {
    tarjeta.classList.remove("tarjeta");
    tarjeta.classList.add("ajustes-tarjeta");
  }
  for (parrafo of descripcionProducto) {
    parrafo.classList.remove("vista-normal");
  }
  for (especificaciones of especificacionesProducto) {
    especificaciones.classList.add("ajustes-especificaciones");
  }
  for (imagen of imagenesProductos) {
    imagen.classList.remove("producto");
    imagen.classList.add("ajustes-imagen");
  }
};

botonVistaGrilla.onclick = () => {
  for (tarjeta of tarjetas) {
    tarjeta.classList.add("tarjeta");
    tarjeta.classList.remove("ajustes-tarjeta");
  }
  for (parrafo of descripcionProducto) {
    parrafo.classList.add("vista-normal");
  }
  for (especificaciones of especificacionesProducto) {
    especificaciones.classList.remove("ajustes-especificaciones");
  }
  for (imagen of imagenesProductos) {
    imagen.classList.add("producto");
    imagen.classList.remove("ajustes-imagen");
  }
};
//..................Fin Ver Como............................//

// ------------------------------------------------------Inicio Carrito Aside ----------------------------------------//

//...............Inicio Ocultar Carrito Aside...............//

const clickCarrito = document.querySelector("#click-carrito");
const botonCerrarCarrito = document.querySelector("#cerrar-carrito");
const asideCarrito = document.querySelector("#carrito");
const overlay = document.querySelector(".overlay");

clickCarrito.onclick = () => {
  asideCarrito.classList.remove("hidden");
  overlay.classList.remove("ocultar");
};

botonCerrarCarrito.onclick = () => {
  asideCarrito.classList.add("hidden");
  overlay.classList.add("ocultar");
};

//..................Fin Ocultar Carrito Aside...............//

//..................Inicio Vaciar Carrito Aside.............//

const vaciarCarrito = document.querySelector("#vaciar-carrito");
const cancelarVaciarCarrito = document.querySelector(
  ".boton-cancelar-vaciar-carrito"
);
const vaciarCarritoSection = document.querySelector(".vaciar-carrito-section");
console.log(vaciarCarrito);
console.log(cancelarVaciarCarrito);
console.log(vaciarCarritoSection);

vaciarCarrito.onclick = () => {
  vaciarCarritoSection.classList.remove("hidden");
};
cancelarVaciarCarrito.onclick = () => {
  vaciarCarritoSection.classList.add("hidden");
};
// termina aca vaciar carrito aside SIN BORRAR PRODUCTOS
//.....................Fin Vaciar Carrito Aside.............//

//.................Inicio Carrito Checkout Display..........//
const botonComprarCarrito = document.querySelector(".boton-comprar-carrito");
const carritoCheckout = document.querySelector(".checkout");
const botonSeguirComprandoCheckout = document.querySelector(
  "#seguir-comprando-checkout"
);
const botonFinalizarCompraCheckout = document.querySelector(
  "#finalizar-compra-checkout"
);

botonComprarCarrito.onclick = () => {
  overlay.classList.add("overlay-aumentado");
  carritoCheckout.classList.remove("ocultar-checkout");
};

botonFinalizarCompraCheckout.onclick = () => {
  carritoCheckout.classList.add("ocultar-checkout");
  asideCarrito.classList.add("hidden");
  overlay.classList.add("ocultar");
};

botonSeguirComprandoCheckout.onclick = () => {
  carritoCheckout.classList.add("ocultar-checkout");
  overlay.classList.remove("overlay-aumentado");
};
