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
-- Mais uma tabela adicionada 
Create Table respostas(
    idResp INT PRIMARY KEY auto_increment,
    acertos INT,
    fkusuario INT,
    constraint fkusuario foreign key (fkusuario)		
	references usuario(id)
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
('Alisson','Meio-Campista'),
('Pablo Maia','Meio-Campista'),
('Rodrigo Nestor','Meio-Campista'),
('M.Arujo','Meio-Campista'),
('Bobadilla','Meio-Campista'),
('G.Gallopo','Meio-Campista'),
('Luiz Gustavo', 'Meio-Campista'),
('Rodriguinho', 'Meio-Campista'),
('F.Nefrucci','Meio-Campista'),
('J.Callri','Atacante'),
('Luciano Neves','Atacante'),
('Wellington Rato', 'Atacante'),
('Lucas Moura', 'Atacante'),
('Ferreira', 'Atacante'),
('André Silva','Atacante'),
('Erick', 'Atacante'),
('Juan', 'Atacante'),
('William Gomes', 'Atacante');

select * from usuario;

-- Select da porcentagem de cada posição
SELECT j.posicao, COUNT(u.id) AS num_usuarios, 
(COUNT(u.id) / total.total_usuarios) * 100 AS porcentagem_usuarios
FROM jogador j
LEFT JOIN usuario u ON j.idJogador = u.fkjogador
JOIN (SELECT COUNT(*) AS total_usuarios FROM usuario) total
GROUP BY j.posicao, total.total_usuarios
ORDER BY porcentagem_usuarios DESC;


-- Select Ranking dos jogadores
SELECT j.nomeJogador, j.posicao,COUNT(u.id) AS num_usuarios
FROM jogador j
LEFT JOIN usuario u ON j.idJogador = u.fkjogador
GROUP BY j.idJogador, j.nomeJogador, j.posicao
ORDER BY  num_usuarios DESC;
 
-- Select do Grafico de respostas 

SELECT acertos, COUNT(DISTINCT(fkusuario)) AS quantidade_usuarios
FROM respostas
WHERE acertos IN (0, 1, 2, 3, 4, 5)
GROUP BY acertos;

