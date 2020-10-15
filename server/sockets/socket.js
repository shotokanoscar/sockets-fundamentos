// cuando se conecta al server
const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // con broadcast enviamos el mensaje a todos los usuarios que estan conectado
        client.broadcast.emit('enviarMensaje', data);

        //if (mensaje.usuario) {
        //    callback({
        //        resp: 'TODO SALIO BIEN'
        //    });
        //} 
        //else
        //{
        //    callback({
        resp: 'TODO SALIO MAL'
            //    });
            //}


    });

});