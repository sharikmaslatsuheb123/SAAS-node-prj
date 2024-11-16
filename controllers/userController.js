// userController.js

// Add the debug statement before requiring userModel
// console.log(require.resolve('../models/userModel'));

const User = require('../models/userModel');

// Login handler
exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0 || results[0].password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', userId: results[0].id });
    });
};

// Signup handler
// exports.signup = (req, res) => {
//     const { username, password } = req.body;
//     User.create(username, password, (err) => {
//         if (err) return res.status(500).json({ error: 'Database error' });
//         res.status(201).json({ message: 'User created successfully' });
//     });
// };
exports.signup = (req, res) => {
    const { username, password } = req.body;

    // Debugging: Log the received data
    console.log('Signup Request Body:', req.body);

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    User.create(username, password, (err) => {
        if (err) {
            console.error('Database error during user creation:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User created successfully' });
    });
};

