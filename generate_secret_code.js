const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex');
console.log('Votre clé secrète est :', secret);