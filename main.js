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
const clickCarrito = document.querySelector("#click-carrito");
const botonCerrarCarrito = document.querySelector("#cerrar-carrito");
const asideCarrito = document.querySelector("#carrito");
console.log(botonCerrarCarrito);

clickCarrito.onclick = () => {
  asideCarrito.classList.remove("hidden");
};

botonCerrarCarrito.onclick = () => {
  asideCarrito.classList.add("hidden");
};

//empieza vaciar carrito aside

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

// inicia Vista Grilla//
const tarjetasProducto = document.querySelectorAll(".tarjeta");
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
  for (tarjeta of tarjetasProducto) {
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
  for (tarjeta of tarjetasProducto) {
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
// finaliza vista grilla vista lista//

// LISTO FILTRO DE BUSQUEDA
const tarjetas = document.getElementsByClassName("tarjeta");
const filtroRating = document.getElementsByClassName("check");

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

// ACA EMPIEZA BOTON PARA CHECKOUT OVERLAY
const botonComprarCarrito = document.querySelector(".boton-comprar-carrito");
const carritoCheckout = document.querySelector(".checkout");
const botonSeguirComprandoCheckout = document.querySelector(
  "#seguir-comprando-checkout"
);
const botonFinalizarCompraCheckout = document.querySelector(
  "#finalizar-compra-checkout"
);

botonComprarCarrito.onclick = () => {
  carritoCheckout.classList.remove("ocultar-checkout");
};

botonFinalizarCompraCheckout.onclick = () => {
  carritoCheckout.classList.add("ocultar-checkout");
};

botonSeguirComprandoCheckout.onclick = () => {
  carritoCheckout.classList.add("ocultar-checkout");
};

//Inicio filtro Checkbox
for (let checkbox of filtroRating) {
  // si le hacen clic a uno de los checkbox
  checkbox.onclick = () => {
    // recorro una a una las tarjetas
    for (let tarjeta of tarjetas) {
      // si el checkbox esta seleccionado
      if (checkbox.checked) {
        const rating = tarjeta.dataset.rating;
        // me fijo si el valor del checkbox es igual al rating de la tarjeta
        if (checkbox.value === rating) {
          console.log(checkbox.value);
          tarjeta.classList.remove("ocultar");
        } else {
          tarjeta.classList.add("ocultar");
        }
        // si el checkbox NO esta seleccionado...
      } else {
        tarjeta.classList.remove("ocultar");
      }
    }
  };
}
