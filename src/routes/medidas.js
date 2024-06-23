var express = require("express");
var router = express.Router();
var medidaController = require("../controllers/medidaController");

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.post("/jogador/", function (req, res) {
    medidaController.enviarJogador(req, res);
});

// Nova rota para buscar as escolhas dos jogadores
router.get("/escolhas-jogadores/", function (req, res) {
    medidaController.buscarEscolhasDosJogadores(req, res);
});

// rota do quiz 23/06
router.post("/quiz/", function (req, res) {
    medidaController.enviarQuiz(req, res);
})

module.exports = router;
