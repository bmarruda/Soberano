var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    const limite_linhas = 7;
    var idJogador = req.params.idJogador;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {
    var idJogador = req.params.idJogador;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idJogador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function enviarJogador(req, res) {
    var id = req.body.id;
    var fkJogador = req.body.fkJogador;

    medidaModel.enviarJogador(id, fkJogador).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao enviar o jogador! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarEscolhasDosJogadores(req, res) {
    medidaModel.buscarEscolhasDosJogadores().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as escolhas dos jogadores.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// função que recebe os dados do quiz de um usuário (27/06)
function enviarQuiz(req, res) {

    var idUsuario = req.body.idUsuario;
    var acertos = req.body.acertos;

   

    medidaModel.enviarQuiz(idUsuario,acertos).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao enviar o quiz! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
} 
// function que puxa os dados referentes ao runking  (28/06)
function buscarPosiçao(req,res){
    console.log(`Recuperando medidas em tempo real`);

medidaModel.buscarPosiçao().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            res.json({
                nome: resultado[0].nome
        
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });


}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEscolhasDosJogadores,
    enviarJogador,
    enviarQuiz,
    buscarPosiçao 
};
