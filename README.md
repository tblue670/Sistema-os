# Sistema Operativo Web

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
Carica anche il nuovo `sw.js` se è nel pacchetto; altrimenti aprilo su GitHub, premi la matita e aumenta il numero in `sistema-os-v2` (v3, v4… ogni volta): così tablet e PC prendono subito la versione nuova.

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

## Le tue app

**Gestione app › Scegli file .html › Installa.** L'app compare sulla scrivania e nel menu Start, si apre in una sua finestra e conserva i propri dati come prima. In questa versione non ci sono limiti sulle librerie esterne che le app usano.

## Scorciatoie

| Tasti | Azione |
|---|---|
| Alt + Q | Finestra successiva |
| Alt + 1…4 | Cambia scrivania |
| Alt + Spazio | Start e ricerca |
| Trascinare una finestra ai bordi | Metà schermo, angoli, schermo intero in alto |
