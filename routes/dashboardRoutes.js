const express = require('express');
const { getItems, addItem, deleteItem ,getUserById } = require('../controllers/dashboardController');
const router = express.Router();

router.get('/:userId', getItems);
router.post('/', addItem);
router.delete('/:id', deleteItem);
router.get('/items/:userId', getUserById);

module.exports = router;
