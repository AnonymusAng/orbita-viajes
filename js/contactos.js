// Seleccionamos el formulario y el espacio para los mensajes.
const formulario = document.getElementById("formulario-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

// Desactivamos los mensajes automáticos para mostrar los nuestros.
formulario.noValidate = true;

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const edad = Number(document.getElementById("edad").value);
        const asunto = document.getElementById("asunto").value.trim();
        const destino = document.getElementById("destino").value;
        const mensaje = document.getElementById("mensaje").value.trim();
        const condiciones = document.getElementById("condiciones").checked;

        // Verificamos que todos los campos estén completos.
        if (!nombre || !correo || !edad || !asunto || !destino || !mensaje) {
            mostrarMensaje("Por favor, completa todos los campos.", "error");
            return;
            }

        // Verificamos el correo.
        if (!correo.includes("@") || !correo.includes(".")) {
            mostrarMensaje("Ingresa un correo electrónico válido.", "error");
            return;
            }

        // Verificamos la edad.
        if (edad < 18) {
            mostrarMensaje("Debes ser mayor de edad.", "error");
            return;
            }

        // Verificamos la aceptación de las condiciones.
        if (!condiciones) {
            mostrarMensaje("Debes aceptar las condiciones.", "error");
            return;
            }

        // Mostramos un mensaje de error o de confirmación.
        function mostrarMensaje(texto, tipo) {
            mensajeFormulario.textContent = texto;

            if (tipo === "error") {
                mensajeFormulario.style.color = "#ff8a8a";
            } else {
                mensajeFormulario.style.color = "#70ffb1";
            }
                                                                                                                                                                                    