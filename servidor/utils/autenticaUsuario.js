import { scryptSync } from 'crypto';
import { encontrarUsuario } from "../db/usuariosDb.js";

async function autenticaUsuario(nome, senhaDigitada) {
  const usuario = await encontrarUsuario(nome);

  if (usuario) {
    const senhaHash = usuario.hashSenha;
    const salSenha = usuario.salSenha;
    const hash = scryptSync(senhaDigitada, salSenha, 64).toString('hex');

    return (hash === senhaHash);
  } else {
    return false;
  }

}

export default autenticaUsuario;