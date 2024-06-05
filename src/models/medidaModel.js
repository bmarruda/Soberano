var database = require("../database/config");

function buscarUltimasMedidas() {
    var instrucaoSql = `SELECT jogador.nomeJogador, COUNT(usuario.id) AS quantidade
    FROM usuario
    JOIN jogador ON usuario.fkjogador = jogador.idJogador
    GROUP BY jogador.nomeJogador`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {
    var instrucaoSql = `SELECT jogador.nomeJogador, COUNT(usuario.id) AS quantidade
    FROM usuario
    JOIN jogador ON usuario.fkjogador = jogador.idJogador
    GROUP BY jogador.nomeJogador`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarJogador(id, fkJogador) {
    var instrucaoSql = `INSERT INTO usuario (id, fkjogador) VALUES (${id}, ${fkJogador})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEscolhasDosJogadores() {
    var instrucaoSql = `SELECT jogador.nomeJogador, COUNT(usuario.id) AS quantidade
    FROM usuario
    JOIN jogador ON usuario.fkjogador = jogador.idJogador
    GROUP BY jogador.nomeJogador`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarJogador,
    buscarEscolhasDosJogadores
};
