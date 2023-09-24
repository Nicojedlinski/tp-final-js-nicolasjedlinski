let edad= 23
//edad=30
let nombre= " "

let ingreso
//let Bienvenido/a= prompt ("Welcome") 

//alert ("Bienvenido" + "  " + usuario)

//edad=prompt("que edad tienes ?")

//alert ("eres mayor de 18 ?")

//edad=prompt("si o no ?")

/*let usuario=prompt ("Ingresa tu Nombre");

if(usuario= " "){
    console.log("no ingresaste tu usuario");
}else{
    console.log("Bienvenido/a"  + usuario);
}

alert ("Bienvenido/a. Responda las siguientes consultas para poder enviarle la propuesta")

let legal= 18

let mail=prompt ("Ingresa un mail");

/*if(usuario= " "){
    console.log("no ingresaste tu usuario");
}else{
    console.log("Bienvenido/a"  + mail);
}

//if(legal <18){
    //console.log("sos menor.No podes adquirir los servicios.Consultalo con un mayor");
//}else{
    //console.log("sos mayor. Podes adquirir los servicios");
//}

let num = parseInt(prompt("ingresa tu edad"))
    let mayoredad=num >18;
    console.log(mayoredad);

    if(isNaN(num)){
    alert("el valor ingresado no es un numero")

    while (num != "num"){
        num= alert("el valor ingresado no es un numero")
    }
}

if(mayoredad <=18){
    console.log("sos mayor. Podes adquirir los servicio");
}else{
    console.log("sos menor.No podes adquirir los servicios.Consultalo con un mayor");
}

let si=prompt ("Deseas contratar los servicios");

if(si= "si"){
    console.log("Gracias por elegirnos" + usuario + "en breve se comunicaran con vos");
}

//alert ("Gracias Por tu respuesta, en breve se comunicaran con vos")


alert("Respondiste todo")
alert("Next")
alert("ya falta menos ...")

for(let i=0; i<1; i++){
    let pregunta=prompt("Respondio ?")
    if (respuesta ="no"){
        respuesta="Responda Nuevamente el cuestionario"
        alert(pregunta)
    }else{
        respuesta= "Pronto se le enviaran las opciones disponibles a su casilla de corre. puede ser enviado a su spam"
        alert(respuesta)
    }
}

let ingreso1= prompt('ingresa una opcion \n 1-volver al inicio \n 2- finalizar')

switch (ingreso1){
    case '1':
        alert('seleccionaste volver al inicio')
        break;
    case '2':
        alert('seleccionaste finalizar')
        break;

    default:
        break;
}

alert ("En breve se comunicaran con vos. Atte el equipo Nico's")

function saludar(){
    console.log("Hola Nico");
}

for(let i=0; i<1; i++);{
    saludar()
}
function saludopersonalizado(nombre){
    console.log("hola" + nombre);
}

saludopersonalizado ("nombre")
saludopersonalizado ("Pablo")
saludopersonalizado ("Julieta")
saludopersonalizado ("Roberto")

for (let i=0; i<1; i++){
    let ingreso1 = prompt ('ingresa tu usuario')

    saludopersonalizado(usuario)
}

const contacto= {
    nombre:"Pedro",
    apellido:"Perez",
    telefono:"1122425678",
}

console.table(contacto["nombre"]);
console.table(contacto["apellido"]);
console.table(contacto["telefono"]);

const contacto1= {
    nombre:"Lionel",
    apellido:"Messi",
    telefono:"1140506998",
    direccion:"Calle falsa 321",
}

console.table(contacto1);

contacto.direccion= 'av de los picantes 123'

console.log(contacto.direccion);

//Molde
function Contrato (formato, duracion, precio, stock){
this.formato = formato;
this.duracion = duracion;
this.precio = parseFloat(precio);
this.stock = stock;
//Metodo personalizado
this.vender = function(cant) {
    return this.precio * cant;
};
}

const Contrato1= new Contrato ("Pack 1", "doce meses", 3000, 3)

console.log(Contrato1);
console.log(Contrato1.formato);
console.log(Contrato1.duracion);
console.log(Contrato1.precio);
console.log(Contrato1.stock);

const Contrato2 = new Contrato ("Pack 2", "cinco meses", 1200, 1)
console.log(Contrato2);
console.log(Contrato2.formato);
console.log(Contrato2.duracion);
console.log(Contrato2.precio);
console.log(Contrato2.stock);

console.log("El total de la venta del contrato"+ Contrato1.formato+ "por dos unidades es : $"+ Contrato1.vender(2));


const mensaje= "Sr Nicolas"

console.log(mensaje.length);
console.log(mensaje.toLocaleUpperCase);
console.log(mensaje.toLocaleLowerCase);

console.log("formato" in Contrato1);
for (const key in Contrato1) {
    console.log(key);
}

//paquetes - uso de arrays
const paquetes=["basico","premium","gold","busines"];
console.log(paquetes);
console.log(paquetes.length);

for(const paquete of paquetes){
    console.log(paquete);
}

// funciones del orden suoerior 
function mayorQue (n) {
    return (m) => m > n
}

let mayorQueDiezyOcho = mayorQue(18) // 18 el valor de n

console.log(mayorQueDiezyOcho(18)); // true // 18 seria m
console.log(mayorQueDiezyOcho(5)); // false // 5 seria m

// asignando operador (op)
function asignarOperador(op) {
    if (op == "sumar"){
        return(a, b) => a + b
    }else if (op == "restar"){
        return (a, b) => a - b
    }else if (op == "multiplicar"){
        return (a, b) => a* b
    }
}

const suma = asignarOperador("sumar")
const restar = asignarOperador ("restar")
const multiplicar = asignarOperador ("multiplicar")

console.log(); // aplicar la funcion

const packElegir = [
    {
        id:1,
        nombre: "premium",
        precio: 4000,
        temas: 'ayuda, muestarior de proyecto y mas',
    },
    {
        id: 2,
        nombre: "gold",
        precio: 8900,
        temas: 'pack mas requerido donde se aborda y muestra todo',
    }
] 
packElegir.forEach((el)=>{
    console.log(el.precio);
})
packElegir.forEach((el)=>{
    console.log(el.nombre);
})

console.log("usted esta adquiriendo los siguientes productos");
packElegir.forEach((el) => {
    console.log(el.nombre + " - $" + el.precio)
})

/* Acceder a DOM  */
const titulo = document.getElementById("pack");
//console.log(titulo);

const tituloSec = document.getElementById("precio");

//console.log(tituloSec);

const paises = document.getElementsByClassName("pais");
//console.log(paises[0]);
/* console.log(paises[1]);
console.log(paises[2]);
console.log(paises[3]);
console.log(paises[4]);
console.log(paises[5]);
console.log(paises[6]); */

const div = document.getElementsByTagName("div");
//console.log(div);
const conten = document.getElementById("contenedor");
//console.log(conten);
//recorrer
for (const pais of paises) {
//console.log(pais.innerText);
}
paises[5].innerText = "GERMANY";

console.log(parrafo.innerText);
parrafo.remove();

console.log(personas);

personas.push("Gabriela", "Roxana");
for (const persona of personas) {
const li = document.createElement("li");

li.innerText = persona;
lista[1].appendChild(li);
}
//hacer con el array productos

let product = {
    id: 1,
    nombre: "gold",
    precio: 2000,
    };

let packElegir =
    "id: " +
    product.id +
    " Producto " +
    product.nombre +
    " Precio:$ " +
    product.precio;

let plantilla = `id: ${product.id} Producto: ${product.nombre} precio $ ${product.precio}`;//interpolación
    console.log(plantilla);
    console.log(packElegir);

const pack = [
    { id: 1, nombre: "pack premium", precio: 3000, },
    { id: 2, nombre: "pack gold", precio: 2000,  },
    { id: 3, nombre: "pack silver", precio: 1200, },
];


document.addEventListener("DOMContentLoaded", () => {
    const pack = document.querySelectorAll(".pack");
    const carrito = document.getElementById("carrito");

    productos.forEach((pack) => {
        const botonAgregar = pack.querySelector(".agregar");
        botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(pack);
        });
    });

    function agregarAlCarrito(pack) {
        const nombreProducto = pack.querySelector("h2").textContent;
        const precioProducto = parseFloat(producto.querySelector("p").textContent.replace("$", ""));
        
        const elementoCarrito = document.createElement("div");
        elementoCarrito.classList.add("item-carrito");
        elementoCarrito.innerHTML = `
            <p>${nombreProducto} - $${precioProducto.toFixed(2)}</p>
            <button class="eliminar">Eliminar</button>
        `;

        const botonEliminar = elementoCarrito.querySelector(".eliminar");
        botonEliminar.addEventListener("click", () => {
            elementoCarrito.remove();
        });

        carrito.appendChild(elementoCarrito);
    }
});

document.title = "Carrito";
const titulo1 = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Carrito";
tituloSecundario.innerText = "Asincronía y promesas";
const servicios = [
  { id: 1, nombre: "pack basic", precio: 1000, img: "" },
  { id: 2, nombre: "pack premium", precio: 2000, img: "" },
  { id: 3, nombre: "pack gold", precio: 3000, img: "" },
  {
    id: 1,
    nombre: "basic",
    precio: 1000,
  },
  {
    id: 2,
    nombre: "premium",
    precio: 2000,
  },
];

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem' 
          },
        onClick: function(){}
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}