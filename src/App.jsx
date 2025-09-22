import { useState, useEffect } from 'react'
import { LanguageProvider } from './LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import GoldenCircle from './components/GoldenCircle'
import Products from './components/Products'
import Story from './components/Story'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cartItems')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // match by id AND size (variant-aware)
      const existingItem = prevItems.find(item => item.id === product.id && item.size === product.size)

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      } else {
        return [...prevItems, product]
      }
    })

    // Mostra brevemente il carrello quando si aggiunge un prodotto
    setIsCartOpen(true)
    setTimeout(() => setIsCartOpen(false), 2000)
  }

  // update/remove are variant-aware (id + size)
  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const removeFromCart = (productId, size) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === productId && item.size === size)))
  }

  const handleCheckout = () => {
    // Invia ordine al backend
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shipping = subtotal > 50 ? 0 : 5.90
    const total = subtotal + shipping

    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems, subtotal, shipping, total })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text())
        const data = await res.json()
        // mostra conferma semplice e svuota carrello
        alert(`Ordine creato (id: ${data.id}). Grazie!`)
        setCartItems([])
        setIsCartOpen(false)
      })
      .catch(err => {
        console.error(err)
        alert('Errore durante la creazione dell\'ordine. Riprova più tardi.')
      })
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // persist cart
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } catch (e) {
      // ignore localStorage errors (e.g., privacy mode)
    }
  }, [cartItems])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header 
          cartItems={totalItems} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <main>
          <Hero />
          <GoldenCircle />
          <Products onAddToCart={addToCart} />
          <Story />
        </main>
        
        <Footer />
        
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </LanguageProvider>
  )
}

export default App
