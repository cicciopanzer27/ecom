# TODO: Portare il progetto a deployable

Questo file elenca le attività principali per trasformare l'e-commerce in un progetto pronto per la produzione e una checklist dettagliata di ciò che il cliente deve fornirci domani.

## Attività principali (sintesi)

1. Audit repository & environment setup (IN-PROGRESS)
2. Definire target di deploy e infrastruttura
3. Script di build e configurazioni
4. Gestione environment e segreti
5. Import prodotti e asset
6. Integrazione pagamento e checkout
7. Configurazione spedizioni e tasse
8. Dominio, DNS e SSL
9. CI/CD e deploy automatico
10. Test (unitari, e2e) e QA
11. Performance e ottimizzazioni
12. Analytics, monitoring e error reporting
13. Documentazione e deployment guide
14. Revisione legale e contenuti (privacy, T&C)
15. Smoke test finale e consegna

---

## Descrizione dettagliata e criteri di accettazione

1) Audit repository & environment setup
- Cosa fare: analizzare `package.json`, `vite.config.js`, `tailwind.config.js`, dipendenze, struttura `src/` e scripts.
- Output atteso: istruzioni chiare per avviare il progetto localmente (`pnpm install`, `pnpm run dev`), elenco problemi/blocchi, e branch `dev/setup` (se richiesto).
- Criterio di successo: progetto avviabile localmente senza errori critici.

2) Definire target di deploy e infrastruttura
- Scegliere provider e impostare requisiti (build command, variabili d'ambiente, storage/asset hosting).

3) Script di build e configurazioni
- Assicurare `pnpm run build` produce `dist/` pronto per deploy. Aggiungere script per lint/test.

4) Gestione environment e segreti
- Aggiungere un file `.env.example` e documentare dove configurare le variabili nel provider di deploy.

5) Import prodotti e asset
- Fornire template CSV/JSON per importare prodotti; script di importazione e policy naming per immagini.

6) Integrazione pagamento e checkout
- Implementare provider (Stripe/PayPal). Testare in sandbox.

7) Configurazione spedizioni e tasse
- Documentare regole per i mercati target.

8) Dominio, DNS e SSL
- Istruzioni per assegnare il dominio al deploy e abilitare SSL.

9) CI/CD e deploy automatico
- Pipeline CI che builda, testa e deploya su merge in `main`.

10) Test e QA
- Unit e smoke tests; 1 E2E per checkout.

11) Performance
- Ottimizzare immagini, caching, e lazy-load; Lighthouse score minimo suggerito: 80+ per performance e accessibilità.

12) Analytics & monitoring
- Integrare GA4, Sentry o equivalente.

13) Documentazione
- Aggiornare `README.md` con tutti i comandi e la procedura di deploy.

14) Revisione legale
- Integrare Privacy Policy, T&C e testi cookie forniti dal cliente.

15) Smoke test finale
- Verificare flussi principali e preparare checklist di consegna.

---

## Checklist da richiedere al cliente (da consegnare domani)

Per permetterci di procedere efficacemente, chiediamo al cliente di fornirci i seguenti elementi e informazioni:

1. Catalogo prodotti
   - Formato preferito: CSV o JSON.
   - Campi minimi richiesti per ogni prodotto: sku, title, description, price (EUR), currency, inventory, category, images (filename o URL), weight/dimensions (per spedizioni), tags.
   - Esempio: fornire 5 prodotti di esempio già completi.

2. Immagini e assets grafici
   - Logo in SVG e PNG (preferibile SVG + versione a colori e monocromatica).
   - Immagini prodotto in alta qualità (min 1500px lato lungo) rinominate secondo pattern: sku_imagine1.jpg.
   - Font proprietari o indicazione dei font da usare.

3. Credenziali pagamento (TEST + PRODUZIONE)
   - Provider scelto (es. Stripe, PayPal).
   - Chiavi API test (publishable + secret) e, successivamente, quelle di produzione.
   - Eventuali webhook URL da registrare.

4. Accesso dominio e DNS
   - Accesso al registrar o autorizzazione per modificare i record DNS.
   - Nome del dominio che vogliono usare per produzione.

5. Informazioni su spedizioni e tasse
   - Paesi serviti, tariffe di spedizione (tabella) e corrieri preferiti.
   - Regole fiscali o partita IVA / VAT ID per la fatturazione.

6. Test account e dati di esempio
   - Un account cliente di test (email/password) per QA.
   - Un ordine di esempio (opzionale) per testare flusso.

7. Testi legali e contenuti
   - Privacy policy, termini e condizioni, informativa cookie in Italiano e altre lingue se necessario.

8. Accessi a terze parti
   - Google Analytics / GA4 accesso o Measurement ID.
   - Sentry (o altro) DSN se già esistente.
   - Accessi a servizi esterni (CMS, CRM, ERP) se devono essere collegati.

9. Branding e copy per pagine aziendali
   - Testi per About, Contact, Shipping & Returns, FAQ.

10. Stima traffico e previsione ordini
   - Stima mensile utenti/ordini per dimensionare hosting e caching.

11. Requisiti legali specifici
   - Restrizioni commerciali, limitazioni di vendita per paesi, requisiti GDPR specifici.

12. Preferenza piattaforma di deploy
   - Se hanno già account su Vercel/Netlify/AWS/Cloudflare, fornire l'accesso o user/email per invito.

13. Deadline di go-live e campagne correlate
   - Data di lancio desiderata e promozioni collegate.

---

## Piccolo "contratto" tecnico (inputs/outputs/criteri)

- Input: codice sorgente attuale, asset grafici, catalogo prodotti, credenziali terze parti, accesso dominio.
- Output: sito pubblicato con checkout funzionante in ambiente di produzione, pipeline CI attiva, documentazione di deploy.
- Error modes: mancanza di credenziali di pagamento, assets incompleti, accesso al dominio negato. In questi casi segnaleremo i blocchi e proseguiremo con ambiente di staging.

## Edge cases da considerare

- Catalogo molto grande (>10k prodotti) → richiede import batch e ottimizzazione.
- Prodotti con varianti complesse (misure/colore) → definire schema dati.
- Paesi con regole fiscali complesse → necessità consulenza fiscale.
- Limiti di API/quotas per provider esterni.

---

## Prossimi passi (quello che farò io ora)

1. Procederò con l'AUDIT del repository e proverò ad avviare il progetto localmente. Documenterò eventuali errori e gap.
2. Dopo l'audit, vi chiederò conferma sulla piattaforma di deploy preferita e preparerò la lista finale di variabili d'ambiente da fornire.

### Backend scaffold

- Ho aggiunto una semplice scaffolding server nella cartella `server/` (Node + Express) con API minime per prodotti e ordini e datastore `server/data.json`.
- Per avviare il backend in locale (Windows PowerShell):

```powershell
cd server
npm.cmd install
npm.cmd run dev
```

- Nota: il server è pensato per sviluppo locale; per produzione si dovrà sostituire il datastore con un DB reale e aggiungere autenticazione, validazione e integrazione pagamento.

## Come eseguire frontend + backend in locale (Windows PowerShell)

1) Avviare il backend (porta 4000):

```powershell
cd server
npm.cmd install
npm.cmd run dev
```

2) Avviare il frontend (Vite, default porta 5173):

```powershell
cd ..
pnpm install
pnpm run dev
# oppure con npm
npm.cmd install
npm.cmd run dev
```

3) Visita:
- Frontend: http://localhost:5173
- Backend health: http://localhost:4000/health

Nota: il frontend cerca prodotti su `http://localhost:4000/api/products` di default. Se vuoi cambiare l'endpoint imposta `VITE_API_BASE` in `.env` prima di avviare Vite.

## Deployment & Maintenance checklist (tecnica)

Questa sezione descrive passo-passo le operazioni tecniche da eseguire per portare il progetto in produzione, incluse pratiche di manutenzione e runbook.

1) Preparazione repository
   - Creare un repository GitHub e push del codice (branch `main` per produzione, `develop` o feature branches per sviluppo).
   - Aggiungere `.gitignore` (Node, logs, .env, node_modules, server/data.json)
   - Aggiungere un file `.env.example` con tutte le variabili d'ambiente richieste (VITE_API_BASE, NODE_ENV, STRIPE_* ecc.).

2) Build & script
   - Verificare script in `package.json`: `dev`, `build`, `preview`, `lint`, `test`.
   - Assicurarsi che `pnpm|npm|yarn run build` generi la cartella `dist/` per il frontend.
   - Creare script di postinstall se serve (es. generazione asset).

3) CI (GitHub Actions)
   - Creare workflow per `push`/`pull_request` che esegua:
     - checkout code
     - install (use --legacy-peer-deps solo se necessario)
     - lint
     - run tests
     - build frontend
   - Aggiungere job separato per il backend (build/test) se crescerà.

4) Selezione provider e configurazione deploy
   - Frontend: Vercel / Netlify / Cloudflare Pages sono ottimi per Vite. Configurare:
     - Build command: `npm run build`
     - Output dir: `dist`
     - Env vars: `VITE_API_BASE` -> URL del backend di produzione/staging
   - Backend: Render / Heroku / Railway / DigitalOcean App Platform / AWS App Runner
     - Configurare build e start command: `npm install` + `npm start`
     - Impostare variabili d'ambiente (DB, STRIPE_SECRET, SENTRY_DSN, etc.)
     - Abilitare autoscaling / piani di risorse in base al traffico previsto

5) Database e persistenza
   - Non usare file-based per produzione. Scelta consigliata: Postgres (RDS / Cloud SQL) o managed MongoDB.
   - Migrare dati di esempio e creare migration scripts (consiglio: Prisma o Knex).
   - Backup automatici: abilitare snapshot giornalieri e retention policy (es. 30 giorni).

6) Segreti e variabili d'ambiente
   - Non committare segreti. Fornire `.env.example` e integrare secret manager del provider (Vercel/Render/GCP Secrets).
   - Esempi variabili: `NODE_ENV`, `PORT`, `DATABASE_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SENTRY_DSN`, `VITE_API_BASE`.

7) Integrazione pagamento
   - Configurare Stripe (o altro): chiavi test/prod, webhook endpoints (proteggere con secret), modalità test su staging.
   - Eseguire test E2E della checkout flow in sandbox.

8) SSL, dominio e DNS
   - Configurare dominio in provider (CNAME/ALIAS) e abilitare HTTPS automatico (Let’s Encrypt o provider).
   - Configurare record DNS per API e CDN (A/AAAA, CNAME, TXT per SPF/DKIM se necessario).

9) Logging e monitoring
   - Integrare Sentry (error reporting) e un sistema di logs (provider cloud logs o Papertrail/LogDNA).
   - Abilitare metriche: uptime, error rate, latenza (Prometheus/Grafana o provider integrato).

10) Analytics e privacy
   - Integrare GA4 o alternativa e rendere opzionale tramite cookie banner.
   - Aggiornare privacy policy e cookie policy con strumenti di gestione cookie.

11) Security hardening
   - Abilitare helmet, rate limiter e validazione input nel backend.
   - Scansione dipendenze (Dependabot/OSS scanners) e aggiornamenti regolari.
   - Vulnerability response plan (chi contattare, how to rollback).

12) CI/CD deploy e rollback
   - Deploy automatico al merge su `main` (production) e su `develop` per staging.
   - Implementare canary o preview deploys per pull requests.
   - Script/istruzioni per rollback (ripristinare release precedente o tag)

13) Runbook e playbook (operatività)
   - Documentare procedure per:
     - Verificare deploy (smoke checks)
     - Eseguire rollback
     - Aggiornare DB (migration steps)
     - In caso di incidente: escalation (nomi/contatti), step per mitigation

14) Backup & Disaster Recovery
   - Backup DB giornaliero, test di recovery trimestrale.
   - Snapshot degli storage/asset e retention policy.

15) Manutenzione e SLA
   - Definire tempi di risposta su incidenti e piano di manutenzione (maintenance windows).
   - Automatizzare health checks e alert (es. PagerDuty, OpsGenie o Slack alerts).

16) Post-deploy (verifiche)
   - Eseguire smoke tests: health endpoint, fetch prodotti, creare ordine di test.
   - Verificare integrazione pagamento in modalità test.
   - Controllare logs per errori e performance.

17) Documentazione consegna
   - README con istruzioni di setup, deploy e rollback.
   - Elenco credenziali e accessi (possono essere in un vault esterno o file separato non committato).

---

Ho aggiunto questa checklist al file `TODO.md`. Segno l'attività come completed.

Se vuoi, posso iniziare subito l'audit e provare a far partire il progetto; dimmi se continuo ora o aspettiamo i materiali del cliente domani.

---

*File generato automaticamente: mantieni aggiornato questo TODO man mano che procediamo.*
