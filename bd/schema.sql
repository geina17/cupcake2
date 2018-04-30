create database baked;
use baked;

CREATE TABLE cakes (
	id int NOT NULL AUTO_INCREMENT,
	cake_name varchar(50) NOT NULL,
	eatin BOOLEAN NOT NULL,
	PRIMARY KEY (id)
)