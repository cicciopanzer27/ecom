# NURA - E-commerce Olio Extra Vergine di Oliva Sardo

## Panoramica del Progetto

NURA è un e-commerce moderno e professionale sviluppato per la vendita di oli d'oliva extra vergine prodotti in Sardegna. Il sito rappresenta un significativo miglioramento rispetto al prototipo Lovable precedente, offrendo un'esperienza utente coinvolgente e funzionalità e-commerce complete.

## Caratteristiche Principali

### 🎨 Design e User Experience
- **Interfaccia moderna** con design responsive per tutti i dispositivi
- **Palette colori** ispirata ai toni naturali del brand (ambra, pietra, verde oliva)
- **Typography elegante** e leggibile per tutti i target di età
- **Animazioni fluide** e micro-interazioni per un'esperienza premium
- **Navigazione intuitiva** con menu sticky e scroll smooth

### 🛒 Funzionalità E-commerce
- **Catalogo prodotti** con 3 varietà di olio (Classico, Lentisco, Mirto)
- **Sistema carrello** completo con gestione quantità e rimozione prodotti
- **Calcolo automatico** di subtotale, spedizione e totale
- **Spedizione gratuita** per ordini superiori a €50
- **Checkout simulato** (pronto per integrazione pagamenti reali)
- **Gestione stato** del carrello persistente durante la navigazione

## Tecnologie Utilizzate

- **React 18** - Framework JavaScript moderno
- **Vite** - Build tool veloce e ottimizzato
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componenti UI di alta qualità
- **Lucide React** - Icone moderne e scalabili

## Prodotti Disponibili

### 1. Olio Extra Vergine di Oliva - €24.90
- **Bestseller** del catalogo
- Estratto a freddo dalle migliori olive sarde
- Acidità inferiore a 0.3%
- Formato 500ml

### 2. Aromatizzato al Lentisco - €28.90
- **Edizione Limitata**
- Aromatizzato con lentisco selvatico sardo
- Ideale per piatti di pesce

### 3. Aromatizzato al Mirto - €28.90
- **Novità** della gamma
- Con bacche di mirto della tradizione sarda
- Perfetto per carni

## Installazione e Avvio

```bash
# Installazione dipendenze
pnpm install

# Avvio server di sviluppo
pnpm run dev

# Build per produzione
pnpm run build
```

## Miglioramenti Rispetto al Prototipo Precedente

- ✅ **Identità visiva coerente** con il brand NURA
- ✅ **Layout professionale** e moderno
- ✅ **Sistema carrello completo** con gestione stato
- ✅ **Responsive design** ottimizzato
- ✅ **Storytelling integrato** della marca

---

**Sviluppato per NURA - Olio Extra Vergine di Oliva Sardo**

## Responsive & Breakpoints

Il progetto usa TailwindCSS con i breakpoint standard. Verificare queste larghezze durante i test:

- Mobile (sm): up to 640px — layout a colonna, menu mobile, cart bottom-sheet
- Tablet (md): 641px - 768px — griglie a 2 colonne, immagini più grandi
- Desktop (lg / xl): from 1024px — layout a colonne multiple, side drawer per il carrello

Test rapido locale:

1. Avviare il frontend: `pnpm run dev`
2. Aprire Chrome DevTools -> Toggle device toolbar -> testare i seguenti dispositivi: iPhone 13, iPad, Desktop
3. Verificare: menu mobile, immagini ridimensionate, cart behavior (bottom-sheet su mobile, drawer su desktop)

Se vuoi, posso aggiungere Playwright E2E che esegue queste verifiche automaticamente.

## Commands

See `COMMANDS.md` for a curated list of common commands (install, dev, build, server, Docker, env management) with PowerShell and bash examples.

---

Quick link:

- `COMMANDS.md`
