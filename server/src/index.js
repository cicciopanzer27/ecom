const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const { initData } = require('./store');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

initData();

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
