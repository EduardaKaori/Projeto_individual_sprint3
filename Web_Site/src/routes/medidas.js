var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idHalloween", function (req, res) {
    medidaController.buscarUltimasMedidasHalloween(req, res);
});
router.get("/ultimas/:idIma", function (req, res) {
    medidaController.buscarUltimasMedidasIma(req, res);
});
router.get("/ultimas/:idHam", function (req, res) {
    medidaController.buscarUltimasMedidasHam(req, res);
});
router.get("/ultimas/:idFestival", function (req, res) {
    medidaController.buscarUltimasMedidasFestival(req, res);
});

module.exports = router;