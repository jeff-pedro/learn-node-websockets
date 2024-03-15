import 'dotenv/config';

import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";

import io from "./servidor.js";
import autorizarUsuario from './middlewares/autorizarUsuarios.js';

const nspUsuarios = io.of('/usuarios'); 

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on('connection', (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
});

io.of('/').on('connection', (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
