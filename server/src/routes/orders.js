const express = require('express');
const { readData, writeData } = require('../store');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// GET /api/orders
router.get('/', (req, res) => {
  const { orders } = readData();
  res.json(orders);
});

// POST /api/orders
router.post('/', (req, res) => {
  const { orders } = readData();
  const { items, customer } = req.body;
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must contain items' });
  }

  const order = {
    id: uuidv4(),
    items,
    customer: customer || null,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  writeData({ orders, products: readData().products });

  res.status(201).json(order);
});

module.exports = router;
