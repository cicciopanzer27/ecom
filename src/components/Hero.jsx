import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, MapPin, Award, Leaf } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import heroImage from '../assets/o1.jpg'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-700">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">{t('location')}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-stone-800 leading-tight">
                {t('heroTitle')}
                <span className="block text-green-700">{t('heroSubtitle')}</span>
              </h1>
              
              <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                {t('heroDescription')}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-green-700" />
                </div>
                <span className="text-stone-700 font-medium">{t('coldPressed')}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Leaf className="h-5 w-5 text-green-700" />
                </div>
                <span className="text-stone-700 font-medium">{t('natural')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg font-medium"
                onClick={() => document.getElementById('prodotti')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('discoverProducts')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-3 text-lg font-medium"
                onClick={() => document.getElementById('storia')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('ourStoryBtn')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-800">150</div>
                <div className="text-sm text-stone-600">{t('oliveTrees')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-800">3</div>
                <div className="text-sm text-stone-600">{t('uniqueVarieties')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-800">100%</div>
                <div className="text-sm text-stone-600">{t('sardinian')}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Oli NURA - Prodotti artigianali sardi" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-stone-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">NURA</div>
                <div className="text-sm text-stone-600">{t('limitedEdition')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
