const btnGen = document.querySelector("#btnGen");

btnGen.addEventListener("click", printVouchers);


/**
 * Übernimmt die Anzahl der Gutscheine und
 * bereitet diese für den Druck auf
 */
function printVouchers() {
    const anzahl = document.querySelector("#anzahl");

    addVoucher(anzahl.value);
}

/**
 * Erzeugt die einzelnen Karten
 * 
 * @param {number} anzahl Anzahl der Karten die erzeugt werden sollen
 */
function addVoucher(anzahl) {
    let main = document.querySelector("main");

    // Wert des Datum-Input
    let inpDatum = document.querySelector("#datum").value;
    // Wert des Zeit-Input
    let inpTime = document.querySelector("#zeitpunkt").value;
    // Wert des Preis-Input
    let inpPreis = document.querySelector("#preis").value;

    // Child-Nodes entfernen wenn welche aus einem vorigen Lauf da wären
    let aktLauf = document.querySelectorAll(".Cards");
    if (aktLauf.length > 0) {
        for (const element of aktLauf) {
            element.remove();
        }
    }

    // Seriennummer um Prüfen zu können wann die Karte gedruckt wurde
    const fixedChecksum = Date.now().toPrecision();

    // Schleife zum Erzeugen der Child-Nodes
    for (let x = 1; x <= anzahl; x++) {
        let aktLauf = document.querySelectorAll(".Cards");

        // Container
        let div = document.createElement("div");
        let text = document.createElement("div");
        let bild = document.createElement("div");
        // Teilnehmerkarte
        let teil = document.createElement("p");
        // Überschrift
        let header = document.createElement("p");
        // Feuerwehr
        let ff = document.createElement("p");
        // Datum
        let datum = document.createElement("p");
        // Uhrzeit
        let time = document.createElement("p");
        // Preis
        let preis = document.createElement("p");
        // Laufnummer
        let lauf = document.createElement("p");
        // Container für Elemente
        let container01 = document.createElement("div");
        let container02 = document.createElement("div");
        // Hintergrund
        let background = document.createElement("img");
        // Prüfziffer
        let checksum = document.createElement("p");
        checksum.classList.add("checksum");
        checksum.textContent = fixedChecksum;

        // Hintergrundbild der Karten
        background.classList.add("backgroundImage");
        background.setAttribute("src", "resourcen/Kartenspiel.jpg");
        background.setAttribute("alt", "© Michael Putz, 05.11.2024");

        // Style für Karten
        div.classList.add("Cards");
        text.classList.add("Text");
        bild.classList.add("Bild");

        // Teilnehmerkarte
        teil.textContent = `Teilnehmerkarte`;
        teil.classList.add("teilnehmer");

        // Überschift
        header.textContent = "HENDLSCHNAPSEN";
        header.classList.add("ueberschrift");

        // Feuerwehr
        ff.textContent = "F.F. Götzendorf";
        ff.classList.add("feuerwehr");


        // Datum
        let tempDate = new Date(inpDatum);
        const options = {
            day: "2-digit",
            month: "numeric",
            year: "numeric",
        };

        datum.textContent = tempDate.toLocaleDateString("de-DE", options);
        datum.classList.add("datum");

        // Zeitpunkt
        time.textContent = `ab ${inpTime} Uhr`;
        time.classList.add("zeitpunkt");

        // Container für Zeit und Datum
        container01.appendChild(datum);
        container01.appendChild(time);
        container01.classList.add("container01");

        // Preis
        preis.textContent = `Kartenpreis: € ${inpPreis}`;
        preis.classList.add("preis");

        // Laufnummer 
        lauf.textContent = `${aktLauf.length + 1}`;
        lauf.classList.add("laufnummer");

        // Container für Prüfsumme und Laufnummer
        container02.appendChild(checksum);
        container02.appendChild(lauf);
        container02.classList.add("container02");

        // Nodes die Children anfügen
        text.appendChild(teil);
        text.appendChild(header);
        text.appendChild(ff);
        text.appendChild(container01);
        text.appendChild(preis);
        
        text.appendChild(container02);

        bild.appendChild(background);

        div.appendChild(text);
        div.appendChild(bild);

        main.appendChild(div);
    }
}
