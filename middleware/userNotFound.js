const { getUserIdById } = require('../Controller/Users');

// Middleware pour gérer les cas où un utilisateur n'est pas trouvé
async function userNotFound(req, res, next) {
    console.log('Corps de la requête :', req.body); // Ajout d'un log pour afficher le corps de la requête

    // Récupère l'ID de l'utilisateur à partir du corps de la requête
    const userId = req.userId;
    console.log('ID utilisateur reçu :', req.body.id_users); // Ajout d'un log pour le débogage

    // Vérifie si l'ID de l'utilisateur est invalide
    if (!userId) {
        return res.status(400).json({ 'msg': 'Bad parameter' });
    }

    // Vérifie si l'utilisateur avec cet ID existe dans la base de données
    const user = await getUserIdById(userId);
    if (!user) {
        return res.status(404).json({ 'msg': 'Not found' });
    }

    // Si l'utilisateur existe, ajoute l'ID à la requête pour le traitement ultérieur
    req.id = userId;
    next(); // Passe au middleware suivant
}

// Exporte la fonction userNotFound pour l'utiliser dans d'autres modules
module.exports = userNotFound;