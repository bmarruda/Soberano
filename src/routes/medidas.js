var express = require("express");
var router = express.Router();
var medidaController = require("../controllers/medidaController");

// Nova rota para buscar as escolhas dos jogadores
router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.post("/jogador/", function (req, res) {
    medidaController.enviarJogador(req, res);
});

// rota do quiz (23/06)
router.post("/quiz/", function (req, res) {
    medidaController.enviarQuiz(req, res);
})
// Define uma rota GET para '/posicao/' (27/06)
// Quando essa rota é acessada, a função 'buscarPosicao' do medidaController é chamada (27/06)
router.get("/posicao/", function (req, res) {
    medidaController.buscarPosicao(req, res);
});
// Exporta a rota para que ele possa ser usado em outras partes da aplicação (27/06)
module.exports = router;