import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 5.90
  const total = subtotal + shipping

  const handleCheckout = () => {
    setIsCheckingOut(true)
    onCheckout()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-amber-600" />
              <h2 className="text-xl font-bold text-stone-800">
                Carrello ({cartItems.length})
              </h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-stone-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  Il tuo carrello è vuoto
                </h3>
                <p className="text-stone-600 mb-6">
                  Aggiungi alcuni dei nostri oli pregiati per iniziare
                </p>
                <Button 
                  onClick={onClose}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Continua lo Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="bg-stone-50 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <h3 className="font-medium text-stone-800 text-sm">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone-600">
                          Formato: {item.size}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-stone-800">
                              €{(item.price * item.quantity).toFixed(2)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                              onClick={() => onRemoveItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-200 p-6 space-y-4">
              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Subtotale</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Spedizione</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuita' : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-amber-600">
                    Spedizione gratuita per ordini superiori a €50
                  </p>
                )}
                <div className="border-t border-stone-200 pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Totale</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  "Elaborazione..."
                ) : (
                  <>
                    Procedi al Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={onClose}
              >
                Continua lo Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
