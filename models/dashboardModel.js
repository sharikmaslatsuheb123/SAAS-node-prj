const db = require('../config/db');

const Dashboard = {
    findByUserId: (userId, callback) => {
        const query = 'SELECT * FROM dashboard_items WHERE user_id = ?';
        db.query(query, [userId], callback);
    },
    create: (userId, itemName, description, quantity, callback) => {
        // Fixed query: added '?' for description
        const query = 'INSERT INTO dashboard_items (user_id, item_name, description, quantity) VALUES (?, ?, ?, ?)';
        db.query(query, [userId, itemName, description, quantity], callback);
    },
    delete: (id, callback) => {
        // Fixed table name to match `dashboard_items`
        const query = 'DELETE FROM dashboard_items WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Dashboard;
