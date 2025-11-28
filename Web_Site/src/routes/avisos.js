var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar_halloween", function (req, res) {
   avisoController.listar_halloween(req, res);
});

router.get("/listar_ima", function (req, res) {
   avisoController.listar_ima(req, res);
});

router.get("/listar_ham", function (req, res) {
   avisoController.listar_ham(req, res);
});

router.get("/listar_festivalTemaki", function (req, res) {
   avisoController.listar_festivalTemaki(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
   avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
   avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar_halloweenVA/:idUsuario", function (req, res) {
   console.log('Entrei rotas')
   avisoController.publicar_halloweenVA(req, res);
});

router.post("/publicar_ima/:idUsuario", function (req, res) {
   console.log('Entrei rotas')
   avisoController.publicar_ima(req, res);
});

router.post("/publicar_ham/:idUsuario", function (req, res) {
   console.log('Entrei rotas')
   avisoController.publicar_ham(req, res);
});

router.post("/publicar_festivalTemaki/:idUsuario", function (req, res) {
   console.log('Entrei rotas')
   avisoController.publicar_festivalTemaki(req, res);
});

module.exports = router;