const Dashboard = require('../models/dashboardModel');

exports.getItems = (req, res) => {
    const userId = req.params.userId;
    Dashboard.findByUserId(userId, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
};

exports.addItem = (req, res) => {
    const { userId, itemName, description,quantity } = req.body;
    Dashboard.create(userId, itemName, description,quantity, (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Item added successfully' });
    });
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    Dashboard.delete(id, (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Item deleted successfully' });
    });
};
// const Dashboard = require('../models/dashboardModel');

// exports.getItems = (req, res) => {
//     const userId = req.params.userId;

//     Dashboard.findByUserId(userId, (err, results) => {
//         if (err) {
//             console.error('Error fetching items:', err); // Log error for debugging
//             return res.status(500).json({ error: 'Database error', details: err.message });
//         }
//         res.status(200).json(results); // Send results if no error
//     });
// };

// exports.addItem = (req, res) => {
//     const { userId, itemName, description, quantity } = req.body;

//     // Validation for missing fields
//     if (!userId || !itemName || quantity === undefined) {
//         return res.status(400).json({ error: 'Missing required fields: userId, itemName, quantity' });
//     }

//     // Validate quantity
//     if (typeof quantity !== 'number' || quantity <= 0) {
//         return res.status(400).json({ error: 'Quantity must be a positive number' });
//     }

//     // Add the item to the database
//     Dashboard.create(userId, itemName, description, quantity, (err, result) => {
//         if (err) {
//             console.error('Error adding item:', err); // Log error for debugging
//             return res.status(500).json({ error: 'Database error', details: err.message });
//         }

//         res.status(201).json({
//             message: 'Item added successfully',
//             item: {
//                 id: result.insertId, // Assuming insertId is returned for newly created record
//                 user_id: userId,
//                 item_name: itemName,
//                 description: description || null,
//                 quantity: quantity
//             }
//         });
//     });
// };

// exports.deleteItem = (req, res) => {
//     const { id } = req.params;

//     // Validate if id is provided
//     if (!id) {
//         return res.status(400).json({ error: 'Item ID is required' });
//     }

//     // Delete the item from the database
//     Dashboard.delete(id, (err) => {
//         if (err) {
//             console.error('Error deleting item:', err); // Log error for debugging
//             return res.status(500).json({ error: 'Database error', details: err.message });
//         }
//         res.status(200).json({ message: 'Item deleted successfully' });
//     });
// };