const jwt = require('jsonwebtoken');
const { getUserIdByEmail } = require('../Controller/Users');

async function auth(req, res, next) {
    let decoded;
    const token = req.headers.authorization;

    console.log('En-têtes de la requête:', req.headers); // Log de tous les en-têtes
    console.log('En-tête d\'autorisation reçu:', req.headers.authorization); // Log de l'en-tête d'autorisation

    if (!token) {
        return res.status(401).json({ 'msg': 'Token is missing' });
    }

    try {
        console.log('Token reçu:', token); // Log du token reçu
        decoded = jwt.verify(token.split(' ')[1], process.env.SECRET);
        console.log('Token décodé:', decoded); // Log du token décodé
    } catch(err) {
        console.error('Erreur de vérification du token:', err);
        return res.status(498).json({ 'msg': 'Token is not valid' });
    }

    const userId = await getUserIdByEmail(decoded.email);

    if (userId === false) {
        return res.status(404).json({ 'msg': 'Not found' });
    }

    req.userId = userId;
    next();
}

module.exports = auth;