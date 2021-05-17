DROP DATABASE IF EXISTS u2play_db;   
CREATE DATABASE IF NOT EXISTS u2play_db;   
USE u2play_db; 

DROP TABLE IF EXISTS user; 

CREATE TABLE IF NOT EXISTS user 
  ( 
     idUser         INT PRIMARY KEY auto_increment, 
     nickname   VARCHAR(25) UNIQUE NOT NULL, 
     password   CHAR(60) NOT NULL, 
     first_name VARCHAR(50) NOT NULL, 
     last_name  VARCHAR(50) NOT NULL, 
     email      VARCHAR(100) UNIQUE NOT NULL, 
     role       ENUM('Admin', 'SuperUser') DEFAULT 'SuperUser', 
     birthDate  Date
  ); 