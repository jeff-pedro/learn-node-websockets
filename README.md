# Explorando Websockets com Socket.io
> Este projeto constrói um editor de documentos com edição em tempo real ("Alura Docs") através do protocolo WebSockets, implementado com **Node.js**, **Socket.io** e **MongoDB**.

## Recursos
* [Socket.io Official Docs](https://socket.io/)

## Funcionalidades
* Atualização em tempo real to texto do documento compartilhado entre os clientes.

## Explorado
* Criar e configurar um servidor com suporte a websockets.
* Emitir eventos e transportar dados do front-end para o back-end e vice-versa
    * a partir de um cliente para o servidor com **socket.emit()**
    * a partir do servidor para todos clientes com **io.emit()**
    * a partir do servidor para todos clientes, exceto o cliente que está emitindo o evento (**socket.broadcast.emit()**)
* Como organizar arquivos por __responsabilidade__(manipulação de HTML, funções do socket...)