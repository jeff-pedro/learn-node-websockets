import io from "./servidor.js";
import { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento } from "./documentosDb.js";

io.on('connection', (socket) => {
  socket.on('obter_documentos', async (devolverDocumentos) => {
    const documentos = await obterDocumentos();

    if (documentos) {
      devolverDocumentos(documentos); // Conceito de Reconhecimento (Acknowledment)
    }
  });

  socket.on('adicionar_documento', async (nome) => {
    const documentoExiste = (await encontrarDocumento(nome)) !== null;

    if (documentoExiste) {
      socket.emit('documento_existente', nome);
    } else {
      const resultado = await adicionarDocumento(nome);

      if (resultado.acknowledged) {
        io.emit('adicionar_documento_interface', nome);
      }
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
});
