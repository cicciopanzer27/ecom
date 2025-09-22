# Nura E-commerce - Backend (local scaffold)

This is a minimal Node/Express backend scaffold used for local development and to provide simple APIs for products and orders.

Quick start (Windows PowerShell):

```powershell
cd server
pnpm install
pnpm run dev
```

If PowerShell blocks running scripts (execution policy), you can either run `npm` via the Windows shim `npm.cmd` or use a different shell. Example fallback:

```powershell
cd server
npm.cmd install
npm.cmd run dev
```


Endpoints:
- GET /health -> { status: 'ok' }
- GET /api/products -> list products
- GET /api/products/:id -> product details
- GET /api/orders -> list orders
- POST /api/orders -> create an order (body: { items: [{ productId, quantity }], customer: { name, email } })

Notes:
- This uses a simple file `data.json` inside the `server/` folder as a datastore. It's intended for local development only.
- Replace with a real DB (Postgres, MongoDB) for production.
