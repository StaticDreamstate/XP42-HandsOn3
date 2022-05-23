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
	`id_paciente` int NOT NULL,
	`id_psicologo` int NOT NULL,
	`data_atendimento` datetime DEFAULT NOW() NOT NULL,
	`observacao` varchar(150) NOT NULL,
	UNIQUE KEY `UK_atendimento` (`id_paciente`, `id_psicologo`),
	KEY `FK_paciente` (`id_paciente`),
	KEY `FK_psicologo` (`id_psicologo`),
	CONSTRAINT `FK_paciente` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id`) ON DELETE CASCADE,
	CONSTRAINT `FK_psicologo` FOREIGN KEY (`id_psicologo`) REFERENCES `psicologos` (`id`) ON DELETE CASCADE
) ENGINE InnoDB DEFAULT CHARSET = latin1;


insert into `atendimentos` (
	`id_paciente`,
	`id_psicologo`,
	`data_atendimento`,
	`observacao`
)

values (
	1,
	1,
	DEFAULT,
	'There is no salvation. We must sacrifice as soon as possible.'
);


