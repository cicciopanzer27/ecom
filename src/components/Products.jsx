import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Leaf, Droplets, Sparkles } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

// Import delle immagini
import olio1 from '../assets/o2.jpg'
import olio2 from '../assets/o3.jpg'
import olio3 from '../assets/o4.jpg'
import olio4 from '../assets/o5.jpg'
import olio5 from '../assets/o6.jpg'

const Products = ({ onAddToCart }) => {
  const { t } = useLanguage()

  // Default (local) products used as fallback when the backend is unavailable
  const localProducts = [
    {
      id: 1,
      name: t('classicOil'),
      description: t('classicDesc'),
      price: 24.9,
      originalPrice: 29.9,
      size: '500ml',
      image: olio2,
      rating: 5,
      reviews: 47,
      badge: t('bestseller'),
      features: [
        t('coldExtracted'),
        t('sardianOlives'),
        t('lowAcidity'),
        t('harvest2024')
      ]
    },
    {
      id: 2,
      name: t('lentiscoOil'),
      description: t('lentiscoDesc'),
      price: 28.9,
      size: '500ml',
      image: olio3,
      rating: 5,
      reviews: 32,
      badge: t('limitedEdition'),
      features: [
        t('wildLentisco'),
        t('mediterraneanAroma'),
        t('limitedProduction'),
        t('idealForFish')
      ]
    },
    {
      id: 3,
      name: t('mirtoOil'),
      description: t('mirtoDesc'),
      price: 28.9,
      size: '500ml',
      image: olio4,
      rating: 5,
      reviews: 28,
      badge: t('newProduct'),
      features: [
        t('myrtle'),
        t('intenseFlavorTitle'),
        t('sardianTradition'),
        t('perfectForMeat')
      ]
    }
  ]

  const [products, setProducts] = useState(localProducts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Determine API base: prefer Vite env, then window var, then localhost
  const API_BASE = import.meta.env.VITE_API_BASE || window.__API_BASE__ || 'http://localhost:4000'

  useEffect(() => {
    let mounted = true
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`${API_BASE}/api/products`, { cache: 'no-store' })
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
        const data = await res.json()
        if (mounted && Array.isArray(data) && data.length > 0) {
          // Map backend product shape to the frontend shape if needed
          const mapped = data.map((p) => ({
            id: p.id,
            name: p.title || p.name || p.sku,
            description: p.description || '',
            price: p.price || 0,
            size: p.size || '500ml',
            image: p.image || olio2,
            rating: p.rating || 5,
            reviews: p.reviews || 0,
            badge: p.badge || null,
            features: p.features || []
          }))
          setProducts(mapped)
        }
      } catch (err) {
        console.warn('Could not fetch products from API:', err.message)
        setError(err.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchProducts()
    return () => { mounted = false }
  }, [API_BASE])

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
        {loading && (
          <div className="text-center py-12">
            <div className="loader mx-auto mb-4" />
            <p className="text-stone-600">{t('loadingProducts') || 'Caricamento prodotti...'}</p>
          </div>
        )}

        {error && (
          <div className="p-4 mb-6 rounded-lg bg-rose-50 border border-rose-100 text-rose-700">
            {t('productsLoadError') || 'Impossibile caricare i prodotti dal server. Vengono mostrati i prodotti demo.'}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
