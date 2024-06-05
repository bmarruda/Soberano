var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    var instrucaoSql = `SELECT
        dht11_temperatura as temperatura,
        dht11_umidade as umidade,
        momento,
        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
        FROM medida
        WHERE fk_aquario = ${idAquario}
        ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL para buscar as últimas medidas: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    var instrucaoSql = `SELECT
        dht11_temperatura as temperatura,
        dht11_umidade as umidade,
        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico,
        fk_aquario
        FROM medida WHERE fk_aquario = ${idAquario}
        ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL para buscar medidas em tempo real: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosJogadores() {
    var instrucaoSql = `SELECT
        jogador.nomeJogador,
        COUNT(usuario.id) as quantidade
        FROM jogador
        LEFT JOIN usuario ON jogador.idJogador = usuario.fkjogador
        GROUP BY jogador.idJogador`;

    console.log("Executando a instrução SQL para obter os dados dos jogadores: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    obterDadosJogadores
};
