import { createContext, useContext, useState } from 'react'
import { useTranslations } from './translations'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('it')

  const changeLanguage = (language) => {
    setCurrentLanguage(language)
  }

  const translations = useTranslations(currentLanguage)
  
  const t = (key) => translations[key] || key

  const value = {
    currentLanguage,
    changeLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
