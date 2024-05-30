var jogadorModel = require("../models/empresaModel");

function buscarPornomeJogador(req, res) {
  var nomeJogador = req.query.nomeJogador;

  jogadorModel.buscarPornomeJogador(nomeJogador).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  jogadorModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  jogadorModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var nomeJogador = req.body.nomeJogador;
  var posicao = req.body.posicao;

  jogadorModel.buscarPornomeJogador(nomeJogador).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o nomeJogador ${nomeJogador} já existe` });
    } else {
      jogadorModel.cadastrar(posicao, nomeJogador).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPornomeJogador,
  buscarPorId,
  cadastrar,
  listar,
};
