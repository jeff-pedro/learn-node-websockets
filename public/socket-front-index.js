const socket = io();

import { criarListaDocumentos } from "./index.js";

function carregarListaDocumentos() {
  socket.emit('listar_documentos');
};

function adicionarDocumentoNaLista(documento) {
  socket.emit('adicionar_documento', documento);
}

socket.on('listar_documentos_cliente', (documentos) => {
  criarListaDocumentos(documentos);
});


export { carregarListaDocumentos, adicionarDocumentoNaLista };
