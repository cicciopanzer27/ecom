const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const { initData } = require('./store');

const app = express();
const PORT = process.env.PORT || 4000;

// Security middlewares
app.use(helmet());

// Basic rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);

// CORS: allow only local dev and production env var
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];
if (process.env.FRONTEND_ORIGIN) allowedOrigins.push(process.env.FRONTEND_ORIGIN);

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' })); // limit body size

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

initData();

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
