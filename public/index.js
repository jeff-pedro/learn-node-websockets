import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { removerCookie } from "./utils/cookies.js";

const listaDocumentos = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocumento = document.getElementById('input-documento');
const botaoLogout = document.getElementById('botao-logout');

botaoLogout.addEventListener('click', (evento) => {
  removerCookie('tokenJwt');
  alert('Usuário deslogado com sucesso!');
  window.location.href = '/login/index.html';
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a 
      id="documento-${nomeDocumento}"
      href="/documento/documento.html?nome=${nomeDocumento}"
      class=list-group-item list-group-item-action
    >
      ${nomeDocumento}
    </a>
  `
}

function removerLinkDocumento(nome) {
  const documento = document.getElementById(`documento-${nome}`);
  listaDocumentos.removeChild(documento);
}


export { inserirLinkDocumento, removerLinkDocumento };
