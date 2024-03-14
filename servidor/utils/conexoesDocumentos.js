const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumentos(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento == nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export { adicionarConexao, obterUsuariosDocumentos };