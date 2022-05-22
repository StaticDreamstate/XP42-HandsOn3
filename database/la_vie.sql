DROP DATABASE `laVie_clinica`;
CREATE DATABASE `laVie_clinica`;
USE `laVie_clinica`;

CREATE TABLE `psicologos` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	`sobrenome` varchar(100) NOT NULL,
	`email` varchar(150) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`apresentacao` varchar(255) NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

insert into `psicologos` (

	`id`,
	`nome`,
	`sobrenome`,
	`email`,
	`senha`, 
	`apresentacao` )

values (
	1,
	'Jack',
	'The Ripper',
	'whitechapel_daddy@london.uk',
	'123kill',
	'Come on! Everybody knows me!'
);

CREATE TABLE `pacientes` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	`sobrenome` varchar(100) NOT NULL,
	`email`varchar(150) NOT NULL,
	`data_nascimento` date DEFAULT NOW(),
	PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

insert into `pacientes` (
	`id`,
	`nome`,
	`sobrenome`,
	`email`, 
	`data_nascimento` )

values (
	1, 
	"Lady Burnt",
	"Mind",
	"voices_in_my_head@batshit.uk",
	DEFAULT
	);
