let socket = io();
// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar infromacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Juan Pedro',
    mensaje: 'Call Back'
}, (resp) => {
    console.log('respuesta server', resp);
});

socket.on('enviarMensaje', (mensaje) => {
    console.log('FRONTEND', mensaje);
});