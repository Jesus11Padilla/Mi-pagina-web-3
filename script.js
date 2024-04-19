var elementoBoton=document.getElementById("boton")

elementoBoton.addEventListener("click",cambiarTexto)

var elementoSubtitulo =document.getElementById("subtitulo")

function cambiarTexto()
{
  if(elementoBoton.classList.contains("activado"))
    {
      elementoBoton.classList.remove("activado")
      elementoBoton.classList.add("desactivado")
      elementoSubtitulo.innerText= "Eh funcionado"
    }
  else if(elementoBoton.classList.contains("desactivado"))
    {
    elementoBoton.classList.remove("desactivado")
    elementoBoton.classList.add("activado")
    elementoSubtitulo.innerText="tambien ehh funcionado"
   }
}

