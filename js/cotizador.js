const formulario = document.getElementById("cotizador-form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const destino = document.getElementById("destino").value;
    const viajeros = Number(document.getElementById("viajeros").value);
    const alojamiento = Number(document.getElementById("alojamiento").value);
    const servicio = Number(document.getElementById("servicio").value);

    let precioBase = 0;

    if (destino === "luna") {
        precioBase = 2500000;
    } else if (destino === "marte") {
        precioBase = 8000000;
    } else if (destino === "europa") {
        precioBase = 12000000;
    }

    if (viajeros <= 0) {
        document.getElementById("total").textContent =
            "La cantidad de viajeros debe ser mayor que cero.";
        return;
    }

    const subtotal = precioBase * viajeros;
    const totalViaje = subtotal + alojamiento + servicio;

    document.getElementById("total").textContent =
        "Total: $" + totalViaje.toLocaleString("es-CO");
});