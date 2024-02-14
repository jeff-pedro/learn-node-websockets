import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
  const token = socket.handshake.auth.token

  try {
    jwt.verify(token, process.env.SEGREDO_JWT);

    next();
  } catch (erro) {
    next(erro);
  }
}

export default autorizarUsuario;
