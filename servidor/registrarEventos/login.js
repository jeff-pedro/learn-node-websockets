import autenticaUsuario from "../utils/autenticaUsuario.js";

function registrarEventosLogin(socket, io) {
  socket.on('login', async (dados) => {
    const autenticado = await autenticaUsuario(dados.usuario, dados.senha)
  
    console.log(autenticado);
  });
}

export default registrarEventosLogin;
