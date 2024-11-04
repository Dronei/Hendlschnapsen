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

function addVoucher(anzahl) {
    let main = document.querySelector("main");
    let inpDatum = document.querySelector("#datum").value;
    let inpTime = document.querySelector("#zeitpunkt").value;
    let inpPreis = document.querySelector("#preis").value;

    let aktLauf = document.querySelectorAll(".Cards");
    if (aktLauf.length > 0) {
        for (const element of aktLauf) {
            element.remove();
        }
    }

    if (inpDatum == "" || inpTime == "" || inpPreis == "") {
        alert("Datum, Zeit oder Preis sind leer! Bitte eingeben.");
    } else {
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
            // Container für Datum und Uhrzeit
            let container01 = document.createElement("div");
            // Hintergrund
            let background = document.createElement("img");

            background.classList.add("backgroundImage");
            background.setAttribute("src", "resourcen/Kartenspiel.jpg");
            background.setAttribute("alt", "Kartenspiel")

            // Style für Karten
            div.classList.add("Cards");
            text.classList.add("Text");
            bild.classList.add("Bild");

            // Teilnehmerkarte
            teil.textContent = `Teilnehmerkarte`;
            teil.classList.add("teilnehmer");

            // Überschift
            header.textContent = "HENDELSCHNAPSEN";
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
            }
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

            text.appendChild(teil);
            text.appendChild(header);
            text.appendChild(ff);
            text.appendChild(container01);
            text.appendChild(preis);
            text.appendChild(lauf);
            bild.appendChild(background);

            div.appendChild(text);
            div.appendChild(bild);

            main.appendChild(div);
        }
    }
}   