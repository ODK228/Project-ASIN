CREATE DATABASE agricultorsDB;
USE agricultorsDB;

CREATE TABLE Agricultors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL
);

CREATE TABLE Culturs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL
);

CREATE TABLE Departements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL
);

CREATE TABLE Area (
  id INT AUTO_INCREMENT PRIMARY KEY,
  agricultor_id INT,
  cultur_id INT,
  departement_id INT,
  total_area INT,
  used_area INT,
  gain DECIMAL(10, 2),
  FOREIGN KEY (agricultor_id) REFERENCES Agricultors(id),
  FOREIGN KEY (cultur_id) REFERENCES Culturs(id),
  FOREIGN KEY (departement_id) REFERENCES Departements(id)
);
