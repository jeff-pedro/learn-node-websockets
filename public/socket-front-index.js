const socket = io();

import { inserirLinkDocumento } from "./index.js";

socket.emit('obter_documentos', (documentos) => {
  documentos.forEach(documento => {
    inserirLinkDocumento(documento.nome);
  });
});

function emitirAdicionarDocumento(nome) {
  socket.emit('adicionar_documento', nome);
}

socket.on('adicionar_documento_interface', (nome) => {
  inserirLinkDocumento(nome);
});

export { emitirAdicionarDocumento };
