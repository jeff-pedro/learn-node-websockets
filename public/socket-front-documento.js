import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
    socket.emit('texto-editor', texto);
}

socket.on('texto_editor_clientes', (texto) => {
    console.log(texto);
    atualizaTextoEditor(texto);
});

function selecionarDocumento(nome) {
    socket.emit('selecionar_documento', nome);
}

// socket.on('disconnect', (motivo) => {
//     console.log(`Servidor desconectado!
//     Motivo ${motivo}`);
// });

export { emitirTextoEditor, selecionarDocumento };
