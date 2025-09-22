import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Plus, Minus, ShoppingCart, Heart, Star } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const ProductCard = ({ product, onAddToCart }) => {
  const { t } = useLanguage()
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity })
    setQuantity(1)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className={`bg-white/90 backdrop-blur-sm hover:bg-white ${isLiked ? 'text-red-500' : 'text-stone-600'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-stone-800 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < product.rating ? 'text-amber-400 fill-current' : 'text-stone-300'}`} 
            />
          ))}
          <span className="text-sm text-stone-600 ml-2">({product.reviews} {t('reviews')})</span>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {product.features?.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-stone-600">
              <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="border-t border-stone-200 pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-stone-800">
                €{product.price}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-stone-500 line-through">
                  €{product.originalPrice}
                </div>
              )}
            </div>
            
            <div className="text-right">
              <div className="text-sm text-stone-600">{t('format')}</div>
              <div className="font-medium text-stone-800">{product.size}</div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-stone-700">{t('quantity')}:</span>
              <div className="flex items-center border border-stone-300 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-stone-100"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-stone-100"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
            <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {t('addToCart')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
