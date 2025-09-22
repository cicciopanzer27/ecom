import ProductCard from './ProductCard'
import { Leaf, Droplets, Sparkles } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { useEffect, useState } from 'react'

// Products fetched from API
const Products = ({ onAddToCart }) => {
  const { t } = useLanguage()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch('/api/products')
      .then(r => r.json())
      .then(data => { if (mounted) setProducts(data) })
      .catch(err => { if (mounted) setError(err.message) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => { mounted = false }
  }, [])

  return (
    <section id="prodotti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <Droplets className="h-6 w-6" />
            <span className="text-sm font-medium uppercase tracking-wider">{t('ourProducts')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
            {t('oilsOfExcellence')}
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            {t('productsDescription')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">{t('naturalTitle')}</h3>
            <p className="text-stone-600">
              {t('naturalDesc')}
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Droplets className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">{t('coldPressedTitle')}</h3>
            <p className="text-stone-600">
              {t('coldPressedDesc')}
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-800">{t('limitedEditionTitle')}</h3>
            <p className="text-stone-600">
              {t('limitedEditionDesc')}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && <div className="col-span-full text-center">Caricamento prodotti...</div>}
          {error && <div className="col-span-full text-center text-red-500">Errore: {error}</div>}
          {!loading && !error && products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-50 to-stone-50 rounded-2xl border border-stone-200">
          <h3 className="text-2xl font-bold text-stone-800 mb-4">
            {t('cantFind')}
          </h3>
          <p className="text-stone-600 mb-6">
            {t('cantFindDesc')}
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            {t('contactUs')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
