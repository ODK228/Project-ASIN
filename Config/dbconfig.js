const mysql = require('mysql2');
const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asin_projet'
};

const db = mysql.createConnection(config);

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
  } else {
    console.log('Connecté à la base de données');
  }
});

module.exports = db;
