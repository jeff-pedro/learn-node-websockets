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
  await documentosColecao.insertOne({ nome });
}

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

export { encontrarDocumento, obterDocumentos, atualizaDocumento, adicionarDocumento };