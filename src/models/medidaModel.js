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

// Essa função insere um novo registro na tabela respostas (27/06)
function enviarQuiz(idUsuario, acertos) {
    var instrucaoSql = `INSERT INTO respostas (fkusuario,acertos) VALUES
    (${idUsuario},${acertos})`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Função para consultar o ranking via novo select adcionado ao banco de dados (27/06)
function buscarPosition() {

    var instrucaoSql = ` SELECT u.nome, r.acertos
FROM respostas r
JOIN usuario u ON r.fkusuario = u.idusuario
ORDER BY r.acertos DESC
LIMIT 3;`
    console.log("Executando a dashboard de ranking: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarJogador,
    buscarEscolhasDosJogadores,
    enviarQuiz,
    buscarPosition
};