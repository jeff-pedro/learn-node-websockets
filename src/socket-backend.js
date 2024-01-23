import io from "./servidor.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "Texto de JavaScript..."
    },
    {
        nome: "Node",
        texto: "Texto de Node..."
    },
    {
        nome: "Socket.io",
        texto: "Texto de Socket.io..."
    }
]

io.on('connection', (socket) => {
    // console.log('Um cliente se conectou! ID:', socket.id);

    socket.on('selecionar_documento', (nomeDocumento) => {
        socket.join(nomeDocumento);
        
        // db local
        const documento = encontrarDocumento(nomeDocumento);
        
        if (documento) {
            socket.emit('texto_documento', documento.texto);
        }
    });

    socket.on('texto-editor', ({ texto, nomeDocumento }) => {
        socket.to(nomeDocumento).emit('texto-editor-clientes', texto);
    });
});

function encontrarDocumento(nome) {
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    });

    return documento;
}