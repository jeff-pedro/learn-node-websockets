import {
  encontrarDocumento,
  atualizaDocumento,
  excluirDocumento,
} from "../db/documentosDb.js";
import {
  adicionarConexao,
  encontrarConexao,
  obterUsuariosDocumentos,
  removerConexao
} from "../utils/conexoesDocumentos.js";

function registrarEventosDocumento(socket, io) {
  socket.on(
    'selecionar_documento',
    async ({ nomeDocumento, nomeUsuario }, devolverTexto) => {
      const documento = await encontrarDocumento(nomeDocumento);

      if (documento) {
        const conexaoEncontrada = encontrarConexao(nomeDocumento, nomeUsuario);

        if (!conexaoEncontrada) {
          socket.join(nomeDocumento);
          
          // adicionarConexao({ nomeDocumento, nomeUsuario });
          
          /* Alternativa usando id do socket */
          adicionarConexao({ nomeDocumento, nomeUsuario, id: socket.id });
          
          socket.data = {
            usuarioEntrou: true
          }
          
          const usuariosNoDocumento = obterUsuariosDocumentos(nomeDocumento);

          io.to(nomeDocumento).emit('usuarios_no_documento', usuariosNoDocumento);

          devolverTexto(documento.texto);
        } else {
          socket.emit("usuario_ja_no_documento");
        }
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
        if (socket.data.usuarioEntrou) {
          // removerConexao(nomeDocumento, nomeUsuario);

          /* Alternativa usando o id do socket */
          removerConexao(socket.id);

          const usuariosNoDocumento = obterUsuariosDocumentos(nomeDocumento);

          io.to(nomeDocumento).emit('usuarios_no_documento', usuariosNoDocumento);
        }
      });
    });
}

export default registrarEventosDocumento;
