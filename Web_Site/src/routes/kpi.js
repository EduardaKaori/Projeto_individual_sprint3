var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/exibirKPIsHalloween", function (req, res) {
    kpiController.exibirKPIsHalloween(req, res);
});

router.get("/exibirKPIsIma", function (req, res) {
    kpiController.exibirKPIsIma(req, res);
});

router.get("/exibirKPIsHam", function (req, res) {
    kpiController.exibirKPIsHam(req, res);
});

router.get("/exibirKPIsFestival", function (req, res) {
    kpiController.exibirKPIsFestival(req, res);
});

module.exports = router;