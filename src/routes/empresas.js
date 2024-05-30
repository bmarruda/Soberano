var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    jogadorController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    jogadorController.buscarPornomeJogador(req, res);
});

router.get("/buscar/:id", function (req, res) {
  jogadorController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  jogadorController.listar(req, res);
});

module.exports = router;