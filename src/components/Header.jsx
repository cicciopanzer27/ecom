import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ShoppingCart, Menu, X, User } from 'lucide-react'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '../LanguageContext'

const Header = ({ cartItems = 0, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-800 tracking-tight">
              NURA
            </h1>
            <p className="text-xs text-green-600 -mt-1">OLIO EVO SARDO</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-stone-700 hover:text-green-600 transition-colors font-medium">
              {t('home')}
            </a>
            <a href="#prodotti" className="text-stone-700 hover:text-green-600 transition-colors font-medium">
              {t('products')}
            </a>
            <a href="#storia" className="text-stone-700 hover:text-green-600 transition-colors font-medium">
              {t('ourStory')}
            </a>
            <a href="#contatti" className="text-stone-700 hover:text-green-600 transition-colors font-medium">
              {t('contacts')}
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="ghost" size="sm" className="text-stone-700 hover:text-green-600 hover:bg-green-50">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-stone-700 hover:text-green-600 hover:bg-green-50 relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onCartClick}
              aria-label="Open cart"
              className="relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Open menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-stone-200">
              <a href="#home" className="block px-3 py-2 text-stone-700 hover:text-green-600 transition-colors">
                {t('home')}
              </a>
              <a href="#prodotti" className="block px-3 py-2 text-stone-700 hover:text-green-600 transition-colors">
                {t('products')}
              </a>
              <a href="#storia" className="block px-3 py-2 text-stone-700 hover:text-green-600 transition-colors">
                {t('ourStory')}
              </a>
              <a href="#contatti" className="block px-3 py-2 text-stone-700 hover:text-green-600 transition-colors">
                {t('contacts')}
              </a>
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-stone-700 hover:text-green-600">
                    <User className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-stone-700 hover:text-green-600 relative"
                    onClick={onCartClick}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cartItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItems}
                      </span>
                    )}
                  </Button>
                </div>
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
