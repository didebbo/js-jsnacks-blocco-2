// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const nomi = ["Angelo", "Bruno", "Carlo", "Davide"];
const cognomi = ["Empoli", "Fuffa", "Girondi", "Hat"];
let invitati = [];
const quantiInvitati = 3;
let log = "Gli invitati sono:";

for (let i = 0; i < quantiInvitati; i++) {
    let exist, nome, cognome;
    do {
        exist = false;
        nome = nomi[Math.floor(Math.random() * nomi.length)];
        cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
        invitati.forEach((el) => {
            if (el.includes(nome) || el.includes(cognome)) exist = true;
        })
    }
    while (exist);
    invitati.push(nome + " " + cognome);
}

invitati.forEach((invitato) => {
    log += " " + invitato + ",";
})

log = log.slice(0, -1);
alert(log);


