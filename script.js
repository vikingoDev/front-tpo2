/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/

// 1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav: <div class="nombreGrupo"></div>
const nombreGrupo = "Grupo 7";
console.log(nombreGrupo);

// 2. Crear un array de objetos a partir de las frutas de la carpeta img (o de los elementos que prefieran, temática libre)
const productos = [
    { id: 1, nombre: "Alicate", precio: 1000, img: "./img/alicate.jpg" },
    { id: 2, nombre: "Buscapolo", precio: 2000, img: "./img/buscapolo.jpg" },
    { id: 3, nombre: "Cable de red", precio: 3000, img: "./img/cablered.jpg" },
    { id: 4, nombre: "Crimpeadora", precio: 4000, img: "./img/crimpeadora.jpg" },
    { id: 5, nombre: "Cutter", precio: 5000, img: "./img/cutter2.jpg" },
    { id: 6, nombre: "Destornilladores", precio: 6000, img: "./img/destornilladores.jpg" },
    { id: 7, nombre: "Grampas", precio: 7000, img: "./img/grampas.jpg" },
    { id: 8, nombre: "Pelacables", precio: 8000, img: "./img/pelacables.jpg" },
    { id: 9, nombre: "Pinza", precio: 9000, img: "./img/pinza.jpg" },
    { id: 10, nombre: "Pinza de punta", precio: 10000, img: "./img/pinzapunta.jpg" },
    { id: 10, nombre: "Ponchadora", precio: 10000, img: "./img/ponchadora.jpg" },
    { id: 10, nombre: "Precintos", precio: 10000, img: "./img/precintos.jpg" },
    { id: 10, nombre: "Ficha RJ45", precio: 10000, img: "./img/rj45.jpg" },
    { id: 10, nombre: "Tester", precio: 10000, img: "./img/tester.jpg" },
    { id: 10, nombre: "Tester de red", precio: 10000, img: "./img/testerred.jpg" },
    { id: 10, nombre: "Probador de cables", precio: 10000, img: "./img/viru.jpg" },
];

// Carrito (inicializado desde localStorage si existe)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// 3. Imprimir esos objetos por pantalla, deberemos agregar esa funcion a la funcion inicializadora
const renderizarProductos = () => {
    const productosContainer = document.querySelector("#productos");
    productosContainer.innerHTML = productos
        .map(
            (producto) => `
      <div class="producto">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="add-to-cart" data-id="${producto.id}">Agregar al carrito</button>
      </div>
    `
        )
        .join("");
};

// 4. OPCIONAL 1 / Realizar una función filtro que mediante un evento como keyup recoja los datos del input y filtre los productos que contengan esos valores
const prodFilter = (evento) => {
    const filtro = evento.target.value.toLowerCase();
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(filtro)
    );

    const productosContainer = document.querySelector("#productos");
    productosContainer.innerHTML = productosFiltrados
        .map(
            (producto) => `
      <div class="producto">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="add-to-cart" data-id="${producto.id}">Agregar al carrito</button>
      </div>
    `
        )
        .join("");

    buttonEvent();
};

// 5. OPCIONAL 2 / Realizar la funcionalidad de carrito
// 6. OPCIONAL 3 / Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage
const addCarrito = (id) => {
    const producto = productos.find((p) => p.id === parseInt(id));
    if (producto) {
        const existente = carrito.find((item) => item.id === producto.id);
        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderCart();
    }
};

const deleteCarrito = (id) => {
    carrito = carrito.filter((item) => item.id !== parseInt(id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCart();
};

const cleanCart = () => {
    carrito = [];
    localStorage.removeItem("carrito");
    renderCart();
};

const renderCart = () => {
    const cartItems = document.querySelector("#cart-items");
    const totalContainer = document.querySelector("#total");

    if (carrito.length === 0) {
        cartItems.innerHTML = "<li>El carrito está vacío</li>";
        totalContainer.textContent = "Total: $0";
        return;
    }

    cartItems.innerHTML = carrito
        .map(
            (item) => `
      <li class="item-block">
        <p class="item-name">${item.nombre} (x${item.cantidad}) - $${item.precio * item.cantidad}</p>
        <button class="delete-button" data-id="${item.id}">Eliminar</button>
      </li>
    `
        )
        .join("");

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    totalContainer.textContent = `Total: $${total}`;

    deleteEvent();
};

// Eventos adicionales
const agregarEventos = () => {
    document.querySelector("#filtro").addEventListener("keyup", prodFilter);
    document.querySelector("#vaciar-carrito").addEventListener("click", cleanCart);
    document.querySelector("#finalizar-compra").addEventListener("click", endShopping);
    buttonEvent();
};

const buttonEvent = () => {
    document.querySelectorAll(".add-to-cart").forEach((button) =>
        button.addEventListener("click", (e) => addCarrito(e.target.dataset.id))
    );
};

const deleteEvent = () => {
    document.querySelectorAll(".delete-button").forEach((button) =>
        button.addEventListener("click", (e) => deleteCarrito(e.target.dataset.id))
    );
};

// Extra: "Finalizar compra" y limpiar el carrito
const endShopping = () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de finalizar.");
        return;
    }

    alert("¡Gracias por tu compra!");
    cleanCart();
};

// Acá irían las funciones de arranque de la aplicación. No se olviden de invocar esta app 
const init = () => {    
    document.querySelector(".nombreGrupo").textContent = nombreGrupo;

    renderizarProductos();
    renderCart();
    agregarEventos();
    
    document.getElementById("filtro").addEventListener("keyup", prodFilter);
    document.getElementById("vaciar-carrito").addEventListener("click", cleanCart);

    cargarCarrito();
};

// Inicializar todo al cargar la página
document.addEventListener("DOMContentLoaded", init);

