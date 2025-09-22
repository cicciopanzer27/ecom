import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const app = express()
const PORT = process.env.PORT || 4000
const dataPath = path.join(process.cwd(), 'server', 'data', 'nura.json')

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(process.cwd(), 'assets', 'images')))

function readData() {
  const raw = fs.readFileSync(dataPath, 'utf-8')
  return JSON.parse(raw)
}

function writeData(obj) {
  fs.writeFileSync(dataPath, JSON.stringify(obj, null, 2))
}

app.get('/api/products', (req, res) => {
  const db = readData()
  res.json(db.products)
})

app.get('/api/products/:id', (req, res) => {
  const db = readData()
  const p = db.products.find(x => String(x.id) === String(req.params.id))
  if (!p) return res.status(404).send('Not found')
  res.json(p)
})

app.post('/api/orders', (req, res) => {
  const db = readData()
  const order = {
    id: uuidv4(),
    items: req.body.items || [],
    subtotal: req.body.subtotal || 0,
    shipping: req.body.shipping || 0,
    total: req.body.total || 0,
    created_at: new Date().toISOString()
  }
  db.orders.push(order)
  writeData(db)
  res.status(201).json({ id: order.id, created_at: order.created_at })
})

app.get('/api/orders/:id', (req, res) => {
  const db = readData()
  const o = db.orders.find(x => x.id === req.params.id)
  if (!o) return res.status(404).send('Not found')
  res.json(o)
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
