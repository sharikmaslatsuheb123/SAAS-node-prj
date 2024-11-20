const Dashboard = require('../models/dashboardModel');

exports.getItems = (req, res) => {
    const userId = req.params.userId;
    Dashboard.findByUserId(userId, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
};

// exports.addItem = (req, res) => {
//     const { userId, itemName, description,quantity } = req.body;
//     Dashboard.create(userId, itemName, description,quantity, (err) => {
//         if (err) return res.status(500).json({ error: 'Database error' });
//         console.log()
//         res.status(201).json({ message: 'Item added successfully' });
//     });
// };

exports.addItem = (req, res) => {
    const { userId, itemName, description, quantity } = req.body;

    // Log the incoming data for debugging
    console.log("Received data:", { userId, itemName, description, quantity });

    if (!userId || !itemName || quantity === undefined) {
        return res.status(400).json({ error: 'Missing required fields: userId, itemName, quantity' });
    }

    Dashboard.create(userId, itemName, description, quantity, (err, result) => {
        if (err) {
            console.error('Error adding item:', err); // Log error details
            return res.status(500).json({ error: 'Database error', details: err.message });
        }

        res.status(201).json({
            message: 'Item added successfully',
            item: {
                id: result.insertId, // If available
                userId,
                itemName,
                description,
                quantity,
            },
        });
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.userId;

    // Log the userId for debugging
    console.log("Fetching data for userId:", userId);

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId parameter' });
    }

    Dashboard.findByUserId(userId, (err, results) => {
        if (err) {
            console.error('Error fetching user items:', err); // Log error details
            return res.status(500).json({ error: 'Database error', details: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No items found for this user' });
        }

        res.status(200).json({
            message: 'Items retrieved successfully',
            items: results,
        });
    });
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    Dashboard.delete(id, (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Item deleted successfully' });
    });
};

