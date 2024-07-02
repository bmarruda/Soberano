var database = require("../database/config");

function buscarUltimasMedidas() {
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
function enviarQuiz(id, acertos) {
    var instrucaoSql = `INSERT INTO respostas (fkusuario,acertos) VALUES
    (${id},${acertos})`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// Criei essa função para consultar o ranking via novo select adcionado ao banco de dados (27/06)


function buscarPosicao() {
    // Define uma variável chamada 'instrucaoSql' que armazena a instrução SQL para selecionar os dados desejados.(27/06)
    var instrucaoSql = `
        SELECT u.nome, r.acertos
        FROM respostas r
        JOIN usuario u ON r.fkusuario = u.id
        ORDER BY r.acertos DESC
        LIMIT 3;
    `
    // Executa a instrução SQL usando a função 'executar' do objeto 'database' e retorna o resultado. (27/06)
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarEscolhasDosJogadores,
    enviarJogador,
    enviarQuiz,
    buscarPosicao   
}
