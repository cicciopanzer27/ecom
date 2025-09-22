# Checklist per il cliente — Materiali necessari per completare il deploy

Questa checklist elenca in modo dettagliato tutto ciò che il cliente deve fornire per permetterci di importare i prodotti, preparare il sito e procedere al deploy in staging/produzione.

---

## 1) Catalogo prodotti (obbligatorio)
- File in formato CSV o JSON.
- Campi minimi richiesti per ogni prodotto:
  - sku (string, univoco)
  - title (string)
  - description (string, HTML o plain text)
  - price (number) - prezzo unitario
  - currency (string) - es. EUR
  - inventory (integer) - quantità disponibile
  - category (string)
  - images (array o comma-separated filenames o URLs)
  - weight (number, opzionale)
  - dimensions (string o object, opzionale)
  - tags (string[] o comma-separated)
  - variants (opzionale) - se presenti, schema per varianti (es. size,color)
- Regole richieste:
  - sku univoci: non devono esserci duplicati
  - price in numerico: usare il punto come separatore decimale
  - se fornite URLs per immagini, devono essere pubbliche o accessibili
- Esempio CSV/JSON di esempio richiesto: almeno 5 prodotti completi per test

## 2) Immagini e assets (obbligatorio)
- Cartella compressa ZIP con le immagini prodotto nominate con lo sku: `SKU001_1.jpg`, `SKU001_2.jpg`...
- Formati consigliati: JPEG/PNG/WebP
- Risoluzione consigliata: almeno 1500px lato lungo
- Versioni di logo: SVG (preferibile), PNG (color + monocromatico)
- File icone, favicon, e versioni per social (opzionale ma consigliato)

## 3) Testi e contenuti (obbligatorio)
- Copia per le pagine statiche: Home (short), About, Contact, Shipping & Returns, FAQ
- Descrizioni lunghe per prodotti (se non presenti nel CSV), ingredienti e scheda tecnica
- Testi legali: Privacy Policy, Termini e Condizioni, Cookie Policy

## 4) Credenziali e accessi (obbligatorio per deploy completo)
- Account/chiavi di payment gateway (TEST & PRODUCTION): es. Stripe Publishable Key e Secret Key
- Accesso al dominio o autorizzazione per impostare record DNS (registrar login o contatto di chi lo gestisce)
- Accessi ai servizi esterni (Sentry DSN, Google Analytics/GA4 Measurement ID, CMS API keys se necessari)
- Utente di staging (email/password) per QA

## 5) Requisiti logistici e fiscali (obbligatorio)
- Paesi serviti
- Regole di calcolo spedizione (tariffe o livelli per peso/prezzo)
- Informazioni IVA (se si fattura B2B e/o B2C)
- Partita IVA / Company info (per fattura / footer)

## 6) Immagini aggiuntive e risorse marketing (opzionale ma consigliato)
- Hero images (alta risoluzione)
- Banner promozionali
- Contenuti social (video o immagini)

## 7) Preferenze e configurazioni (obbligatorio da chiarire)
- Ambiente di deploy preferito (Vercel / Netlify / Render / DigitalOcean / AWS)
- Email di spedizione transazionale (es. no-reply@domain.it) e provider SMTP
- Metodo di gestione ordini e fulfillment (automatic/manual)

## 8) Webhooks e integrazioni (se applicabile)
- Webhook secret per Stripe (per eventi pagamento, test e prod)
- Endpoint esterni da notificare (ERP/CRM)

## 9) Policy e compliance (obbligatorio)
- Informativa privacy e consenso cookie
- Policy resi e rimborsi
- Indicazioni per etichettatura allergeni (se applicabile)

## 10) Tempistiche e priorità (utile per planning)
- Data di go-live desiderata
- Eventuali campagne marketing collegate (date)
- Priorità di prodotti (es. 20 prodotti top da caricare per primo)

## 11) Formato e modalità di consegna preferite
- Preferiamo un singolo ZIP con:
  - `catalog.json` o `catalog.csv`
  - `images/` folder
  - `logos/` folder
  - `legal/` folder (privacy, t&c, cookie)
  - `readme.txt` con note particolari
- In alternativa: accesso a un S3 / Google Drive con permessi di download

## 12) Controlli di qualità richiesti prima dell'invio
- Verificare che ogni SKU abbia almeno 1 immagine
- Verificare che i prezzi non contengano caratteri non numerici
- Verificare che i link alle immagini funzionino

---

## Come consegnare i file
- Caricare ZIP su Google Drive/Dropbox e inviarmi il link con accesso di download
- Oppure inviare via WeTransfer o upload diretto sul bucket S3 (forniamo le credenziali temporanee su richiesta)

## Note finali
- Se i dati arrivano con problemi (es. SKU duplicati, immagini mancanti) procederò con una breve fase di data-cleaning e ti segnalerò i problemi specifici.
- Per il deploy in produzione è preferibile fornire anche le chiavi di pagamento in modalità PRODUCTION e l'accesso DNS; in alternativa posso deployare uno staging pubblico per testare tutto e poi finalizzare i passaggi di produzione.

---

Salva questo file e invia al cliente: contiene tutto ciò che ci serve per procedere velocemente con il deploy.
