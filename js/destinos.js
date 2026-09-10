// htm ya terminado, cuando la pagina termine de cargar, ejecutamos este codigo
document.addEventListener("DOMContentLoaded", function() {
    // creamos una variable llamada botones que busca todos los elementos con la clase "btn-detalles" en el documento   
    const botones = document.querySelectorAll(".btn-detalles");

    // vamos a recorrer cada boton encontrado y le agregamos un evento de click 
    botones.forEach(function(boton) {
        // cuando se haga click en el boton, ejecutamos la siguiente funcion
        boton.addEventListener("click", function() {
            // buscamos el article que contiene el boton
            const articulo = boton.parentElement; 
            // buscamos el div con la clase "detalles" dentro del article
            const detalles = articulo.querySelector(".detalles"); 
            //mostramos o ocultamos los detalles
            detalles.classList.toggle("oculto"); 
            
            // cambiamos el texto del boton dependiendo si los detalles estan visibles o no
            if(detalles.classList.contains("oculto")) {
                boton.textContent = "ver detalles"; // cambiamos el texto del boton
            } else {
                // si los detalles estan visibles, mostramos ocultar detalles
                boton.textContent = "ocultar detalles"; 
            }
        });
    });
});
