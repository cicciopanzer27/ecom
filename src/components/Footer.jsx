import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white">NURA</h3>
              <p className="text-stone-300 text-sm">OLIO EVO SARDO</p>
            </div>
            <p className="text-stone-300 leading-relaxed">
              Dai terreni vulcanici del Montiferru, portiamo sulle vostre tavole 
              l'autenticità e la qualità dell'olio extra vergine di oliva sardo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#prodotti" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#storia" className="text-stone-300 hover:text-amber-400 transition-colors">
                  La Nostra Storia
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servizio Clienti</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Spedizioni e Resi
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Termini e Condizioni
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-stone-300 text-sm">
                  <p>Via dei Nuraghi, 150</p>
                  <p>09070 Narbolia (OR)</p>
                  <p>Sardegna, Italia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+393401234567" className="text-stone-300 hover:text-amber-400 transition-colors text-sm">
                  +39 340 123 4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@nura-olio.it" className="text-stone-300 hover:text-amber-400 transition-colors text-sm">
                  info@nura-olio.it
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-stone-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h4 className="text-lg font-semibold text-white">Resta Aggiornato</h4>
            <p className="text-stone-300 text-sm">
              Iscriviti alla nostra newsletter per ricevere novità sui prodotti e offerte esclusive.
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="La tua email"
                className="flex-1 px-4 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              © 2024 NURA. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                Termini
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
