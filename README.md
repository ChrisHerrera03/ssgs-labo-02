# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Nota Importante per lo Studente - Setup Iniziale del Progetto

Benvenuto/a a `labo-string`!

Questo repository è un **template di partenza** per il tuo laboratorio valutato. Come avrai modo di leggere nelle istruzioni del laboratorio, una parte fondamentale del tuo lavoro iniziale (Esercizio 1) consisterà nell'analizzare attentamente la struttura e la configurazione corrente di questo progetto.

**Potresti notare che alcuni aspetti della configurazione iniziale – inclusa questa stessa documentazione (`README.md`), il file `package.json` e la gestione dei file da ignorare (`.gitignore`) – sono stati volutamente lasciati incompleti o potrebbero non seguire tutte le best practice per un progetto Node.js.**

Il tuo primo compito sarà proprio quello di identificare queste aree di miglioramento e apportare le necessarie correzioni e completamenti, come dettagliato nelle istruzioni del laboratorio, per portare il progetto a uno standard qualitativo superiore.

Buona analisi e buon lavoro!

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

### Comandi utili:
* `npm ci` comando usato per poter installare le dipendenze in modo deterministico
* Si consiglia di avviare l'applicazione direttamente sul terminale inserendo `node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]` in quanto usando `npm start` si producono errori dovuti alla mancanza di paramatri che si trovano dopo `node index.js` nello script `start` nel `package.json`.
* `npm test`: comando che permette di eseguire i test
