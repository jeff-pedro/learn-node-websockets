const socket = io();

function emitirLogin(dados) {
  socket.emit('login', dados);
}

export { emitirLogin };
