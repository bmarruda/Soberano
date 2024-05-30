var database = require("../database/config");

function buscarPorId(idJogador) {
  var instrucaoSql = `SELECT * FROM jogador WHERE id = '${idJogador}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM jogador`;

  return database.executar(instrucaoSql);
}

function buscarPornomeJogador(nomeJogador) {
  var instrucaoSql = `SELECT * FROM jogador WHERE nomeJogador = '${nomeJogador}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(posicao, nomeJogador) {
  var instrucaoSql = `INSERT INTO jogador (posicao, nomeJogador) VALUES ('${posicao}', '${nomeJogador}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPornomeJogador, buscarPorId, cadastrar, listar };
