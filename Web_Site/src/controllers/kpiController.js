var kpiModel = require("../models/kpiModel");

function exibirKPIsHalloween(req, res) {

    var idHalloween = req.params.idHalloween;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.exibirKPIsHalloween(idHalloween).then(function (resultado1) {
        if (resultado1.length > 0) {
            res.status(200).json(resultado1);
        } else {
            res.status(204).send("Nenhum resultado1 encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirKPIsIma(req, res) {

    var idIma = req.params.idIma;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.exibirKPIsIma(idIma).then(function (resultado2) {
        if (resultado2.length > 0) {
            res.status(200).json(resultado2);
        } else {
            res.status(204).send("Nenhum resultado2 encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirKPIsHam(req, res) {

    var idHam = req.params.idHam;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.exibirKPIsHam(idHam).then(function (resultado3) {
        if (resultado3.length > 0) {
            res.status(200).json(resultado3);
        } else {
            res.status(204).send("Nenhum resultado3 encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirKPIsFestival(req, res) {

    var idFestival = req.params.idFestival;

    console.log(`Recuperando as ultimas medidas`);

    kpiModel.exibirKPIsFestival(idFestival).then(function (resultado4) {
        if (resultado4.length > 0) {
            res.status(200).json(resultado4);
        } else {
            res.status(204).send("Nenhum resultado4 encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    exibirKPIsHalloween,
    exibirKPIsIma,
    exibirKPIsHam,
    exibirKPIsFestival
}