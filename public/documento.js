const socket = io();

const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
    socket.emit('texto-editor', textoEditor.value);

    socket.on('texto-editor-clientes', (texto) => {
        console.log(texto);
    });
});