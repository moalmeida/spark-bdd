BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS `Datos` (
	`Cliente`	integer,
	`Variable`	text,
	`Valor`	text
);

INSERT INTO `Datos` (Cliente,Variable,Valor) VALUES
 (1,'Genero','M'),
 (2,'Genero','M'),
 (3,'Genero','F'),
 (4,'Genero','M'),
 (5,'Genero','M'),
 (6,'Genero','M'),
 (7,'Genero','F'),
 (8,'Genero','M'),
 (9,'Genero','F'),
 (1,'Ciudad','Bogota'),
 (2,'Ciudad','Cali'),
 (3,'Ciudad','Bogota'),
 (4,'Ciudad','Medelin'),
 (5,'Ciudad','Medelin'),
 (6,'Ciudad','Barranquilla'),
 (7,'Ciudad','Cali'),
 (8,'Ciudad','Bogota'),
 (9,'Ciudad','Medelin'),
 (1,'Mascota','Si'),
 (2,'Mascota','Si'),
 (3,'Mascota','Si'),
 (4,'Mascota','No'),
 (5,'Mascota','Si'),
 (6,'Mascota','No'),
 (7,'Mascota','No'),
 (8,'Mascota','No'),
 (9,'Mascota','Si');

CREATE TABLE IF NOT EXISTS `Clientes` (
	`ClienteID`	integer,
	`Nombre`	TEXT,
	PRIMARY KEY(`ClienteID`)
);

INSERT INTO `Clientes` (ClienteID,Nombre) VALUES
 (1,'Juan'),
 (2,'Pepe'),
 (3,'Maria'),
 (4,'Jose'),
 (5,'David'),
 (6,'Jaime'),
 (7,'Diana'),
 (8,'Ivan'),
 (9,'Cata');

COMMIT;
