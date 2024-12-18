-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 13 déc. 2024 à 05:18
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `asin_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `cultures`
--

CREATE TABLE `cultures` (
  `id_cultures` varchar(25) NOT NULL,
  `nom` varchar(200) DEFAULT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cultures`
--

INSERT INTO `cultures` (`id_cultures`, `nom`, `created_at`) VALUES
('2DH40', 'Riz', '2024-12-13'),
('QS8D', 'AlvinA Riz', '2024-12-12'),
('Z4SD', 'AlvinA Riz', '0000-00-00');

-- --------------------------------------------------------

--
-- Structure de la table `departements`
--

CREATE TABLE `departements` (
  `id_departements` varchar(255) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `departements`
--

INSERT INTO `departements` (`id_departements`, `nom`, `created_at`) VALUES
('04OLK', 'Alibori', '2024-12-20'),
('1', 'MarcAurel', '2024-12-13'),
('2', 'Departement B', '2023-02-01'),
('3', 'Departement C', '2023-03-01'),
('SKLKLJ', 'LebonCOol', '2024-12-12'),
('T0INV', 'James', '2024-12-20'),
('Y59RL', '00JamesPrank', '2024-12-12'),
('Y8367', 'Cochon', '2024-12-20'),
('Z0MY6', 'Alibori', '2024-12-20');

-- --------------------------------------------------------

--
-- Structure de la table `productions`
--

CREATE TABLE `productions` (
  `id_cultures` varchar(255) NOT NULL,
  `id_users` varchar(255) NOT NULL,
  `superficie` decimal(8,2) NOT NULL,
  `id_productions` varchar(255) NOT NULL,
  `id_departements` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `productions`
--

INSERT INTO `productions` (`id_cultures`, `id_users`, `superficie`, `id_productions`, `id_departements`, `created_at`) VALUES
('2', '2', 200.00, '2', '2', '2023-02-01'),
('2', '3', 300.00, '3', '1', '2023-03-01'),
('700', '10', 120.00, 'T7UU3', '120', '2024-12-13'),
('50', '10', 100.00, 'VMWYN', '10', '2024-12-13');

-- --------------------------------------------------------

--
-- Structure de la table `type_users`
--

CREATE TABLE `type_users` (
  `id_typeUsers` varchar(255) NOT NULL,
  `type_usersName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `type_users`
--

INSERT INTO `type_users` (`id_typeUsers`, `type_usersName`) VALUES
('1', 'Admin'),
('2', 'User'),
('3', 'Guest');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_users` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenoms` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `id_typeUsers` varchar(255) NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_users`, `nom`, `prenoms`, `email`, `numero`, `password`, `id_typeUsers`, `created`) VALUES
('1', 'Doe', 'John', 'john.doe@example.com', '1234567890', 'password123', '1', '2023-01-01'),
('2', 'Smith', 'Jane', 'jane.smith@example.com', '0987654321', 'password456', '2', '2023-02-01'),
('3', 'Brown', 'Charlie', 'charlie.brown@example.com', '1122334455', 'password789', '3', '2023-03-01'),
('ZXOML', 'Ardies', 'Lebon', 'lebonadjanohoun7@gmail.com', '62782902', '$2a$10$3ES4WiwpibWn1d3mxvFc/O2GUJjAsrEd4RYCf8w3u9X2rLW9Zf.ha', '2', '2024-12-12');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cultures`
--
ALTER TABLE `cultures`
  ADD PRIMARY KEY (`id_cultures`);

--
-- Index pour la table `departements`
--
ALTER TABLE `departements`
  ADD PRIMARY KEY (`id_departements`);

--
-- Index pour la table `productions`
--
ALTER TABLE `productions`
  ADD PRIMARY KEY (`id_productions`),
  ADD KEY `productions_id_departements_foreign` (`id_departements`),
  ADD KEY `productions_id_cultures_foreign` (`id_cultures`),
  ADD KEY `productions_id_users_foreign` (`id_users`);

--
-- Index pour la table `type_users`
--
ALTER TABLE `type_users`
  ADD PRIMARY KEY (`id_typeUsers`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD KEY `users_id_typeusers_foreign` (`id_typeUsers`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
