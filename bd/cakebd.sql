create database baked_db;
use baked_db;

CREATE TABLE cakes (
  id INT auto_increment primary key NOT NULL,
  cake VARCHAR(100) string,
  eatin boolean
);

select * from baked_db.cakes;
INSERT INTO cakes (id,cake,eatin) VALUES ('','',);