DROP DATABASE `burgers_db`;
/* Create and use the burgers db */
CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

/* Create a table for all your burgers */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 200) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) );
    
DROP TABLE `burgers`;