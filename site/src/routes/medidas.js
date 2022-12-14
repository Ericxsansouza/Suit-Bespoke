var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/buscar/:idUsuario", function (req, res) {
    medidaController.buscarResultado(req, res);
});

router.get("/dadosCurtida/:idProduto", function (req, res) {
    medidaController.obterDados(req, res);
});

router.get("/grafico", function (req, res) {
    medidaController.grafico(req, res);
});

router.post("/curtir/:idProduto", function (req, res) {
    medidaController.curtir(req, res);
});

module.exports = router;