// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let num;

do num = parseInt(prompt("Inserisci un nunero:"));
while (isNaN(num));

if (num % 2) num++;

alert("Numero inserito: " + num);

