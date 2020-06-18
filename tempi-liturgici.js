// Calcolo tempi liturgici
// (C) 2014 Develoop S.r.l. - www.dvloop.it
// Written By Alberto Brioschi (alberto.brioschi@dvloop.it)
// Tutti i diritti riservati - Per autorizzazione alla copia contattare l'autore


   var d = new Date();
            var Y = d.getFullYear();

            var colore = "Verde";
            var descrizione = "Tempo Ordinario";

            if (d <= BattesimoGesu(Y)) {
                colore = "Bianco";
                descrizione = "Tempo di Natale";
            }

            if (d >= Ceneri(Y) && d < Pasqua(Y)) {
                colore = "Viola";
                descrizione = "Quaresima";
            }

            if (d == GiovediSanto(Y)) {
                colore = "Bianco";
                descrizione = "Giovedì Santo";
            }

            if (d == SabatoSanto(Y)) {
                colore = "Viola";
                descrizione = "Sabato Santo";
            }

            if (d == Pasqua(Y)) {
                colore = "Bianco";
                descrizione = "Pasqua";
            }

            if (d > Pasqua(Y) && d < Pentecoste(Y)) {
                colore = "Bianco";
                descrizione = "Tempo di Pasqua";
            }

            if (d == SSTrinita(Y)) {
                colore = "Bianco";
                descrizione = "SS Trinità";
            }

            if (d == Palme(Y)) {
                colore = "Rosso";
                descrizione = "Domenica delle Palme";
            }

            if (d == VenerdiSanto(Y)) {
                colore = "Rosso";
                descrizione = "Venerdì Santo";
            }

            if (d > InizioAvvento(Y)) {
                colore = "Viola";
                descrizione = "Tempo di Avvento";
            }

            if (d >= new Date(Y, 11, 25)) {
                colore = "Bianco";
                descrizione = "Tempo di Natale";
            }


			  switch(colore) {
				case "Bianco":
				   document.getElementById("tempo").style.backgroundColor = "#FFFFFF";
				   document.getElementById("tempo").style.color = "#000000";
				   break;
				case "Rosso":
					document.getElementById("tempo").style.backgroundColor = "#FF0000";
					break;
				case "Viola":
					document.getElementById("tempo").style.backgroundColor = "#D82DEB";
					break;
				case "Verde":
					document.getElementById("tempo").style.backgroundColor = "#18B307";
					break;
				default:
					break;
				}

            document.getElementById("tempo").innerHTML =  descrizione;
			


            //Prima domenica di quaresima, 6 domeniche antecedenti la Pasqua.
            function PrimaQuaresima(Y) {
                var pasqua = Pasqua(Y);
                var primaquaresima = new Date(pasqua);
                primaquaresima.setDate(pasqua.getDate() - 42);
                return primaquaresima;
            }

            // Mercoledi delle Ceneri, 46 giorni prima di Pasqua.
            function Ceneri(Y) {
                var pasqua = Pasqua(Y);
                var ceneri = new Date(pasqua);
                ceneri.setDate(pasqua.getDate() - 46);
                return ceneri;
            }

            // Domenica prima di Pasqua.
            function Palme(Y) {
                var pasqua = Pasqua(Y);
                var palme = new Date(pasqua);
                palme.setDate(pasqua.getDate() - 7);
                return palme;
            }

            // Giovedì prima di Pasqua.
            function GiovediSanto(Y) {
                var pasqua = Pasqua(Y);
                var giovedisanto = new Date(pasqua);
                giovedisanto.setDate(pasqua.getDate() - 3);
                return giovedisanto;
            }

            // Venerdì prima di Pasqua.
            function VenerdiSanto(Y) {
                var pasqua = Pasqua(Y);
                var venerdisanto = new Date(pasqua);
                venerdisanto.setDate(pasqua.getDate() - 2);
                return venerdisanto;
            }

            // Sabato prima di Pasqua.
            function SabatoSanto(Y) {
                var pasqua = Pasqua(Y);
                var sabatosanto = new Date(pasqua);
                sabatosanto.setDate(pasqua.getDate() - 1);
                return sabatosanto;
            }

            // Ascensione, 42 giorni dopo pasqua, cioè la settima domenica dopo la Pasqua.
            function Ascensione(Y) {
                var pasqua = Pasqua(Y);
                var ascensione = new Date(pasqua);
                ascensione.setDate(pasqua.getDate() + 42);
                return ascensione;
            }

            // Pentecoste, 49 giorni dopo pasqua, cioè la settima domenica dopo la Pasqua.
            function Pentecoste(Y) {
                var pasqua = Pasqua(Y);
                var pentecoste = new Date(pasqua);
                pentecoste.setDate(pasqua.getDate() + 49);
                return pentecoste;
            }

            // Domenica della SS. Trinità, 56 giorni dopo pasqua
            function SSTrinita(Y) {
                var pasqua = Pasqua(Y);
                var sstrinita = new Date(pasqua);
                sstrinita.setDate(pasqua.getDate() + 56);
                return sstrinita;
            }

            // Corpus Domini, 63 giorni dopo pasqua, cioè la nona domenica dopo la Pasqua.
            function CorpusDomini(Y) {
                var pasqua = Pasqua(Y);
                var corpusdomini = new Date(pasqua);
                corpusdomini.setDate(pasqua.getDate() + 63);
                return corpusdomini;
            }

            // Prima di avvento: Domenica più vicina al 30 novembre.
            function InizioAvvento(Y) {

                var startDate = new Date(Y, 10, 30);
                var endDate = new Date(Y, 11, 8);

                var inizioavvento;

                for (var i = startDate; i <= endDate; ) {
                    if (i.getDay() == 0) {
                        inizioavvento = i;
                        break;
                    }
                    i.setTime(i.getTime() + 1000 * 60 * 60 * 24);
                }

                return inizioavvento;

            }

            // Prima di avvento: Domenica tra il 7 e il 13 gennaio.
            function BattesimoGesu(Y) {

                var startDate = new Date(Y, 0, 7);
                var endDate = new Date(Y, 0, 13);

                var battesimogesu;

                for (var i = startDate; i <= endDate; ) {
                    if (i.getDay() == 0) {
                        battesimogesu = i;
                        break;
                    }
                    i.setTime(i.getTime() + 1000 * 60 * 60 * 24);
                }

                return battesimogesu;

            }


            function Pasqua(Y) {
                var C = Math.floor(Y / 100);
                var N = Y - 19 * Math.floor(Y / 19);
                var K = Math.floor((C - 17) / 25);
                var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
                I = I - 30 * Math.floor((I / 30));
                I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
                var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
                J = J - 7 * Math.floor(J / 7);
                var L = I - J;
                var M = 3 + Math.floor((L + 40) / 44);
                var D = L + 28 - 31 * Math.floor(M / 4);

                return new Date(Y, padout(M) - 1, padout(D));
            }

            function padout(number) { return (number < 10) ? '0' + number : number; }
