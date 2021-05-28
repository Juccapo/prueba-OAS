CREATE DATABASE ng_torneo_db;

USE ng_torneo_db;

CREATE TABLE torneo(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    nombre VARCHAR(25),
    goles_r1 INT(20),
    goles_r2 INT(20),
    goles_r3 INT(20) 
);

RENAME TABLE torneo to resul_torneo;

DESCRIBE resul_torneo;