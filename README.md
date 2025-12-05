# Da Lordo a Netto - Calcolatore di Stipendio

Questo è un sito web completo e production-ready per calcolare lo stipendio da lordo a netto in Italia, aggiornato con le regole stimate per il 2026.

## Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Linguaggio**: TypeScript
- **Backend**: Node.js (via Next.js API Routes)

## Funzionalità Principali

- **Calcolo Accurato**: Converte la Retribuzione Annua Lorda (RAL) in stipendio netto mensile e annuale.
- **Dettaglio Completo**: Fornisce un breakdown di tutte le voci: contributi INPS, scaglioni IRPEF, addizionali e detrazioni.
- **Interfaccia Moderna**: UI pulita e semplice, ispirata al design dei siti governativi.
- **SEO Ottimizzato**: Meta tag completi, OpenGraph e dati strutturati JSON-LD per una migliore indicizzazione.
- **Responsive**: Layout mobile-first che si adatta a qualsiasi dimensione dello schermo.

## Struttura del Progetto

```
/src
|-- /app
|   |-- /api/calcolo
|   |   `-- route.ts        # API per il calcolo
|   |-- /calcolatore
|   |   `-- page.tsx        # Pagina del calcolatore
|   |-- globals.css         # Stili globali Tailwind
|   |-- layout.tsx          # Layout principale
|   `-- page.tsx            # Home page
|-- /components
|   |-- CalculatorForm.tsx  # Form principale
|   `-- ResultsCard.tsx     # Card per i risultati
`-- /utils
    `-- calcolo.ts          # Logica di calcolo
```

## Installazione e Avvio

Per eseguire il progetto in locale, segui questi passaggi:

1. **Clona il repository** (o assicurati di avere tutti i file in una cartella).

2. **Installa le dipendenze**:
   Apri un terminale nella root del progetto e lancia il comando:
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```

4. **Apri il browser**:
   Visita [http://localhost:3000](http://localhost:3000) per vedere l'applicazione in funzione.

## Come Funziona il Calcolo

La logica di calcolo si trova in `src/utils/calcolo.ts` e segue questi passaggi:

1.  **Sottrazione Contributi INPS**: Dal lordo annuo viene sottratta l'aliquota INPS a carico del lavoratore (9.19%).
2.  **Calcolo IRPEF**: Sull'imponibile fiscale ottenuto, viene calcolata l'IRPEF lorda applicando le aliquote progressive per scaglioni.
3.  **Applicazione Detrazioni**: Dall'IRPEF lorda vengono sottratte le detrazioni per lavoro dipendente, se applicabili.
4.  **Aggiunta Addizionali**: Vengono calcolate e aggiunte all'imposta totale le addizionali regionali e comunali.
5.  **Risultato Finale**: Il netto annuale è l'imponibile fiscale meno tutte le imposte. Il netto mensile è semplicemente il risultato diviso per 12.
