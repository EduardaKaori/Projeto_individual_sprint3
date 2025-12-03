var database = require("../database/config");

function exibirKPIsHalloween() {

    var instrucaoSql = `
SELECT 
COUNT(a.avaliacao) as 'quantidade',
CASE 
WHEN a.avaliacao = 2 THEN 'Ótimo'
WHEN a.avaliacao = 1 THEN 'Bom'
WHEN a.avaliacao = 0 THEN 'Ruim'
END as 'Avaliacao'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 1 and a.avaliacao = 2;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPIsIma() {

    var instrucaoSql = `
SELECT 
COUNT(a.avaliacao) as 'quantidade',
CASE 
WHEN a.avaliacao = 2 THEN 'Ótimo'
WHEN a.avaliacao = 1 THEN 'Bom'
WHEN a.avaliacao = 0 THEN 'Ruim'
END as 'Avaliacao'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 2 and a.avaliacao = 2;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPIsHam() {

    var instrucaoSql = `
SELECT 
COUNT(a.avaliacao) as 'quantidade',
CASE 
WHEN a.avaliacao = 2 THEN 'Ótimo'
WHEN a.avaliacao = 1 THEN 'Bom'
WHEN a.avaliacao = 0 THEN 'Ruim'
END as 'Avaliacao'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 3 and a.avaliacao = 2;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPIsFestival() {

    var instrucaoSql = `
SELECT 
COUNT(a.avaliacao) as 'quantidade',
CASE 
WHEN a.avaliacao = 2 THEN 'Ótimo'
WHEN a.avaliacao = 1 THEN 'Bom'
WHEN a.avaliacao = 0 THEN 'Ruim'
END as 'Avaliacao'
FROM avaliacao as a 
LEFT JOIN usuario as u
	ON u.idUsuario = a.fkUsuario
   left JOIN evento as e 
	ON e.idEvento = a.fkEvento
WHERE a.fkEvento = 4 and a.avaliacao = 2;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    exibirKPIsHalloween,
    exibirKPIsIma,
    exibirKPIsHam,
    exibirKPIsFestival
}
