create database baked_db;
use baked_db;

CREATE TABLE cakes (
	id int NOT NULL AUTO_INCREMENT,
	cake_name varchar(50) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

select * from baked_db.cakes;
INSERT INTO cakes (cake,eatin) VALUES ('Lavender Earl Grey Teacake cupcake',false);
INSERT INTO cakes (cake,eatin) VALUES ('Vanilla Butterfly Surprise cupcake',false);
INSERT INTO cakes (cake,eatin) VALUES ('Cherry Blossom cupcake',false);
INSERT INTO cakes (cake,eatin) VALUES ('Marble Brownie Fudge Cheesecake cupcake ',false);
INSERT INTO cakes (cake,eatin) VALUES ('Peanut Butter Fudge cupcake',false);
INSERT INTO cakes (cake,eatin) VALUES ('Lemon Elderflower “English Rose” cupcake',false);
