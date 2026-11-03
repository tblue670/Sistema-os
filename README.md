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
Poi apri `sw.js` su GitHub, premi la matita e cambia `sistema-os-v1` in `sistema-os-v2` (v3, v4… ogni volta): così tablet e PC prendono subito la versione nuova.

## Dove restano i dati

In questa versione i dati (documenti, note, agenda, app installate) restano **nel browser di ogni dispositivo**: GitHub ospita solo il programma, non i tuoi dati, e nessun altro li vede.

- Per passare i dati da PC a tablet: **Impostazioni › Salva backup** sul primo, **Ripristina** sul secondo.
- Fai un backup ogni tanto: cancellando i dati di navigazione del browser si perdono.
- Il PIN di blocco protegge l'uso del dispositivo, non è una cifratura dei dati.

L'**Assistente** e la sincronizzazione automatica tra dispositivi funzionano solo nella versione aperta da claude.ai; qui non compaiono.

## Le tue app

**Gestione app › Scegli file .html › Installa.** L'app compare sulla scrivania e nel menu Start, si apre in una sua finestra e conserva i propri dati come prima. In questa versione non ci sono limiti sulle librerie esterne che le app usano.

## Scorciatoie

| Tasti | Azione |
|---|---|
| Alt + Q | Finestra successiva |
| Alt + 1…4 | Cambia scrivania |
| Alt + Spazio | Start e ricerca |
| Trascinare una finestra ai bordi | Metà schermo, angoli, schermo intero in alto |
