var database = require("../database/config");

function buscarUltimasMedidas() {
    var instrucaoSql = `SELECT jogador.nomeJogador, COUNT(usuario.id) AS quantidade
    FROM usuario
    JOIN jogador ON usuario.fkjogador = jogador.idJogador
    GROUP BY jogador.nomeJogador`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Criei essa função para dar a porcentagem de usuário em cada posição(03/07)
function enviarJogador() {
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
    enviarQuiz,
    enviarJogador,
    buscarPosicao   
}
