import { adicionarDocumentoNaLista, carregarListaDocumentos } from "./socket-front-index.js";

carregarListaDocumentos();

const listaDocumentos = document.getElementById('lista-documentos');
const inputDocumento = document.getElementById('input-documento');
const btnAdicionaDocumentos = document.querySelector('button');

function criarListaDocumentos(documentos) {
  documentos.forEach(documento => {
    const nomeDocumento = document.createTextNode(documento.nome)
    const novoDocumento = document.createElement('a');
    novoDocumento.setAttribute('href', `documento.html?nome=${nomeDocumento.nodeValue}`);
    novoDocumento.setAttribute('class', 'list-group-item list-group-item-action');
    novoDocumento.appendChild(nomeDocumento);
    listaDocumentos.appendChild(novoDocumento);
  });
}

btnAdicionaDocumentos.addEventListener('click', () => {
  adicionarDocumentoNaLista(inputDocumento.value);
});

export { criarListaDocumentos };
