import { adicionarDocumentoNaLista } from "./socket-front-index.js";

const listaDocumentos = document.getElementById('lista-documentos');
const inputDocumento = document.getElementById('input-documento');
const btnAdicionaDocumentos = document.querySelector('button');

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a 
      href="documento.html?nome=${nomeDocumento}"
      class=list-group-item list-group-item-action>
        ${nomeDocumento}
      </a>
  `
}

btnAdicionaDocumentos.addEventListener('click', () => {
  adicionarDocumentoNaLista(inputDocumento.value);
});

export { inserirLinkDocumento };
