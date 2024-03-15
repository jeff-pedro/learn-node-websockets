import {
  cadastrarUsuario,
  encontrarUsuario
} from '../db/usuariosDb.js'

function registrarEventosCadastro(socket, io) {
  socket.on('cadastrar_usuario', async (dados) => {
    const usuarioExiste = (await encontrarUsuario(dados.nome)) !== null;

    if (usuarioExiste) {
      socket.emit('usuario_ja_existente');
    } else {
      const resultado = await cadastrarUsuario(dados);

      if (resultado.acknowledged) {
        socket.emit('cadastro_sucesso');
      } else {
        socket.emit('cadastro_erro');
      }
    }

  });
}

export default registrarEventosCadastro;