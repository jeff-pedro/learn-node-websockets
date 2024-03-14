import {
  encontrarDocumento,
  atualizaDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";
import {
  adicionarConexao,
  obterUsuariosDocumentos,
  removerConexao
} from "../utils/conexoesDocumentos.js";

function registrarEventosDocumento(socket, io) {
  socket.on(
    'selecionar_documento',
    async ({ nomeDocumento, nomeUsuario }, devolverTexto) => {
      const documento = await encontrarDocumento(nomeDocumento);

      if (documento) {
        socket.join(nomeDocumento);

        adicionarConexao({ nomeDocumento, nomeUsuario });

        const usuariosNoDocumento = obterUsuariosDocumentos(nomeDocumento);

        io.to(nomeDocumento).emit('usuarios_no_documento', usuariosNoDocumento);

        devolverTexto(documento.texto);
      }

      socket.on('texto_editor', async ({ nomeDocumento, texto }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
          socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
        }
      });

      socket.on('excluir_documento', async (nomeDocumento) => {
        const resultado = await excluirDocumento(nomeDocumento);

        if (resultado.deletedCount) {
          io.emit('excluir_documento_sucesso', nomeDocumento);
        }
      });

      socket.on('disconnect', () => {
        removerConexao(nomeDocumento, nomeUsuario);

        const usuariosNoDocumento = obterUsuariosDocumentos(nomeDocumento);

        io.to(nomeDocumento).emit('usuarios_no_documento', usuariosNoDocumento);
      });
    });
}

export default registrarEventosDocumento;
