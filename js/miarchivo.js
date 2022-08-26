class Producto {
    constructor(nombre, contenidoNeto, precio, stock) {
        this.nombre = nombre
        this.contenidoNeto = contenidoNeto
        this.precio = precio
        this.stock = stock
    }
    contendioNeto() {
        let contenidoNeto = this.contenidoNeto
        return contenidoNeto + "ml"


    }
    precioConIVA() {
        let precioFinal = this.precio * IVA
        return "$ " + precioFinal
    }
    restarStock(unidades) {
        this.stock = this.stock - unidades
    }
}

const prod1 = new Producto("cerveza blonde ale", 500, 120, 200)
const prod2 = new Producto("cerveza ipa", 500, 150, 400)
const prod3 = new Producto("cerveza blonde ale maracuya", 500, 130, 300)
const prod4 = new Producto("barril blonde ale", 30000, 3000, 20)
const prod5 = new Producto("barril ipa", 30000, 3500, 20)
const prod6 = new Producto("barril blonde ale maracuya", 3250, 3000, 30)


const IVA = 1.22


function nuevoProducto() {
    nombre = document.getElementById("nombre").value
    contenidoNeto = document.getElementById("contenido neto").value
    precio = document.getElementById("precio").value
    stock = document.getElementById("stock").value
    guardarDatos()
    recuperarDatos()
    alert("👍Producto guardado")

}

const productos = []





function generadorAutomatico() {
    productos.push(prod1)
    productos.push(prod2)
    productos.push(prod3)
    productos.push(prod4)
    productos.push(prod5)
    productos.push(prod6)
    productos.push(new Producto("cerveza amber ale", 500, 130, 200))
    productos.push(new Producto("barril amber ale", 30000, 3200, 20))

}

generadorAutomatico()



function buscarProducto() {

        prod = document.getElementById("Buscar Productos").value
    const resultado = productos.find(producto => producto.nombre === prod.toLowerCase())
   document.getElementById("productoEncontrado").innerHTML = resultado.nombre + " " + resultado.contenidoNeto + " " + resultado.precio + " " + resultado.stock

}






function cargarProductos() {

    const cuerpo = document.getElementById("cuerpo")
    cuerpo.innerHTML = ""
    productos.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.contenidoNeto}</td>
                                    <td>${producto.precio}</td>
                                    <td>${producto.stock}</td>
                                </tr>`
    })


}

function guardarDatos(){
    
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("contenidoNeto", contenidoNeto)
    localStorage.setItem("precio", precio)
    localStorage.setItem("stock", stock)
}

function recuperarDatos(){
    nombre.value = localStorage.getItem("nombre")
    contenidoNeto.value = localStorage.getItem("contenidoNeto")
    precio.value = localStorage.getItem("precio")
    stock.value = localStorage.getItem("stock")
}
