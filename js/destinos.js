// Esperamos a que la página termine de cargar.
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos los botones de detalles y de reserva.
        const botonesDetalles = document.querySelectorAll(".btn-detalles");
            const botonesReservar = document.querySelectorAll(".btn-reservar");

                // Configuramos los botones para mostrar y ocultar detalles.
                    botonesDetalles.forEach(function (boton) {

                            // Buscamos la tarjeta y sus detalles.
                                    const articulo = boton.closest("article");
                                            const detalles = articulo.querySelector(".detalles");

                                                    // Los detalles comienzan ocultos.
                                                            detalles.classList.add("oculto");
                                                                    boton.textContent = "Ver detalles";

                                                                            // Ejecutamos la acción al presionar el botón.
                                                                                    boton.addEventListener("click", function () {

                                                                                                detalles.classList.toggle("oculto");

                                                                                                            // Cambiamos el texto según el estado de los detalles.
                                                                                                                        if (detalles.classList.contains("oculto")) {
                                                                                                                                        boton.textContent = "Ver detalles";
                                                                                                                                                    } else {
                                                                                                                                                                    boton.textContent = "Ocultar detalles";
                                                                                                                                                                                }

                                                                                                                                                                                        });

                                                                                                                                                                                            });

                                                                                                                                                                                                // Configuramos los botones para reservar el viaje.
                                                                                                                                                                                                    botonesReservar.forEach(function (boton) {

                                                                                                                                                                                                            boton.addEventListener("click", function () {

                                                                                                                                                                                                                        // Llevamos al usuario a la página del cotizador.
                                                                                                                                                                                                                                    window.location.href = "cotizador.html";

                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                });