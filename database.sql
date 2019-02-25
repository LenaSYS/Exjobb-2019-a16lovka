DROP DATABASE Test;
CREATE DATABASE Test;
USE Test;

/* Table for datatype JSON with same data size as TINYBLOB */
CREATE TABLE JOSN_Tiny(
	Id INT AUTO_INCREMENT,
    JOSN_Tiny_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype JSON with same data size as BLOB */
CREATE TABLE JSON_Normal(
	Id INT auto_increment,
    JSON_Normal_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype JSON with same data size as MEDIUMBLOB */
CREATE TABLE JSON_Medium(
	Id INT auto_increment,
    JSON_Medium_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype JSON with same data size as LONGBLOB */
CREATE TABLE JSON_Long(
	Id INT auto_increment,
    JSON_Long_Data JSON,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype TINYBLOB */
CREATE TABLE BLOB_Tiny(
	Id INT auto_increment,
    BLOB_Tiny_Data TINYBLOB,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype BLOB */
CREATE TABLE BLOB_Normal(
	Id INT auto_increment,
    BLOB_Normal_Data BLOB,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype MEDIUMBLOB */
CREATE TABLE BLOB_M(
	Id INT auto_increment,
    BLOB_Medium_Data MEDIUMBLOB,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

/* Table for datatype LONGBLOB */
CREATE TABLE BLOB_Long(
	Id INT auto_increment,
    BLOB_Long_Data LONGBLOB,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

