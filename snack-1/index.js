// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let somma = 0;
let perQuanteVolte = 5;

// For
for (let i = 0; i < perQuanteVolte; i++) {
    let num;
    do num = parseInt(prompt("Inserisci numero:"));
    while (isNaN(num));
    somma += num;
}

alert("Totale: " + somma)

// While
let cont = 0;
somma = 0;

while (cont < perQuanteVolte) {
    let num;
    do num = parseInt(prompt("Inserisci numero:"));
    while (isNaN(num));
    somma += num;
    cont++;
}

alert("Totale: " + somma)