import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
    socket.emit('texto-editor', texto);
}

socket.on('texto-editor-clientes', (texto) => {
    console.log(texto);
    atualizaTextoEditor(texto);
});

socket.on('disconnect', (motivo) => {
    console.log(`Servidor desconectado!
    Motivo ${motivo}`);
});

export { emitirTextoEditor };
