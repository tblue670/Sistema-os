# Sistema Operativo Web — versione 1.4

| Versione | Data | Novità |
|---|---|---|
| 1.4 | 04/11/2026 | Browser con schede, preferiti e siti sulla scrivania; caricamento di qualsiasi file con visualizzatori per PDF, immagini, video, audio, Excel, CSV e Word; app web da .zip; backup su Drive anche dei file |
| 1.3 | 03/11/2026 | Menu Aiuto con versione e novità; icone libere sulla scrivania; finestre flottanti su ogni schermo e “sempre in primo piano”; app installate isolate con dati privati |
| 1.2 | 03/11/2026 | Backup automatico su Google Drive nella cartella scelta, ripristino da Drive |
| 1.1 | 03/11/2026 | Versione per GitHub: installabile come app, funziona offline, app salvate senza limite di spazio |
| 1.0 | 03/11/2026 | Prima versione: scrivania, finestre, app installabili, file, note, agenda, ricerca, PIN, backup su file |

La versione in uso e le novità si leggono in **Aiuto** (menu Start), oltre che in Impostazioni › Informazioni.

Scrivania nel browser con finestre, app installabili, file, note, agenda, calcolatrice e backup.
Funziona su PC e tablet e si può aggiungere alla schermata Home come un'app.

## Contenuto della cartella

| File | A cosa serve |
|---|---|
| `index.html` | Il sistema completo |
| `manifest.webmanifest` | Nome e icona quando lo aggiungi alla schermata Home |
| `sw.js` | Copia locale, così si apre anche senza connessione |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Icone |
| `.nojekyll` | Dice a GitHub di pubblicare i file così come sono |

## Pubblicarlo su GitHub (una volta sola)

1. Accedi a github.com e premi **New** (nuovo repository).
2. Nome: per esempio `sistema-os`. Visibilità: **Public** (GitHub Pages gratuito richiede un repository pubblico). Premi **Create repository**.
3. Nella pagina del repository premi **uploading an existing file** (oppure **Add file › Upload files**).
4. Trascina **tutti** i file di questa cartella, compreso `.nojekyll`. Premi **Commit changes**.
   - Se `.nojekyll` non si vede nella tua cartella, attiva la visualizzazione dei file nascosti, oppure crealo da GitHub con **Add file › Create new file**, nome `.nojekyll`, contenuto vuoto.
5. Vai su **Settings › Pages**. In *Branch* scegli `main` e cartella `/ (root)`, premi **Save**.
6. Dopo uno o due minuti l'indirizzo è: `https://TUONOME.github.io/sistema-os/`

## Installarlo sul tablet o sul telefono

- **Android (Chrome):** apri l'indirizzo, menu ⋮ › **Installa app** (o *Aggiungi a schermata Home*).
- **iPad / iPhone (Safari):** apri l'indirizzo, pulsante Condividi › **Aggiungi alla schermata Home**.
- **PC (Chrome o Edge):** icona di installazione nella barra dell'indirizzo.

## Aggiornare

Carica il nuovo `index.html` con **Add file › Upload files** (sostituisce il vecchio).
Carica anche il nuovo `sw.js` (contiene il numero di versione, es. `sistema-os-1.4`): così tablet e PC prendono subito la versione nuova. Se nel pacchetto non c'è, aprilo su GitHub, premi la matita e scrivi il nuovo numero di versione.

## Dove restano i dati

In questa versione i dati (documenti, note, agenda, app installate) restano **nel browser di ogni dispositivo**: GitHub ospita solo il programma, non i tuoi dati, e nessun altro li vede.

- Per passare i dati da PC a tablet: **Ripristina da Drive** (vedi sotto), oppure **Impostazioni › Salva backup** sul primo e **Ripristina** sul secondo.
- Fai un backup ogni tanto: cancellando i dati di navigazione del browser si perdono.
- Il PIN di blocco protegge l'uso del dispositivo, non è una cifratura dei dati.

L'**Assistente** e la sincronizzazione automatica tra dispositivi funzionano solo nella versione aperta da claude.ai; qui non compaiono.

## Backup su Google Drive

Il sistema salva da solo un backup completo (dati e app) nella cartella di Drive che scegli, qualche secondo dopo ogni modifica e al massimo ogni 10 minuti. Tiene le ultime 10 copie e sposta le più vecchie nel cestino di Drive. Il sistema vede solo la cartella scelta e i file che crea lui, non il resto del tuo Drive.

### Registrazione su Google (una volta sola, circa 10 minuti, gratuita)

Prima pubblica il sistema su GitHub: serve il tuo indirizzo, del tipo `https://tuonome.github.io`.

**1. Crea il progetto**
1. Apri **console.cloud.google.com** e accedi con il tuo account Google (accetta le condizioni, se richiesto).
2. In alto a sinistra, accanto al logo, apri il selettore dei progetti › **Nuovo progetto**. Nome: `Sistema OS` › **Crea**. Poi selezionalo.

**2. Attiva i servizi**
1. Nella casella di ricerca in alto scrivi **Google Drive API**, aprila e premi **Abilita**.
2. Stessa cosa per **Google Picker API** › **Abilita**.

**3. Schermata di accesso**
1. Cerca in alto **Google Auth Platform** (o *Schermata consenso OAuth*) › **Inizia**.
2. Nome app: `Sistema OS`. Email di assistenza: la tua. › Avanti.
3. Pubblico: **Esterno** › Avanti. Email di contatto: la tua › Avanti › accetta › **Crea**.
4. Nel menu a sinistra **Pubblico** › *Utenti di test* › **Add users** › scrivi la tua email Gmail › **Salva**.

**4. ID client**
1. Nel menu a sinistra **Client** › **Crea client**.
2. Tipo di applicazione: **Applicazione web**. Nome: `Sistema OS`.
3. In **Origini JavaScript autorizzate** premi *Aggiungi URI* e scrivi esattamente `https://tuonome.github.io` (senza nulla dopo, senza barra finale).
4. **Crea**. Copia l'**ID client** (finisce con `.apps.googleusercontent.com`).

**5. Chiave API**
1. Cerca in alto **Credenziali** › **Crea credenziali** › **Chiave API**. Copiala.
2. Consigliato: apri la chiave appena creata › *Limitazioni applicazione*: **Siti web**, aggiungi `https://tuonome.github.io/*` › *Limitazioni API*: **Google Picker API** › **Salva**.

**6. Nel Sistema OS**
1. **Impostazioni › Backup automatico su Google Drive**: incolla ID client e chiave API › **Salva codici**.
2. **Scegli cartella** › accedi con Google.
   - Compare l'avviso *“Google non ha verificato questa app”*: è normale, l'app è tua. Premi **Avanzate › Vai a Sistema OS** › **Continua**.
3. Scegli (o crea) la cartella nella finestra di Google e premi **Seleziona**. Parte subito il primo backup.

Su ogni dispositivo (PC, tablet) i codici e la cartella vanno inseriti una volta.

### Uso quotidiano
- **Esegui ora**: backup immediato.
- **Ripristina da Drive**: elenco delle copie, tocchi quella che vuoi.
- **Metti in pausa / Riprendi**: sospende i backup automatici.
- L'accesso a Google dura circa un'ora e si rinnova da solo al primo tocco sullo schermo. Se un backup non riesce compare un avviso nella campanella: premi **Esegui ora**.

## File

**Esplora file › Carica**, oppure trascina i file sulla scrivania. Si aprono direttamente: PDF, immagini, video, audio, Excel (.xlsx), CSV e Word (.docx, in sola lettura). Gli altri tipi (es. .dwg) vengono conservati e si possono riscaricare. Limite per file: 300 MB, secondo lo spazio libero del dispositivo.
I visualizzatori di PDF, Excel e Word si scaricano da internet al primo uso; poi funzionano anche offline.

## Browser

Scrivi un indirizzo o una ricerca. La stella salva tra i preferiti, la puntina mette il sito sulla scrivania. Molti siti (Google, banche, Gmail, Amazon…) non permettono di essere mostrati dentro un'altra pagina: restano bianchi. In quel caso premi **Apri in Chrome**.

## Le tue app

**Gestione app › Scegli file .html o .zip › Installa.** Lo .zip serve per le web app in più file (index.html con cartelle css, js, immagini): tutto viene riunito in un'unica app. L'app compare sulla scrivania e nel menu Start e si apre in una sua finestra. In questa versione non ci sono limiti sulle librerie esterne che le app usano.

**Sicurezza:** il file originale viene solo letto e copiato, mai modificato. Ogni app gira in uno spazio isolato: non può leggere né cambiare documenti, note, agenda, altre app o il sistema. I dati che l'app salva finiscono in un archivio privato dell'app, inclusi nei backup e scaricabili con **Gestione app › Dati**. Se un'app salva i dati in modo diverso dal solito e non li ritrova, segnalalo per adattarla.

## Scorciatoie

| Tasti | Azione |
|---|---|
| Alt + Q | Finestra successiva |
| Alt + 1…4 | Cambia scrivania |
| Alt + Spazio | Start e ricerca |
| Trascinare una finestra ai bordi | Metà schermo, angoli, schermo intero in alto |
