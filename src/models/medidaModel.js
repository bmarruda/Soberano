// var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
        momento,
        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
    FROM medida
    WHERE fk_aquario = ${idAquario}
    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
        fk_aquario 
    FROM medida 
    WHERE fk_aquario = ${idAquario} 
    ORDER BY id DESC LIMIT 1`;

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
