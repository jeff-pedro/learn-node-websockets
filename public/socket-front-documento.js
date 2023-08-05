import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit('selecionar_documento', nome);
}

function emitirTextoEditor(dados) {
    socket.emit('texto-editor', dados);
}

socket.on('texto-editor-clientes', (texto) => {
    console.log(texto);
    atualizaTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };
