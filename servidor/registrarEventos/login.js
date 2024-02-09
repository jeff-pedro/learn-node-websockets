import autenticaUsuario from "../utils/autenticaUsuario.js";

function registrarEventosLogin(socket, io) {
  socket.on('autenticar_usuario', async ({ nome, senha }) => {
    const autenticado = await autenticaUsuario(nome, senha)

    console.log(autenticado);
  });
}

export default registrarEventosLogin;
