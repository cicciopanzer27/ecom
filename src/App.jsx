import { useState } from 'react'
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
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
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

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const handleCheckout = () => {
    // Simulazione del processo di checkout
    alert('Funzionalità di checkout in sviluppo! Grazie per aver testato la demo.')
    setIsCartOpen(false)
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header 
          cartItems={cartItems.length} 
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
