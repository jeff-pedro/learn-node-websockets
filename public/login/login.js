import { emitirLogin } from "./socket-front-login.js";

const form = document.getElementById('form-login');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const usuario = form['input-usuario'].value;
  const senha = form['input-senha'].value;

  emitirLogin({ usuario, senha });
});