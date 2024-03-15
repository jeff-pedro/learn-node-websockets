let conexoesDocumentos = [];

function encontrarConexao(nomeDocumento, nomeUsuario) {
  return conexoesDocumentos.find((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
  });
};

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
  console.log(conexoesDocumentos);
}

function obterUsuariosDocumentos(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento == nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

// function removerConexao(nomeDocumento, nomeUsuario) {
//   const indice = conexoesDocumentos.findIndex((conexao) => {
//     return (
//       conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
//     );
//   });

//   if (indice !== -1) {
//     conexoesDocumentos.splice(indice, 1);
//   }
// }

/* Alternativa usando o id do socket */
function removerConexao(id) {
  const indice = conexoesDocumentos.findIndex((conexao) => conexao.id === id);

  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
}

export {
  encontrarConexao,
  adicionarConexao,
  obterUsuariosDocumentos,
  removerConexao
};
