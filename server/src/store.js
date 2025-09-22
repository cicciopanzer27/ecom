const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data.json');

function initData() {
  if (!fs.existsSync(DATA_FILE)) {
    const initial = {
      products: [
        { id: 'p1', sku: 'SKU001', title: 'Example Product 1', price: 19.9, currency: 'EUR', inventory: 10 },
        { id: 'p2', sku: 'SKU002', title: 'Example Product 2', price: 29.9, currency: 'EUR', inventory: 5 }
      ],
      orders: []
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2));
  }
}

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return { products: [], orders: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

module.exports = { initData, readData, writeData };
