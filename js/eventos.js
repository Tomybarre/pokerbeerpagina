const campos = document.querySelectorAll("input")

function focoEnCampos() {
    campos.forEach(campo => {
        campo.addEventListener("focus", ()=> {campo.className = "fondo"})
        campo.addEventListener("blur", ()=> {campo.className = ""})
        campo.addEventListener("keypress", (e)=> {
            
          if (e.key === "Enter") {
                alert("Se pulso la tecla enter.")
            }
        })
        
    
    })
}

focoEnCampos()