//PER CAMBIARE COLORE
document.getElementById("cambiaColore").addEventListener("click", changeColore);

function changeColore() {
    var body = document.getElementById('body');
    var bottone = document.getElementById("cambiaColore");

    if (bottone.value == "white") {
        //cambio valore al bottone del cambiaColores
        bottone.value = "black";
        //setto lo stile nero
        body.style = "color: black; background-color:black;  background-image: url('bgNero.jpg');";
        //cambio colore al bottone del cambiaColore
        bottone.style = "color: white;";

        var titolo = document.getElementById("titolo");
        //cambio colore al bottone del cambiaColore
        titolo.style = "color: white;";

        var bottoneSelectLing = document.getElementById("selettoreLingua");
        //cambio colore al bottone del selettoreLingua
        bottoneSelectLing.style = "color: white; background-color: black;";

        var bottoneSelectInfo = document.getElementById("selettoreInfo");
        //cambio colore al bottone del selettoreInfo
        bottoneSelectInfo.style = "color: white; background-color: black;";

        var bottoneSelectInfo2 = document.getElementById("space");
        //cambio colore al bottone del selettoreInfo
        bottoneSelectInfo2.style = "color: white;";

        var footer = document.getElementById("footer");
        //cambio colore al bottone del footer
        footer.style = "color: white; background-color: transparent; border-color: white;";
    }
    else if (bottone.value == "black") {
        //cambio valore al bottone del cambiaColore
        bottone.value = "white";
        //setto lo stile nero
        body.style = "color: white; background-color:white;  background-image:  url('bgBianco.jpg');";
        //cambio colore al bottone del cambiaColore
        bottone.style = "color: black;";

        var titolo = document.getElementById("titolo");
        //cambio colore al bottone del cambiaColore
        titolo.style = "color: black;";

        var bottoneSelectLing = document.getElementById("selettoreLingua");
        //cambio colore al bottone del cambiaColore
        bottoneSelectLing.style = "color: black; background-color: white;";

        var bottoneSelectInfo = document.getElementById("selettoreInfo");
        //cambio colore al bottone del cambiaColore
        bottoneSelectInfo.style = "color: black; background-color: white;";

        var bottoneSelectInfo2 = document.getElementById("space");
        //cambio colore al bottone del selettoreInfo
        bottoneSelectInfo2.style = "color: black; background-color: white;";

        var footer = document.getElementById("footer");

        //cambio colore al bottone del footer
        footer.style = "color: black; background-color: white; border-color: black;";
    }
}

//PER CAMBIARE LINGUA
/*
var target = document.getElementById('bottone');

target.onclick = function () {

    var body = document.getElementById('body');


};

function chooseLing () {

}
*/