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

insert into jogador (nomeJogador, posicao)values
('Rafael','Goleiro'),
('Janadrei','Goleiro'),
('Arboleda','Zageiro'),
('Diego Costa','Zageiro'),
('Alan Franco','Zageiro'),
('Ferraresi','Zageiro'),
('Rafinha','Lateral'),
('Welington','Lateral'),
('Igor Vinícius','Lateral'),
('Patryck','Lateral'),
('João Moreira','Lateral'),
('Alisson', 'Meio-Campista'),
('Pablo Maia','Meio-Campista'),
('Rodrigo Nestor','Meio-Campista'),
('M.Arujo', 'Meio-Campista'),
('Bobadilla',  'Meio-Campista'),
('G.Gallopo',  'Meio-Campista'),
('Luiz Gustavo',  'Meio-Campista'),
('Rodriguinho',  'Meio-Campista'),
('F.Nefrucci', 'Meio-Campista'),
('J.Callri', 'Atacante'),
('Luciano Neves','Atacante'),
('Wellington Rato', 'Atacante'),
('Lucas Moura', 'Atacante'),
('Ferreira', 'Atacante'),
('André Silva','Atacante'),
('Erick', 'Atacante'),
('Juan', 'Atacante'),
('William Gomes', 'Atacante');

select * from usuario;