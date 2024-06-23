var database = require("../database/config");

// Select das respostas (23/06)
function buscarUltimasMedidas() {
    var instrucaoSql = `SELECT acertos, COUNT(DISTINCT(fkusuario)) AS quantidade_usuarios
    FROM respostas
    WHERE acertos IN (0, 1, 2, 3, 4, 5)
    GROUP BY acertos`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Select das porcentagens (23/06)
function buscarMedidasEmTempoReal() {
    var instrucaoSql = `SELECT j.posicao, COUNT(u.id) AS num_usuarios, 
    (COUNT(u.id) / total.total_usuarios) * 100 AS porcentagem_usuarios
    FROM jogador j
    LEFT JOIN usuario u ON j.idJogador = u.fkjogador
    JOIN (SELECT COUNT(*) AS total_usuarios FROM usuario) total
    GROUP BY j.posicao, total.total_usuarios
    ORDER BY porcentagem_usuarios DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//Select dos jogadores
function buscarEscolhasDosJogadores() {
    var instrucaoSql = `SELECT jogador.nomeJogador, COUNT(usuario.id) AS quantidade
    FROM usuario
    JOIN jogador ON usuario.fkjogador = jogador.idJogador
    GROUP BY jogador.nomeJogador`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// insert dos jogadores
function enviarJogador(id, fkJogador) {
    var instrucaoSql = `INSERT INTO usuario (id, fkjogador) VALUES (${id}, ${fkJogador})`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Faz o insert das respostas (23/06)
function enviarQuiz(idUsuario, acertos) {
    var instrucaoSql = `INSERT INTO respostas (fkusuario,acertos) VALUES
    (${idUsuario},${acertos})`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEscolhasDosJogadores,
    enviarJogador,
    enviarQuiz
    
};
