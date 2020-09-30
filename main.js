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
const botonCerrarCarrito = document.querySelector("#cerrar");
const asideCarrito = document.querySelector("#carrito");

clickCarrito.onclick = () => {
  asideCarrito.classList.remove("hidden");
};

botonCerrarCarrito.onclick = () => {
  asideCarrito.classList.add("hidden");
};

// LISTO CARRITO APARECE Y DESAPRECE CON ESPACIO

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
