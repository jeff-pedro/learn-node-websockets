import {
  encontrarDocumento,
  atualizaDocumento,
  excluirDocumento
} from "../db/documentosDb.js";

function registrarEventosDocumento(socket, io) {
  socket.on('excluir_documento', async (nomeDocumento) => {
    const resultado = await excluirDocumento(nomeDocumento);

    if (resultado.deletedCount) {
      io.emit('excluir_documento_sucesso', nomeDocumento);
    }
  });

  socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on('texto_editor', async ({ nomeDocumento, texto }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
    }
  });
}

export default registrarEventosDocumento;