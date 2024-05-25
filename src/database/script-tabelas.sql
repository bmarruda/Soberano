-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE soberano;

USE soberano;


CREATE TABLE jogador (
	idJogador INT PRIMARY KEY AUTO_INCREMENT,
	nomeJogador VARCHAR(50),
	camisa int,
	posicao varchar(20)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkjogador INT,
	FOREIGN KEY (fkjogador) REFERENCES jogador(idJogador)
);

insert into jogador (nomeJogador, camisa, posicao)values
('Rafael', 23, 'Goleiro'),
('Jnadrei', 93, 'Goleiro'),
('Young', 50, 'Goleiro'),
('Arboleda', 5, 'Zageiro'),
('Diego Costa', 4, 'Zageiro'),
('Sabino', 35, 'Zageiro'),
('Alan Franco', 28, 'Zageiro'),
('Ferraresi', 32, 'Zageiro'),
('Matheus Belém', 44, 'Zageiro'),
('Rafinha',13, 'Lateral'),
('Welington',6, 'Lateral'),
('Igor Vinícius',2, 'Lateral'),
('Patryck',36, 'Lateral'),
('João Moreira',30, 'Lateral'),
('Alisson', 25, 'Meio-Campista'),
('Pablo Maia', 29, 'Meio-Campista'),
('Rodrigo Nestor', 11, 'Meio-Campista'),
('James Rodriguez', 55, 'Meio-Campista'),
('M.Arujo', 15, 'Meio-Campista'),
('Bobadilla', 21, 'Meio-Campista'),
('G.Gallopo', 8, 'Meio-Campista'),
('Luiz Gustavo', 16, 'Meio-Campista'),
('Rodriguinho', 18, 'Meio-Campista'),
('F.Nefrucci', 46, 'Meio-Campista'),
('J.Callri', 9, 'Atacante'),
('Luciano Neves', 10, 'Atacante'),
('Wellington Rato', 27, 'Atacante'),
('Lucas Moura', 7, 'Atacante'),
('Ferreira', 47, 'Atacante'),
('André Silva', 17, 'Atacante'),
('Erick', 33, 'Atacante'),
('Juan', 31, 'Atacante'),
('William Gomes', 31, 'Atacante');
