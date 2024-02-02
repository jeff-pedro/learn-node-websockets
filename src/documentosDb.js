import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({ nome });

  return documento;
}

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos;
}

async function adicionarDocumento(nome) {
  const resultado = await documentosColecao.insertOne({
    nome,
    texto: ""
  });

  return resultado;
}

function excluirDocumento(nome) {
  const resultado = documentosColecao.deleteOne({ nome });
  return resultado;
}

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

export {
  encontrarDocumento,
  obterDocumentos,
  atualizaDocumento,
  adicionarDocumento,
  excluirDocumento
};