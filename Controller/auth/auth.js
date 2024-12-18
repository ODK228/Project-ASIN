const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserPassword, getUserIdByEmail } = require("../Users");

// Fonction pour l'inscription d'un nouvel utilisateur
async function register(req, res) {
  // Récupère les données de la requête selon le modèle User
  const { email, password, nom, prenoms, numero } = req.body;

  // Expression régulière pour valider le format de l'email
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  // Vérifie si des paramètres obligatoires sont manquants ou si l'email est mal formaté
  if (!email || !password || !nom || !prenoms || !emailRegex.test(email)) {
    return res.status(400).json({ msg: "Paramètres invalides" });
  }

  try {
    // Vérifiez si l'email existe déjà
    const existingUser = await getUserIdByEmail(email);
    if (existingUser) {
      return res.status(409).json({ msg: "Ce compte existe déjà" });
    }

    // Fonction pour générer un ID unique de 5 caractères
    function generateUniqueId(length) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }

    // Utilisation de la fonction pour générer l'ID
    const id_users = generateUniqueId(5);


    const hashedPassword = await bcrypt.hash(password, 10); // Ajoutez cette ligne pour hacher le mot de passe


    // Prépare les données de l'utilisateur
    const userData = {
      id_users : id_users,
      nom,
      prenoms,
      email,
      numero,
      password: hashedPassword,
      id_typeUsers: 2,
      created: new Date().toISOString().split("T")[0],
    };

    // Crée un nouvel utilisateur
    const { createUser } = require("../Users");
    await createUser(userData);
    console.log("Utilisateur créé avec succès :", userData);

    // Génère un token JWT pour l'utilisateur nouvellement inscrit
    const token = jwt.sign({ email: email }, process.env.SECRET);
    res.setHeader('Authorization', `Bearer ${token}`); // Ajoutez cette ligne pour définir le header
    return res.status(200).json({ token });
  } catch (err) {
    console.error("Erreur lors de la création de l'utilisateur :", err);
    if (!res.headersSent) {
      return res
        .status(500)
        .json({ msg: "Erreur lors de la création de l'utilisateur" });
    }
  }
}

// Fonction pour la connexion d'un utilisateur existant
async function login(req, res) {
  // Récupère les données de la requête
  const { email, password } = req.body;

  // Expression régulière pour valider le format de l'email
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  // Vérifie si des paramètres obligatoires sont manquants ou si l'email est mal formaté
  if (!email || !password || !emailRegex.test(email)) {
    return res.status(400).json({ msg: "Paramètres invalides" });
  }

  try {
    // Crée une nouvelle requête pour récupérer le mot de passe
    req.body = { email };

    // Récupère le mot de passe hashé de l'utilisateur
    const hashedPassword = await new Promise((resolve, reject) => {
      const tempRes = {
        status: function (code) {
          if (code !== 200) reject(new Error("Utilisateur non trouvé"));
          return this;
        },
        send: function (msg) {
          reject(new Error(msg));
        },
        json: function (data) {
          resolve(data);
        },
      };
      getUserPassword(req, tempRes);
    });

    // Vérifie si le mot de passe correspond
    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    if (!isValidPassword) {
      return res.status(401).json({ msg: "Identifiants invalides" });
    }

    // Génère un token JWT pour l'utilisateur connecté
    const token = jwt.sign({ email: email }, process.env.SECRET);
    res.setHeader('Authorization', `Bearer ${token}`); // Ajoutez cette ligne pour définir le header
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(401).json({ msg: "Identifiants invalides" });
  }
}

// Exporte les fonctions register et login
module.exports = {
  register,
  login,
};
