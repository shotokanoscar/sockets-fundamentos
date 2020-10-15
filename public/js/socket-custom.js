var socket = io();
// para escuchar
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdiomos conexion con el servidor');
});

// emit para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Oscar',
    mensaje: 'Hola mundo'
}, function(resp) {

    console.log('respuesta server ', resp);
});

// escuhcar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor :', mensaje);

});