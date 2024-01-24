import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({ nome });

  return documento;
}

async function encontrarTodosDocumentos() {
  const documentosCursor = await documentosColecao.find({}, { sort: { nome: 1 }, projection: { _id: 0, nome: 1 } });

  let documentos = [];

  for await (const doc of documentosCursor) {
    documentos.push(doc);
  }

  return documentos;
}

async function adicionarDocumento(nome) {
  await documentosColecao.insertOne({ nome });
}

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

export { encontrarDocumento, encontrarTodosDocumentos, atualizaDocumento, adicionarDocumento };