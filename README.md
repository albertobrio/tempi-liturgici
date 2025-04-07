# ⛪ Calcolo dei Tempi Liturgici

Questo script in **JavaScript** consente di determinare il **tempo liturgico corrente** nel calendario cristiano (rito romano), colorando dinamicamente un elemento HTML in base al periodo liturgico corrente (Avvento, Natale, Quaresima, Pasqua, Tempo Ordinario...).

---

## 📅 Funzionalità

- Calcolo automatico delle date mobili:
- Pasqua, Ceneri, Palme, Trinità, Pentecoste, Avvento, Battesimo di Gesù, ecc.
- Identificazione del periodo liturgico in base alla data corrente
- Colorazione dinamica dell’interfaccia HTML (`div#tempo`) con il colore liturgico
- Visualizzazione testuale del tempo liturgico corrente

---

## 🌈 Esempio HTML

Assicurati di avere un elemento con `id="tempo"` nel tuo HTML:

```html
<div id="tempo"></div>
```

## 🧠 Algoritmi inclusi
Lo script include funzioni per il calcolo delle principali date mobili:

Funzione	Significato
Pasqua(Y)         Calcolo della data di Pasqua (alg. Meeus)
Ceneri(Y)	        Mercoledì delle Ceneri (46 giorni prima di Pasqua)
Palme(Y)	        Domenica delle Palme (7 giorni prima di Pasqua)
GiovediSanto(Y)	  3 giorni prima di Pasqua
VenerdiSanto(Y)	  2 giorni prima di Pasqua
SabatoSanto(Y)	  1 giorno prima di Pasqua
Pentecoste(Y)	    49 giorni dopo Pasqua
SSTrinita(Y)	    56 giorni dopo Pasqua
CorpusDomini(Y)	  63 giorni dopo Pasqua
InizioAvvento(Y)	Domenica più vicina al 30 novembre
BattesimoGesu(Y)	Domenica tra il 7 e il 13 gennaio

## 🎨 Colori liturgici
Periodo liturgico	Colore	Codice HEX
Avvento	Viola	#D82DEB
Natale	Bianco	#FFFFFF
Quaresima	Viola	#D82DEB
Domenica delle Palme	Rosso	#FF0000
Giovedì Santo	Bianco	#FFFFFF
Venerdì Santo	Rosso	#FF0000
Sabato Santo	Viola	#D82DEB
Pasqua	Bianco	#FFFFFF
Tempo di Pasqua	Bianco	#FFFFFF
SS Trinità	Bianco	#FFFFFF
Tempo Ordinario	Verde	#18B307

## 📝 Autore
Alberto Brioschi

📧 alberto.brioschi@dvloop.it
💼 Develoop S.r.l. – www.dvloop.it
© 2014 – Tutti i diritti riservati – Per autorizzazione alla copia o utilizzo contattare l’autore.

🙏 Script utile per siti parrocchiali, progetti scolastici, strumenti di liturgia digitale o calendari ecclesiastici online.
