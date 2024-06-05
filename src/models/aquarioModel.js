var database = require("../database/config");

function buscarAquariosPorEmpresa(idJogador) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE fkJogador = ${idJogador}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idJogador, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fkJogador) aquario VALUES (${descricao}, ${idJogador})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
