// var medidaModel = require("../models/medidaModel");


// function buscarUltimasMedidas(req, res) {
//     const limite_linhas = 7;
//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando as últimas ${limite_linhas} medidas`);

//     medidaModel.buscarUltimasMedidas(idAquario, limite_linhas)
//         .then(function(resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!");
//             }
//         })
//         .catch(function(erro) {
//             console.log(erro);
//             console.log("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
//             res.status(500).json(erro.sqlMessage);
//         });
// }

// function buscarMedidasEmTempoReal(req, res) {
//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario)
//         .then(function(resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!");
//             }
//         })
//         .catch(function(erro) {
//             console.log(erro);
//             console.log("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
//             res.status(500).json(erro.sqlMessage);
//         });
// }

// function obterDadosJogadores(req, res) {
//     medidaModel.obterDadosJogadores()
//         .then(function(resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!");
//             }
//         })
//         .catch(function(erro) {
//             console.log(erro);
//             console.log("Houve um erro ao buscar os dados dos jogadores.", erro.sqlMessage);
//             res.status(500).json(erro.sqlMessage);
//         });
// }

// module.exports = {
//     buscarUltimasMedidas,
//     buscarMedidasEmTempoReal,
//     obterDadosJogadores
// };

var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    const limite_linhas = 7;
    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
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
    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
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

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarJogador,
    buscarEscolhasDosJogadores
};
