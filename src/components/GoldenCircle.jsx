import { useLanguage } from '../LanguageContext'
import { Heart, Leaf, Award } from 'lucide-react'

const GoldenCircle = () => {
  const { t } = useLanguage()

  return (
    <section id="golden-circle" className="py-20">
      {/* WHY Section */}
      <div className="why-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-200 text-green-800 rounded-full mb-3">
              PERCHÉ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyTitle')}</h2>
            <p className="text-xl max-w-3xl mx-auto">{t('whyDesc')}</p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-full shadow-lg w-48 h-48 flex items-center justify-center">
              <Heart className="h-20 w-20 text-green-700" />
            </div>
          </div>
        </div>
      </div>
      
      {/* HOW Section */}
      <div className="how-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-200 text-green-800 rounded-full mb-3">
              COME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howTitle')}</h2>
            <p className="text-xl max-w-3xl mx-auto">{t('howDesc')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('sustainability')}</h3>
              <p>{t('sustainabilityDesc')}</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('quality')}</h3>
              <p>{t('qualityDesc')}</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M3 12h18M3 18h18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('tradition')}</h3>
              <p>{t('traditionDesc')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* WHAT Section */}
      <div className="what-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-200 text-green-800 rounded-full mb-3">
              COSA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whatTitle')}</h2>
            <p className="text-xl max-w-3xl mx-auto">{t('whatDesc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/home/ubuntu/upload/o1.jpg" 
                alt="NURA Olio Extra Vergine di Oliva" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{t('classicOil')}</h3>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/home/ubuntu/upload/o2.jpg" 
                alt="NURA Olio Aromatizzato al Lentisco" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{t('lentiscoOil')}</h3>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/home/ubuntu/upload/o3.jpg" 
                alt="NURA Olio Aromatizzato al Mirto" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{t('mirtoOil')}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoldenCircle
