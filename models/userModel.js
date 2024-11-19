// const db = require('../config/db');

// const User = {
//     findByUsername: (username, callback) => {
//         const query = 'SELECT * FROM users WHERE username = ?';
//         db.query(query, [username], callback);
//     },
//     create: (username, password, callback) => {
//         const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//         db.query(query, [username, password], callback);
//     }
// };

// module.exports = User;
const db = require('../config/db');

const User = {
    // Find a user by email
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], callback);
    },

    // Create a new user with username, email, and password
    create: (username, email, password, callback) => {
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, password], callback);
    }
};

module.exports = User;
