// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const rangeArray = 20;
const lenghtArray1 = Math.floor((Math.random() * rangeArray) + 1);
const lenghtArray2 = Math.floor((Math.random() * rangeArray) + 1);
const rangeNumber = 100;
const array1 = [];
const array2 = [];
let log = "";


for (let i = 0; i < lenghtArray1; i++) array1.push(Math.floor(Math.random() * rangeNumber) + 1);

for (let i = 0; i < lenghtArray2; i++) array2.push(Math.floor(Math.random() * rangeNumber) + 1);

log += "Array 1: " + array1;
log += "\nArray 2: " + array2;

if (array1.length < array2.length) {
    log += "\nAggiungo ad Array 1 questi elementi:";
    while (array1.length < array2.length) {
        let num = Math.floor(Math.random() * rangeNumber) + 1;
        array1.push(num);
        log += " " + num + ",";
    }
    log = log.slice(0, -1);
    log += "\nArray 1: " + array1;
    log += "\nArray 2: " + array2;
}
else if (array2.length < array1.length) {
    log += "\nAggiungo ad Array 2 questi elementi:";
    while (array2.length < array1.length) {
        let num = Math.floor(Math.random() * rangeNumber) + 1;
        array2.push(num);
        log += " " + num + ",";
    }
    log = log.slice(0, -1);
    log += "\nArray 1: " + array1;
    log += "\nArray 2: " + array2;
}

alert(log);
