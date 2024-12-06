INSERT INTO `cultures` (`id_cultures`, `nom`) VALUES
('1', 'Culture A'),
('2', 'Culture B'),
('3', 'Culture C');

INSERT INTO `departements` (`id_departements`, `nom`, `created_at`) VALUES
('1', 'Departement A', '2023-01-01'),
('2', 'Departement B', '2023-02-01'),
('3', 'Departement C', '2023-03-01');

INSERT INTO `type_users` (`id_typeUsers`, `type_usersName`) VALUES
('1', 'Admin'),
('2', 'User'),
('3', 'Guest');

INSERT INTO `users` (`id_users`, `nom`, `prenoms`, `email`, `numero`, `password`, `id_typeUsers`, `created`) VALUES
('1', 'Doe', 'John', 'john.doe@example.com', '1234567890', 'password123', '1', '2023-01-01'),
('2', 'Smith', 'Jane', 'jane.smith@example.com', '0987654321', 'password456', '2', '2023-02-01'),
('3', 'Brown', 'Charlie', 'charlie.brown@example.com', '1122334455', 'password789', '3', '2023-03-01');

INSERT INTO `productions` (`id_productions`, `id_cultures`, `id_users`, `superficie`, `id_departements`, `created_at`) VALUES
('1', '1', '1', 100.00, '1', '2023-01-01'),
('2', '2', '2', 200.00, '2', '2023-02-01'),
('3', '3', '3', 300.00, '3', '2023-03-01');