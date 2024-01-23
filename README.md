# Explorando Websockets com Socket.io
> Este projeto constrói um editor de documentos com edição em tempo real ("Alura Docs") através do protocolo WebSockets, implementado com **Node.js**, **Socket.io** e **MongoDB**.

## Recursos
* [Socket.io Official Docs](https://socket.io/)

## Funcionalidades
* Atualização em tempo real to texto do documento compartilhado entre os clientes.

## Explorado
* [Criar e configurar um servidor](https://socket.io/docs/v3/server-installation/) com suporte a websockets.
* [Configurar comunicação do cliente](https://socket.io/docs/v3/client-installation/) com o servidor.
* [Emitir eventos](https://socket.io/docs/v3/emitting-events/) e transportar dados entre front-end e back-end.
    * a partir de um cliente para o servidor e vice-versa com **socket.emit()**
    * a partir do servidor para todos clientes com **io.emit()**
    * [outras possibilidades de emissão de eventos](https://socket.io/docs/v4/emit-cheatsheet/)
* [Escutar eventos](https://socket.io/docs/v3/listening-to-events/) entre front-end e servidor.
* [Eventos de Broadcast](https://socket.io/docs/v3/broadcasting-events/) para emitir eventos a partir do servidor para todos clientes, exceto o cliente que está emitindo o evento.
* Como organizar arquivos por __responsabilidade__(manipulação de HTML, funções do socket...)
* Trabalhar com [Salas](https://socket.io/docs/v3/rooms/) com o objetivo de agrupar sockets e direcionar os eventos para um grupo selecionado.
* Usar o recurso "[Reconhecimento]()", quando um cliente envia um evento para o servidor e espera receber um dado de volta.

