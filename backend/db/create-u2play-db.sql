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
     role       ENUM('Admin', 'SuperUser', 'User') DEFAULT 'User', 
     birthDate  Date
  ); 

DROP TABLE IF EXISTS posts; 

CREATE TABLE IF NOT EXISTS posts
  ( 
     idPost       INT PRIMARY KEY auto_increment,
     post_title   VARCHAR(50) NOT NULL, 
     content      text NOT NULL,
     created      DateTime default CURRENT_TIMESTAMP,
     userId       INT FOREIGN KEY,
     catId        INT FOREIGN KEY,
     primaryImage VARCHAR(30) NOT NULL,
     slug         VARCHAR(50) UNIQUE NOT NULL,
  ); 

DROP TABLE IF EXISTS category; 

CREATE TABLE IF NOT EXISTS category
  ( 
     catId         INT PRIMARY KEY auto_increment,
     nameCategory  VARCHAR(50) NOT NULL, 
     description   VARCHAR(150) NOT NULL,
     created       DateTime default CURRENT_TIMESTAMP,
     slug          VARCHAR(50) UNIQUE NOT NULL,
  ); 

