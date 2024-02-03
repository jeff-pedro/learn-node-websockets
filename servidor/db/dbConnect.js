import { MongoClient } from "mongodb";

const uri = "mongodb+srv://alura:alura@aluracluster.ogorlvu.mongodb.net/?retryWrites=true&w=majority";
const cliente = new MongoClient(uri);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db('alura-websocket');
  documentosColecao = db.collection('documentos');

  console.log('Conectado ao bando de dados com sucesso!');
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
