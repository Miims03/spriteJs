const mysql = require('mysql2')

const DB_URL = process.env.DATABASE_URL

const db = mysql.createConnection(DB_URL)

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL !');
})  

module.exports = db