class Producto {
    constructor(nombre, contenidoNeto, precio, stock) {
        this.nombre = nombre
        this.contenidoNeto = contenidoNeto
        this.precio = precio
        this.stock = stock
    }
    contendioNeto(){
        let contenidoNeto = this.contenidoNeto 
        return contenidoNeto +"ml"
         

    }
    precioConIVA() {
        let precioFinal = this.precio * IVA
        return "$ " + precioFinal
    }
    restarStock(unidades) {
        this.stock = this.stock - unidades
    }
}

const prod1 = new Producto("cerveza blonde ale",  500 , 120, 200 )
const prod2 = new Producto("cerveza ipa",500, 150, 400)
const prod3 = new Producto("cerveza blonde ale maracuya",500, 130, 300)
const prod4 = new Producto("barril blonde ale",30000, 3000, 20)
const prod5 = new Producto("barril ipa",30000, 3500, 20)
const prod6 = new Producto("barril blonde ale maracuya",3250, 3000, 20)


const IVA = 1.22


function nuevoProducto() {
    nombre = prompt("Ingrese el nombre del producto")
    contenidoNeto = prompt("Ingrese el contenidoNeto")
    precio = prompt("Ingrese el precio")
    stock = prompt("Ingrese el stock")
    const prodNuevo = new Producto(nombre, contenidoNeto, precio, stock)
    console.log(prodNuevo)
}

const productos = [] 

function generadorAutomatico() {
    productos.push(prod1)
    productos.push(prod2)
    productos.push(prod3)
    productos.push(prod4)
    productos.push(prod5)
    productos.push(prod6)
    productos.push(new Producto("cerveza amber ale",500, 130, 200))

}

function encontrarBarriles(){
    let barriles = productos.filter(producto => producto.nombre.includes("barril"))
      console.log(barriles)
}

function buscarProducto() {
    let prod = prompt("Ingresa el producto a buscar:")
      
        const resultado = productos.find(producto => producto.nombre === prod.toLowerCase())
         console.log(resultado)
         
}
