const express = require('express');
const { getItems, addItem, deleteItem } = require('../controllers/dashboardController');
const router = express.Router();

router.get('/:userId', getItems);
router.post('/', addItem);
router.delete('/:id', deleteItem);

module.exports = router;
