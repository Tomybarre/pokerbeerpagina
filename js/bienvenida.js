

 const bienvenida = document.getElementById("bienvenida")
 
  var mensajeDeBienvenida = new Array();
 
function cambiarEncabezado(){

    mensajeDeBienvenida.push('Bienvenidos a mi pagina')
    mensajeDeBienvenida.push('Tomate una cerveza' )
    mensajeDeBienvenida.push('Queres cerveza fria?')
    bienvenida.innerText = mensajeDeBienvenida[Math.floor(Math.random()*mensajeDeBienvenida.length)]

}

 
 cambiarEncabezado()
 