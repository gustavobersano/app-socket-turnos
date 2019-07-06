let socket = io();

// Escuchar informacion del Servidor
socket.on("connect", () => {
    console.log("Conectado al Servidor!");
});
// Escuchar informacion del Servidor
socket.on("disconnect", () => {
    console.log("Desconectado del Servidor!");
});

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let small = $('small');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', () => {

    socket.emit('atenderTicket', { escritorio: escritorio }, (resp) => {
        if (!resp.ok) {
            small.text(resp.err.message);
        } else {
            small.text('Ticket ' + resp.ticketAtendido.numero);
        }
    });

});