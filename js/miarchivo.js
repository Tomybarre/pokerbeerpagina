class Producto {
    constructor(nombre, contenidoNeto, precio, stock) {
        this.nombre = nombre
        this.contenidoNeto = contenidoNeto
        this.precio = precio
        this.stock = stock
    }
    contendioNeto(){
        let contenidoNeto = this.contenidoNeto 
        return "ml"
         

    }
    precioConIVA() {
        let precioFinal = this.precio * IVA
        return "$ " + precioFinal
    }
    restarStock(unidades) {
        this.stock = this.stock - unidades
    }
}

const prod1 = new Producto("Cerveza Blonde ale",  500 , 120, 200 )
const prod2 = new Producto("Cerveza IPA",500, 150, 400)
const prod3 = new Producto("Cerveza Blonde ale Maracuya",500, 130, 300)

const IVA = 1.22


function nuevoProducto() {
    nombre = prompt("Ingrese el nombre del producto")
    contenidoNeto = prompt("Ingrese el contenidoNeto")
    precio = prompt("Ingrese el precio")
    stock = prompt("Ingrese el stock")
    const prodNuevo = new Producto(nombre, contenidoNeto, precio, stock)
    console.log(prodNuevo)
}

function recorrerElementos() {
    for (let producto of productos) {
        console.table(producto)
    }




}
