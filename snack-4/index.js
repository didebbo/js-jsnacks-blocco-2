// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione(indice dell'array) dispari

const numbers = [];
const howManyNumbers = 10;
const rangeOfNumber = 100;
let log = "I numeri dell'Array sono:";
let somma = 0;

// Aggiungo numeri interi all'arrai
for (let i = 0; i < howManyNumbers; i++) numbers.push(Math.floor(Math.random() * rangeOfNumber) + 1);

numbers.forEach((el, i) => {
    log += " " + el + ",";
    if (i % 2) somma += el;
});

log = log.slice(0, -1);
log += "\nLa Somma dei numeri dispari è: " + somma;

alert(log);


