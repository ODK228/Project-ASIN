CREATE DATABASE agriculteursDB;
USE agriculteursDB;

CREATE TABLE Agriculteurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL
);

CREATE TABLE Cultures (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL
);

CREATE TABLE Departements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL
);

CREATE TABLE Terrains (
  id INT AUTO_INCREMENT PRIMARY KEY,
  agriculteur_id INT,
  culture_id INT,
  departement_id INT,
  superficieTotale INT,
  superficieExploitee INT,
  benefice DECIMAL(10, 2),
  FOREIGN KEY (agriculteur_id) REFERENCES Agriculteurs(id),
  FOREIGN KEY (culture_id) REFERENCES Cultures(id),
  FOREIGN KEY (departement_id) REFERENCES Departements(id)
);
