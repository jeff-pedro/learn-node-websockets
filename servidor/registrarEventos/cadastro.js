function registrarEventosCadastro(socket, io) {
  socket.on('cadastrar_usuario', ({ usuario, senha }) => {
    console.log(usuario, senha);
  });
}

export default registrarEventosCadastro;