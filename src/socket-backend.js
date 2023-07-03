import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log('Um cliente se conectou! ID:', socket.id);

    socket.on('texto-editor', (texto) => {
        // console.log(texto);
        socket.broadcast.emit('texto-editor-clientes', texto);
    }); 
});
