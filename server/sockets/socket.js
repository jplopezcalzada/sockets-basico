const { io } = require('../server');
// Escuchar
io.on('connection', (client) => {
    console.log('Usuario conectado');
    // Enviar infromacion al servidor
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a al aplicación'
    });



    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log('NODE', data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio MAL!!!'
        //     });
        // }


    });
});