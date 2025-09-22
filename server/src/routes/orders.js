const express = require('express');
const { readData, writeData } = require('../store');
const { v4: uuidv4 } = require('uuid');
const { z } = require('zod');

const router = express.Router();

const OrderItem = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1),
});

const OrderSchema = z.object({
  items: z.array(OrderItem).min(1),
  customer: z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    address: z.string().optional(),
  }).optional(),
});

// GET /api/orders
router.get('/', (req, res) => {
  const { orders } = readData();
  res.json(orders || []);
});

// POST /api/orders
router.post('/', (req, res) => {
  const parse = OrderSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: parse.error.format() });
  }

  const { items, customer } = parse.data;

  const store = readData();
  store.orders = store.orders || [];

  const order = {
    id: uuidv4(),
    items,
    customer: customer || null,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  store.orders.push(order);
  writeData(store);

  res.status(201).json(order);
});

module.exports = router;
