import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="text-stone-700 hover:text-green-700 hover:bg-green-50 flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
        <span className="hidden md:inline">{currentLang?.name}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-stone-200 rounded-lg shadow-lg z-50 min-w-[150px]">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`w-full px-4 py-2 text-left hover:bg-green-50 flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                currentLanguage === language.code ? 'bg-green-50 text-green-700' : 'text-stone-700'
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default LanguageSelector
