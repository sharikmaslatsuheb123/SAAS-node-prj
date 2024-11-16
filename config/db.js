const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Suheb',
    database: 'app_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit process if database connection fails
    }
    console.log('Connected to MySQL database');
});

module.exports = db;
