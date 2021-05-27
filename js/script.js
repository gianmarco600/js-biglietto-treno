var distanza , anni;

distanza = parseFloat(prompt('Quanti km devi percorrere?'));
anni = Math.round(parseFloat(prompt('Quanti anni ha il passeggero?')));


distanza = (Math.round(distanza * 100)) / 100;

console.log("info" , distanza , anni);

// regole di calcolo prezzo

var prezzoTot = 0.21 * distanza;

var sconto = 0;


if (anni < 11){
    prezzoTot = prezzoTot * 0.8;
    sconto = 1;
}

if (anni > 64){
    prezzoTot -= prezzoTot * 0.6;
    sconto = 2;
}
prezzoTot = (Math.round(prezzoTot * 100)) / 100;

document.getElementById("prezzo").innerHTML = prezzoTot + '€';
document.getElementById("dati1").innerHTML = distanza + "km";
document.getElementById("dati2").innerHTML = anni + "anni";


if (sconto == 1){
    document.getElementById("sconto").innerHTML = "Sconto bambini!!!";
}

if (sconto == 2){
    document.getElementById("sconto").innerHTML = "Sconto vecchi!!!";
}