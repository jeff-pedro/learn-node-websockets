import io from "./servidor.js";
import documentos from "./db.js";

// const documentos = [
//     {
//         nome: "JavaScript",
//         texto: "Texto de JavaScript..."
//     },
//     {
//         nome: "Node",
//         texto: "Texto de Node..."
//     },
//     {
//         nome: "Socket.io",
//         texto: "Texto de Socket.io..."
//     }
// ]

io.on('connection', (socket) => {
    // console.log('Um cliente se conectou! ID:', socket.id);

    socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);

        // db estático
        // const documento = encontrarDocumento(nomeDocumento);

        // db dinamico
        const documento = await documentos.findOne({ nome: nomeDocumento });

        if (documento) {
            devolverTexto(documento.texto);
        }
    });

    socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
        // const documento = encontrarDocumento(nomeDocumento);
        const documento = await documentos.findOne({ nome: nomeDocumento });

        if (documento) {
            // documento.texto = texto;

            // guarda texto no bando de dados
            const query = { nome: nomeDocumento };
            const update = { $set: { texto: texto } };
            await documentos.updateOne(query, update);

            socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
        }
    });
});

// function encontrarDocumento(nome) {
//     const documento = documentos.find((documento) => {
//         return documento.nome === nome;
//     });

//     return documento;
// }