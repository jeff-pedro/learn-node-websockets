import { MongoClient } from "mongodb";

const uri = "mongodb+srv://alura:alura@aluracluster.ogorlvu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db('alura-websocket');
const documentos = database.collection('documentos');

// async function run() {
//     try {
//         const database = client.db('alura-websocket');
//         const documentos = database.collection('documentos');

//         const query = { nome: 'JavaScript' };
//         const documento = await documentos.findOne(query);

//         console.log(documento);
//     } finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

export default documentos;