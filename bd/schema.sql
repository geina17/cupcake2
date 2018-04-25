create database baked_db;
use baked_db;

CREATE TABLE cakes (
	id int NOT NULL AUTO_INCREMENT,
	cake_name varchar(50) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
