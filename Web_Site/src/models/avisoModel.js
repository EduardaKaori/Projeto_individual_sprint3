var database = require("../database/config");

function listar_halloween() {
   console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
   var instrucaoSql = `
       SELECT 
    a.idAvaliacao,
    a.avaliacao,
    a.descricao,
    a.dtEnvioHora,
    a.fkUsuario,
    a.fkEvento,
    u.idUsuario,
    u.nome,
    u.email
FROM
     usuario AS u 
        LEFT JOIN
   avaliacao AS a ON a.fkUsuario = u.idUsuario
        JOIN
    evento AS e ON e.idEvento = a.fkEvento
		WHERE a.fkEvento = 1;
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function listar_ima() {
   console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
   var instrucaoSql = `
       SELECT 
    a.idAvaliacao,
    a.avaliacao,
    a.descricao,
    a.dtEnvioHora,
    a.fkUsuario,
    a.fkEvento,
    u.idUsuario,
    u.nome,
    u.email
FROM
     usuario AS u 
        LEFT JOIN
   avaliacao AS a ON a.fkUsuario = u.idUsuario
        JOIN
    evento AS e ON e.idEvento = a.fkEvento
		WHERE a.fkEvento = 2;
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function listar_ham() {
   console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
   var instrucaoSql = `
       SELECT 
    a.idAvaliacao,
    a.avaliacao,
    a.descricao,
    a.dtEnvioHora,
    a.fkUsuario,
    a.fkEvento,
    u.idUsuario,
    u.nome,
    u.email
FROM
     usuario AS u 
        LEFT JOIN
   avaliacao AS a ON a.fkUsuario = u.idUsuario
        JOIN
    evento AS e ON e.idEvento = a.fkEvento
		WHERE a.fkEvento = 3;
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function listar_festivalTemaki() {
   console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
   var instrucaoSql = `
       SELECT 
    a.idAvaliacao,
    a.avaliacao,
    a.descricao,
    a.dtEnvioHora,
    a.fkUsuario,
    a.fkEvento,
    u.idUsuario,
    u.nome,
    u.email
FROM
     usuario AS u 
        LEFT JOIN
   avaliacao AS a ON a.fkUsuario = u.idUsuario
        JOIN
    evento AS e ON e.idEvento = a.fkEvento
		WHERE a.fkEvento = 4;
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}


function pesquisarDescricao(texto) {
   console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
   var instrucaoSql = `
       SELECT 
    a.idAvaliacao,
    a.avaliacao,
    a.descricao,
    a.dtEnvioHora,
    a.fkUsuario,
    a.fkEvento,
    u.idUsuario,
    u.nome,
    u.email
FROM
     usuario AS u 
        LEFT JOIN
   avaliacao AS a ON a.fkUsuario = u.idUsuario
        JOIN
    evento AS e ON e.idEvento = a.fkEvento
      WHERE a.descricao LIKE '${texto}';
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function publicar_halloweenVA(avaliacao, descricao, idUsuario) {
   console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar_halloweenVA(): ", avaliacao, descricao, idUsuario);
   var instrucaoSql = `
       INSERT INTO avaliacao (fkUsuario, fkEvento, avaliacao, descricao) VALUES ('${idUsuario}', 1, '${avaliacao}', '${descricao}');
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function publicar_ima(avaliacao, descricao, idUsuario) {
   console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar_halloweenVA(): ", avaliacao, descricao, idUsuario);
   var instrucaoSql = `
       INSERT INTO avaliacao (fkUsuario, fkEvento, avaliacao, descricao) VALUES ('${idUsuario}', 2, '${avaliacao}', '${descricao}');
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function publicar_ham(avaliacao, descricao, idUsuario) {
   console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar_halloweenVA(): ", avaliacao, descricao, idUsuario);
   var instrucaoSql = `
       INSERT INTO avaliacao (fkUsuario, fkEvento, avaliacao, descricao) VALUES ('${idUsuario}', 3, '${avaliacao}', '${descricao}');
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function publicar_festivalTemaki(avaliacao, descricao, idUsuario) {
   console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar_halloweenVA(): ", avaliacao, descricao, idUsuario);
   var instrucaoSql = `
       INSERT INTO avaliacao (fkUsuario, fkEvento, avaliacao, descricao) VALUES ('${idUsuario}', 4, '${avaliacao}', '${descricao}');
   `;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

module.exports = {
   listar_halloween,
   listar_ima,
   listar_ham,
   listar_festivalTemaki,
   pesquisarDescricao,
   publicar_halloweenVA, 
   publicar_ima,
   publicar_ham,
   publicar_festivalTemaki
}
