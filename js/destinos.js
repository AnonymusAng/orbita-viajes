// htm ya terminado, cuando la pagina termine de cargar, ejecutamos este codigo
document.addEventListener("DOMContentLoaded", function() {
    // creamos una variable llamada botones que busca todos los elementos con la clase "btn-detalles" en el documento   
    const botones = document.querySelectorAll(".btn-detalles");

    // vamos a recorrer cada boton encontrado y le agregamos un evento de click 
    botones.forEach(function(boton) {
            // cuando se haga click en el boton, ejecutamos la siguiente funcion
        boton.addEventListener("click", function() {
            const articulo = boton.parentElement; // buscamos el article que contiene el boton
            const detalles = articulo.querySelector(".detalles"); // buscamos el div con la clase "detalles" dentro del article
            // si el div con la clase "detalles" tiene la clase "mostrar", la removemos, si no, la agregamos
            detalles.classList.toggle("oculto");  //agregamos la clase oculto de los detlalles
        });
    });
});
