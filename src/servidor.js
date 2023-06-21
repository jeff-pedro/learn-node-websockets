import url from 'url';
import path from 'path';
import http from 'http';

import express from 'express';
import { Server } from 'socket.io';

const app = express();
const porta = process.env.PORT ?? 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, '../..', 'public');

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

const io = new Server(servidorHttp);

servidorHttp.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`)
});

io.on('connection', () => {
    console.log('Um cliente se conectou!');
});
