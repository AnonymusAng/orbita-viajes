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
                                                                                                                                                            boton.textContent = "ver detal
// Esperamos a que la página termine de cargar.
document.addEventListener("DOMContentLoaded", function () {
    const botonesDetalles = document.querySelectorAll(".btn-detalles");
        const botonesReservar = document.querySelectorAll(".btn-reservar");

            // Al iniciar, ocultamos la información de cada destino.
                botonesDetalles.forEach(function (boton) {
                        const articulo = boton.closest("article");
                                const detalles = articulo.querySelector(".detalles");

                                        detalles.classList.add("oculto");
                                                boton.textContent = "Ver detalles";

                                                        // Mostramos u ocultamos los detalles.
                                                                boton.addEventListener("click", function () {
                                                                            detalles.classList.toggle("oculto");

                                                                                        if (detalles.classList.contains("oculto")) {
                                                                                                        boton.textContent = "Ver detalles";
                                                                                                                    } else {
                                                                                                                                    boton.textContent = "Ocultar detalles";
                                                                                                                                                }
                                                                                                                                                        });
                                                                                                                                                            });

                                                                                                                                                                // Los botones de reserva abren el cotizador.
                                                                                                                                                                    botonesReservar.forEach(function (boton) {
                                                                                                                                                                            boton.addEventListener("click", function () {
                                                                                                                                                                                        window.location.href = "cotizador.html";
                                                                                                                                                                                                });
                                                                                                                                                                                                    });
                                                                                                                                                                                                    });