DROP DATABASE IF EXISTS `laVie_clinica`;
CREATE DATABASE `laVie_clinica`;
USE `laVie_clinica`;

CREATE TABLE `psicologos` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	`email` varchar(150) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`apresentacao` varchar(255) NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

insert into `psicologos` (

	`id`,
	`nome`,
	`email`,
	`senha`, 
	`apresentacao` )

values (
	1,
	'Jack The Ripper',
	'whitechapel_daddy@london.uk',
	'123kill',
	'Come on! Everybody knows me!'
);

CREATE TABLE `pacientes` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	`email`varchar(150) NOT NULL,
	`data_nascimento` date NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

insert into `pacientes` (
	`id`,
	`nome`,
	`email`, 
	`data_nascimento` )

values (
	1, 
	"Lady BurntMind",
	"voices_in_my_head@batshit.uk",
	"1910-10-10"
	);


CREATE TABLE `atendimentos`(
	`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`paciente_id` int NOT NULL,
	`psicologo_id` int NOT NULL,
	`data_atendimento` datetime DEFAULT NOW() NOT NULL,
	`observacao` varchar(150) NOT NULL,
	KEY `FK_paciente` (`paciente_id`),
	KEY `FK_psicologo` (`psicologo_id`),
	CONSTRAINT `FK_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE,
	CONSTRAINT `FK_psicologo` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`id`) ON DELETE CASCADE
) ENGINE InnoDB DEFAULT CHARSET = latin1;


insert into `atendimentos` (
	`paciente_id`,
	`psicologo_id`,
	`data_atendimento`,
	`observacao`
)

values (
	1,
	1,
	DEFAULT,
	'There is no salvation. We must sacrifice as soon as possible.'
);


