import io from "./servidor.js";
import { encontrarDocumento, atualizaDocumento, encontrarTodosDocumentos, adicionarDocumento } from "./documentosDb.js";

io.on('connection', (socket) => {
  // console.log('Um cliente se conectou! ID:', socket.id);

  socket.on('listar_documentos', async () => {
    const documentos = await encontrarTodosDocumentos();

    if (documentos) {
      socket.emit('listar_documentos_cliente', documentos);
    }
  });

  socket.on('adicionar_documento', (nomeDocumento) => {
    adicionarDocumento(nomeDocumento);
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
