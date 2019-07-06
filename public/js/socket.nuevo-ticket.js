let socket = io();

let label = $('#lblNuevoTicket');

// Escuchar informacion del Servidor
socket.on("connect", () => {
    console.log("Conectado al Servidor!");
});
// Escuchar informacion del Servidor
socket.on("disconnect", () => {
    console.log("Desconectado del Servidor!");
});

socket.on("estadoActual", (data) => {
    label.text(data.actual);
});


// Se escucha el click del boton
$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });

});