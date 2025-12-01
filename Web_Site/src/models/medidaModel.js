var database = require("../database/config");

function buscarUltimasMedidasHalloween(idEvento) {

    var instrucaoSql = `
    SELECT 
SUM(a.avaliacao) as 'soma',
COUNT(a.avaliacao) as 'quantidade'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = ${idEvento};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasIma(idIma) {

    var instrucaoSql = `
    SELECT 
SUM(a.avaliacao) as 'soma',
COUNT(a.avaliacao) as 'quantidade'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 2;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasHam(idHam) {

    var instrucaoSql = `
    SELECT 
SUM(a.avaliacao) as 'soma',
COUNT(a.avaliacao) as 'quantidade'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 3;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasFestival(idFestival) {

    var instrucaoSql = `
    SELECT 
SUM(a.avaliacao) as 'soma',
COUNT(a.avaliacao) as 'quantidade'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 4;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidasHalloween,
    buscarUltimasMedidasIma,
    buscarUltimasMedidasHam,
    buscarUltimasMedidasFestival
}
