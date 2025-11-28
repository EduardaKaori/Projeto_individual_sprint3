var avisoModel = require("../models/avisoModel");

function listar_halloween(req, res) {
   avisoModel.listar_halloween().then(function (resultado) {
       if (resultado.length > 0) {
           res.status(200).json(resultado);
       } else {
           res.status(204).send("Nenhum resultado encontrado!")
       }
   }).catch(function (erro) {
       console.log(erro);
       console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
       res.status(500).json(erro.sqlMessage);
   });
}

function listar_ima(req, res) {
   avisoModel.listar_ima().then(function (resultado) {
       if (resultado.length > 0) {
           res.status(200).json(resultado);
       } else {
           res.status(204).send("Nenhum resultado encontrado!")
       }
   }).catch(function (erro) {
       console.log(erro);
       console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
       res.status(500).json(erro.sqlMessage);
   });
}

function listar_ham(req, res) {
   avisoModel.listar_ham().then(function (resultado) {
       if (resultado.length > 0) {
           res.status(200).json(resultado);
       } else {
           res.status(204).send("Nenhum resultado encontrado!")
       }
   }).catch(function (erro) {
       console.log(erro);
       console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
       res.status(500).json(erro.sqlMessage);
   });
}

function listar_festivalTemaki(req, res) {
   avisoModel.listar_festivalTemaki().then(function (resultado) {
       if (resultado.length > 0) {
           res.status(200).json(resultado);
       } else {
           res.status(204).send("Nenhum resultado encontrado!")
       }
   }).catch(function (erro) {
       console.log(erro);
       console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
       res.status(500).json(erro.sqlMessage);
   });
}


function listarPorUsuario(req, res) {
   var idUsuario = req.params.idUsuario;

   avisoModel.listarPorUsuario(idUsuario)
       .then(
           function (resultado) {
               if (resultado.length > 0) {
                   res.status(200).json(resultado);
               } else {
                   res.status(204).send("Nenhum resultado encontrado!");
               }
           }
       )
       .catch(
           function (erro) {
               console.log(erro);
               console.log(
                   "Houve um erro ao buscar os avisos: ",
                   erro.sqlMessage
               );
               res.status(500).json(erro.sqlMessage);
           }
       );
}

function pesquisarDescricao(req, res) {
   var descricao = req.params.descricao;

   avisoModel.pesquisarDescricao(descricao)
       .then(
           function (resultado) {
               if (resultado.length > 0) {
                   res.status(200).json(resultado);
               } else {
                   res.status(204).send("Nenhum resultado encontrado!");
               }
           }
       ).catch(
           function (erro) {
               console.log(erro);
               console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
               res.status(500).json(erro.sqlMessage);
           }
       );
}

function publicar_halloweenVA(req, res) {
    console.log('Entrei controller')
   var avaliacao = req.body.avaliacao;
   var descricao = req.body.descricao;
   var idUsuario = req.params.idUsuario;

   if (avaliacao == '#') {
       res.status(400).send("O título está indefinido!");
   } else if (descricao == undefined) {
       res.status(400).send("A descrição está indefinido!");
   } else if (idUsuario == undefined) {
       res.status(403).send("O id do usuário está indefinido!");
   } else {
       avisoModel.publicar_halloweenVA(avaliacao, descricao, idUsuario)
           .then(
               function (resultado) {
                   res.json(resultado);
               }
           )
           .catch(
               function (erro) {
                   console.log(erro);
                   console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                   res.status(500).json(erro.sqlMessage);
               }
           );
   }
}

function publicar_ima(req, res) {
    console.log('Entrei controller')
   var avaliacao = req.body.avaliacao;
   var descricao = req.body.descricao;
   var idUsuario = req.params.idUsuario;

   if (avaliacao == '#') {
       res.status(400).send("O título está indefinido!");
   } else if (descricao == undefined) {
       res.status(400).send("A descrição está indefinido!");
   } else if (idUsuario == undefined) {
       res.status(403).send("O id do usuário está indefinido!");
   } else {
       avisoModel.publicar_ima(avaliacao, descricao, idUsuario)
           .then(
               function (resultado) {
                   res.json(resultado);
               }
           )
           .catch(
               function (erro) {
                   console.log(erro);
                   console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                   res.status(500).json(erro.sqlMessage);
               }
           );
   }
}
function publicar_ham(req, res) {
    console.log('Entrei controller')
   var avaliacao = req.body.avaliacao;
   var descricao = req.body.descricao;
   var idUsuario = req.params.idUsuario;

   if (avaliacao == '#') {
       res.status(400).send("O título está indefinido!");
   } else if (descricao == undefined) {
       res.status(400).send("A descrição está indefinido!");
   } else if (idUsuario == undefined) {
       res.status(403).send("O id do usuário está indefinido!");
   } else {
       avisoModel.publicar_ham(avaliacao, descricao, idUsuario)
           .then(
               function (resultado) {
                   res.json(resultado);
               }
           )
           .catch(
               function (erro) {
                   console.log(erro);
                   console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                   res.status(500).json(erro.sqlMessage);
               }
           );
   }
}
function publicar_festivalTemaki(req, res) {
    console.log('Entrei controller')
   var avaliacao = req.body.avaliacao;
   var descricao = req.body.descricao;
   var idUsuario = req.params.idUsuario;

   if (avaliacao == '#') {
       res.status(400).send("O título está indefinido!");
   } else if (descricao == undefined) {
       res.status(400).send("A descrição está indefinido!");
   } else if (idUsuario == undefined) {
       res.status(403).send("O id do usuário está indefinido!");
   } else {
       avisoModel.publicar_festivalTemaki(avaliacao, descricao, idUsuario)
           .then(
               function (resultado) {
                   res.json(resultado);
               }
           )
           .catch(
               function (erro) {
                   console.log(erro);
                   console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                   res.status(500).json(erro.sqlMessage);
               }
           );
   }
}




module.exports = {
   listar_halloween,
   listar_ima,
   listar_ham,
   listar_festivalTemaki,
   pesquisarDescricao,
   listarPorUsuario,
   publicar_halloweenVA,
   publicar_ima,
   publicar_ham,
   publicar_festivalTemaki
}