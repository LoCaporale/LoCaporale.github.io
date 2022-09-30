document.getElementById("selettoreInfo").addEventListener("change", displayName);

function displayName() {

    if (document.getElementById("infoPersonali").selected) {
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
        td2.textContent = "Assegnato al reparto produzione per progettazione di impianti custom di raffreddamento a liquido per super-calcolatori e al reparto di ricerca e sviluppo per progettazione di prototipi";
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
       
        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Date";
        td1.style = "text-align: center; padding:10px";
        td2.textContent = "Nel 2006 ho iniziato le scuole Primarie nell’Istituto “Gaspare Bertoni” dove ho continuato fino al 2014 completando gli studi con l’esame di terza media. Nello stesso anno mi sono iscritto presso l’Istituto I.S.I.S. Arturo Malignani di Udine e concluso gli studi nel 2020. Al termine di quest’ultimi, sono entrato nella facoltà di Informatica all’Università di Trento.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:10px";
        td2 = document.createElement("td");
        td1.textContent = "Nome e tipo di istituto di istruzione o formazione";
        td2.textContent = "Istituto Gaspare Bertoni (Scuola di Primo Grado Paritaria).\nIstituto Tecnico I.S.I.S. Arturo Malignani (Istituto di Secondo Grado, Istituto Tecnico Industriale), Sezione Informatica e Telecomunicazioni.\nUniversità degli studi di Trento, Dipartimento di Ingegneria e Scienza dell'Informazione, Laurea in Informatica.";
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
        td2.textContent = "Terza media, Seconda superiore e Diploma.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%; margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
    else if (document.getElementById("capacita").selected) {

        var tabella = document.createElement("table");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze generali";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Conoscenza di linguaggi di programmazione “C++”, “HTML”,” PYTHON”; Conoscenza Hardware e Software di un PC; Conoscenza base del microcontrollore “Arduino”; Conoscenza base del programma “CISCO Packet Tracer”, attestato da certificato ufficiale; Conoscenza media del programma “AppInvertor”; Conoscenza base di “Adobe Photoshop”; Conoscenza base di “Autodesk 360”, “Rhinoceros” e “AutoCAD”.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze relazionali";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Buone, acquisite nell’ambiente scolastico e in corsi extrascolastici (come il corso di alfabetizzazione degli anziani fatto nel 2017 o la competizione “EXPONI le tue idee” dello stesso anno). ";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze organizzative";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Buone, acquisite nell’ambiente scolastico, in corsi di formazione per imprenditori e durante il periodo di alternanza scuola-lavoro (incaricato della progettazione di un prototipo).";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze tecniche";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Buone, acquisite nell’ambiente scolastico: utilizzo di CNC, corso di sicurezza in laboratorio Informatico, corso di sicurezza in laboratorio Chimico e corso di primo soccorso; extrascolastici, come i corsi CISCO “IT Essential” effettuati nel 2017 e nel 2018.";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Capacità e competenze";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Disegno tecnico nel 2016 con il programma AutoCAD e a mano, creazione di solidi e di pezzi meccanici. Conoscenze base dei seguenti programmi “Audacity”, “FL Studio” “Ableton Live” e “Sony Vegas Pro”";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.style = "text-align: center; padding:5px";
        td2 = document.createElement("td");
        td1.textContent = "Altre capacità e competenze";
        td1.style = "text-align: center; padding:5px";
        td2.textContent = "Corso di sicurezza antincendio nel 2016. //AGGIUNGERE CERTIFICATI DI RISCHIO GENERALE E SPECIFICO";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
    else if (document.getElementById("lingue").selected) {
        
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
        td2.textContent = "Ampliare le conoscenze personali con aziende tecniche, seguire progetti di Ricerca e Sviluppo formativi, crescendo professionalmente e personalmente. ";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tabella.appendChild(tr);

        tabella.style = "border: 1px solid; width: 75%;margin-left:auto; margin-right:auto; margin-top:100px";
        let spaziovuoto = document.getElementById("space");
        spaziovuoto.replaceChildren(tabella);

    }
}