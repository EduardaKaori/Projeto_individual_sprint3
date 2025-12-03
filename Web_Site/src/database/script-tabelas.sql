CREATE DATABASE projeto_individual;
USE projeto_individual;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT, 
nome VARCHAR(45), 
email VARCHAR(150),
senha VARCHAR(20)
)AUTO_INCREMENT = 1000;

CREATE TABLE evento (
idEvento INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
descricao VARCHAR(200), 
dtEvento  DATE
);

CREATE TABLE avaliacao (
idAvaliacao INT auto_increment, 
fkUsuario INT,
fkEvento INT, 
avaliacao VARCHAR(45), 
descricao VARCHAR(250),
dtEnvioHora DATETIME DEFAULT current_timestamp,
	CONSTRAINT fkAvaliacaoEvento
		FOREIGN KEY (fkEvento)
			REFERENCES evento(idEvento),
CONSTRAINT fkAvaliacaoUsuario 
	FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario),
CONSTRAINT pkComposta 
	PRIMARY KEY (idAvaliacao, fkUsuario, fkEvento)
);
insert into evento (nome, descricao, dtEvento) VALUES
	('Halloween VA', 'Halloween VA - é um evento que organizamos para os seinens se divertirem na época de halloween, a festas mais horripilante que existe!', '2025-10-26'),
    ('IMA', 'IMA é um evento de integração novo do seinen Vila Alpina, que tem como objetivo incentivar os jovens a se divertirem e criarem laços de amizade.', '2026-04-17'),
    ('HAM', 'HAM é um evento onde você e seu amigo pode ir para comer alguns hamburgueres e se divertir jogando jogos de tabuleiro, que são disponibilizados no local ', '2025-03-30'),
    ('Festival do Temaki', 'Quer comer um delicioso temaki enquanto se diverte vendo apresentações da cultura de Okinawa e jogando bingo com prêmios inéditos? Venha para o Festival do Temaki II', '2025-09-14');