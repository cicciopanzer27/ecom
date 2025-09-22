const express = require('express');
const { readData } = require('../store');

const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
  const { products } = readData();
  res.json(products);
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const { products } = readData();
  const p = products.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
});

module.exports = router;
