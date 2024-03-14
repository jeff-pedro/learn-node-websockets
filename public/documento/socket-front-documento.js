import { obterCookie } from "../utils/cookies.js";
import {
  atualizaTextoEditor,
  alertarERedirecionar,
  tratarAutorizacaoSucesso,
  atualizarInterfaceUsuarios
} from "./documento.js";

const socket = io('/usuarios', {
  auth: {
    token: obterCookie('tokenJwt'),
  },
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);

socket.on('connect_error', (erro) => {
  alert(erro);
  window.location.href = '/login/index.html';
});

function selecionarDocumento(dadosEntrada) {
  socket.emit('selecionar_documento', dadosEntrada, atualizaTextoEditor);
}

socket.on('usuarios_no_documento', atualizarInterfaceUsuarios);

function emitirTextoEditor(dados) {
  socket.emit('texto_editor', dados);
}

socket.on('texto_editor_clientes', atualizaTextoEditor);

function emitirExcluirDocumento(nome) {
  socket.emit('excluir_documento', nome);
}

socket.on('excluir_documento_sucesso', alertarERedirecionar);

export {
  emitirTextoEditor,
  selecionarDocumento,
  emitirExcluirDocumento
};
