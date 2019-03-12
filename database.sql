DROP DATABASE Products;
CREATE DATABASE Products;
USE Products;

/* Table for datatype JSON with same data size as TINYBLOB */
CREATE TABLE JSON_Tiny(
	Id INT AUTO_INCREMENT,
    JSON_Tiny_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype JSON with same data size as BLOB */
CREATE TABLE JSON_Normal(
	Id INT AUTO_INCREMENT,
    JSON_Normal_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype JSON with same data size as MEDIUMBLOB */
CREATE TABLE JSON_Medium(
	Id INT AUTO_INCREMENT,
    JSON_Medium_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype JSON with same data size as LONGBLOB */
CREATE TABLE JSON_Long(
	Id INT AUTO_INCREMENT,
    JSON_Long_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype TINYBLOB */
CREATE TABLE BLOB_Tiny(
	Id INT AUTO_INCREMENT,
    BLOB_Tiny_Data TINYBLOB,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype BLOB */
CREATE TABLE BLOB_Normal(
	Id INT AUTO_INCREMENT,
    BLOB_Normal_Data BLOB,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype MEDIUMBLOB */
CREATE TABLE BLOB_Medium(
	Id INT AUTO_INCREMENT,
    BLOB_Medium_Data MEDIUMBLOB,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

/* Table for datatype LONGBLOB */
CREATE TABLE BLOB_Long(
	Id INT AUTO_INCREMENT,
    BLOB_Long_Data LONGBLOB,
    PRIMARY KEY (Id)
)ENGINE=InnoDB;

