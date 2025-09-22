import { MapPin, Users, Award, Leaf } from 'lucide-react'
import storyImage from '../assets/o6.jpg'

const Story = () => {
  return (
    <section id="storia" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-600">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">La Nostra Storia</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
                Dalle Radici Sarde
                <span className="block text-amber-600">alla Vostra Tavola</span>
              </h2>
              
              <p className="text-xl text-stone-600 leading-relaxed">
                Nel cuore della Sardegna, tra i terreni vulcanici del Montiferru, 
                nasce la storia di NURA. Un progetto che unisce tradizione millenaria 
                e innovazione sostenibile.
              </p>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-stone-700">
                <p>
                  Il nome <strong>NURA</strong> deriva da "Nurapolis", l'antica città dei nuraghi 
                  che caratterizza il nostro territorio. Come questi monumenti millenari, 
                  il nostro olio rappresenta la continuità tra passato e presente.
                </p>
                
                <p>
                  Il nostro oliveto di <strong>150 piante</strong> si estende sui terreni 
                  vulcanici di Narbolia, dove il microclima mediterraneo e la ricchezza 
                  minerale del suolo conferiscono alle nostre olive un sapore unico e inconfondibile.
                </p>
                
                <p>
                  Ogni bottiglia racconta una storia di <strong>passione artigianale</strong>, 
                  dalla raccolta manuale delle olive alla spremitura a freddo, 
                  preservando tutte le proprietà organolettiche e nutritive del frutto.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-800">Sostenibilità</h3>
                <p className="text-stone-600 text-sm">
                  Coltiviamo nel rispetto dell'ambiente, utilizzando solo metodi naturali 
                  e sostenibili per preservare la terra per le future generazioni.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-800">Tradizione</h3>
                <p className="text-stone-600 text-sm">
                  Manteniamo vive le tecniche tradizionali sarde, tramandate di 
                  generazione in generazione, per garantire autenticità e qualità.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-800">Qualità</h3>
                <p className="text-stone-600 text-sm">
                  Ogni fase della produzione è controllata meticolosamente per 
                  garantire un prodotto di eccellenza che rispetti i più alti standard.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-800">Territorio</h3>
                <p className="text-stone-600 text-sm">
                  Valorizziamo il territorio sardo e le sue peculiarità, 
                  portando nel mondo i sapori autentici della nostra isola.
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-amber-600 pl-6 py-4 bg-white/50 rounded-r-lg">
              <p className="text-lg italic text-stone-700 mb-2">
                "Ogni goccia del nostro olio porta con sé l'essenza della Sardegna, 
                la passione del nostro lavoro e l'amore per questa terra meravigliosa."
              </p>
              <cite className="text-sm font-medium text-stone-600">
                — Marcello Perrotta, Fondatore NURA
              </cite>
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={storyImage} 
                alt="Oliveto NURA in Sardegna" 
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-stone-800">2024</div>
                    <div className="text-xs text-stone-600">Anno di Fondazione</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-stone-800">150</div>
                    <div className="text-xs text-stone-600">Piante di Olivo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-stone-800">100%</div>
                    <div className="text-xs text-stone-600">Biologico</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
