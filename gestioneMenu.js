document.getElementById("selettoreInfo").addEventListener("change", displayName);

function displayName() {

    if (document.getElementById("infoPersonali").selected) {
        var foto = document.getElementById("foto");
        foto.style = "visibility: hidden;";

        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Nome";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "CAPORALE FEDERICO";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Indirizzo";
        td2.textContent = "Via Duino 36, UDINE(UD), ITALY";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Telefono";
        td2.textContent = "+39 3420694785";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Fax";
        td2.textContent = "-";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "E-mail";
        td2.textContent = "federico.caporale00@gmail.com";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Nazionalità";
        td2.textContent = "Italiana";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Data di nascita";
        td2.textContent = "01/04/2000";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }

    else if (document.getElementById("esperienze").selected) {
        var foto = document.getElementById("foto");
        foto.style = "visibility: hidden;";
        
        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Date";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "28 MAGGIO 2018 AL 16 GIUGNO 2018";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Nome dell'azienda e città";
        td2.textContent = "Eurotech SPA Amaro(UD)";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Tipo di società/settore di attività";
        td2.textContent = "Società dedicata alla ricerca, sviluppo e produzione di computer miniaturizzati e di computer ad elevate prestazioni.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Posizione lavorativa";
        td2.textContent = "Stagista";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Principali mansioni e responsabilità";
        td2.textContent = "Assegnato al reparto produzione per progettazione di impianti custom di raffreddamento a liquido per super-calcolatori.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

        var tabella2 = document.createElement("table");

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td1.textContent = "Date";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "30 MAGGIO 2019 AL 20 GIUGNO 2019";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella2.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Nome dell'azienda e città";
        td2.textContent = "Eurotech SPA Amaro(UD)";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella2.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Tipo di società/settore di attività";
        td2.textContent = "Società dedicata alla ricerca, sviluppo e produzione di computer miniaturizzati e di computer ad elevate prestazioni.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella2.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Posizione lavorativa";
        td2.textContent = "Stagista";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella2.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Principali mansioni e responsabilità";
        td2.textContent = "Assegnato al reparto di Ricerca e Sviluppo per prototipazione.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella2.appendChild(tr);

        tabella2.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        spaziovuoto.appendChild(tabella2);

    }
    else if (document.getElementById("istruzione").selected) {
        var foto = document.getElementById("foto");
        foto.style = "visibility: hidden;";
       
        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Date";
        td1.style = "text-align: center; padding:10px";
        td2.textContent = "2014: Diploma del primo ciclo di Istruzione.\n2020: Diploma in Informatica e Telecomunicazioni.\n";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:10px";
        td2 = document.createElement("td");
        td1.textContent = "Nome e tipo di istituto di istruzione o formazione";
        td2.textContent = "Istruzione Primarie e Istruzione Secondaria di I grado nell’Istituto “Gaspare Bertoni” di Udine.\nIstruzione Secondaria di II grado nell'Istituto Statale di Istruzione Superiore “Arturo Malignani” di Udine, sezione Informatica e Telecomunicazioni.\nIstruzione Superiore nell'Università degli studi di Trento nella facoltà di Informatica, Dipartimento di Ingegneria e Scienza dell'Informazione.\n\n";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Principali studi/abilità professionali oggetto dello studio";
        td2.textContent = "Diplomato in Informatica e Telecomunicazioni ha competenze specifiche nel campo dei sistemi informatici e dell’elaborazione dell’informazione, delle applicazioni e tecnologie Web, delle reti e degli apparati di comunicazione.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Qualifica o certificato conseguita ";
        td2.textContent = "Diploma Istruzione Secondaria di II grado in Informatica e Telecomunicazioni.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%; margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
    else if (document.getElementById("capacita").selected) {
        var foto = document.getElementById("foto");
        foto.style = "visibility: hidden;";

        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze generali";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Conoscenza dei seguenti linguaggi di programmazione: “C++”, “HTML”, “CSS”, “JAVASCRIPT” e “JAVA”;\nConoscenza Hardware e Software di un PC;\nConoscenza base del microcontrollore “Arduino”;\nConoscenza base del programma “CISCO Packet Tracer”, attestato da certificato ufficiale;\nConoscenza media del programma “AppInvertor” e “Fusion360”;\nConoscenza base di “Adobe Photoshop”;\nConoscenza base di “Autodesk 360”, “Rhinoceros” e “AutoCAD”.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze relazionali";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Acquisite nell’ambiente scolastico e in corsi extrascolastici (come il corso di alfabetizzazione degli anziani fatto nel 2017 o la competizione “EXPONI le tue idee” dello stesso anno). ";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze organizzative";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Acquisite nell’ambiente scolastico, in corsi di formazione per imprenditori (Amway Academy) e durante il periodo di alternanza scuola-lavoro.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze tecniche";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Oltre a quelle già indicate nelle Capacità e compotenze generali, ho acquisito nell’ambiente scolastico: utilizzo di macchine CNC; extrascolastici: corso CISCO “IT Essential” effettuati nel 2017 e nel 2018, corso Installer Connect Training effettuato nel 2022.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Disegno tecnico nel 2016 con il programma AutoCAD e a mano, creazione di solidi e di pezzi meccanici. Conoscenze base dei seguenti programmi “Audacity”, “FL Studio” “Ableton Live” e “Sony Vegas Pro”.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Altre capacità e competenze";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Corso di sicurezza antincendio nel 2016.\nCorso sicurezza generale.\nCorso sicurezza in laboratorio.\nCorso sicurezza a rischio basso.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
    else if (document.getElementById("lingue").selected) {
        var foto = document.getElementById("foto");
        foto.style = "visibility: hidden;";
        
        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Madrelingua";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Italiana";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Altre lingue: Inglese";
        td2.textContent = "Certificazione 'PET' Cambridge e Certificazione 'B2' Università degli studi di Trento";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Altre lingue: Tedesco";
        td2.textContent = "Certificazione 'B2' Goethe";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
    else if (document.getElementById("altro").selected) {
        var foto = document.getElementById("foto");
        foto.style = "visibility: hidden;";
        
        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Patenti";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "A1, A2, B";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Ulteriori informazioni";
        td2.textContent = "Vorrei ampliare le mie conoscenze con aziende specializzate nel settore Automotive e nell'ambito Informatico, seguire progetti di Ricerca e Sviluppo formativi, crescere professionalmente e personalmente. ";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
}