//creo un array di 16 numeri per il computer che vadano da 1 a 100

var computer=[];
var randomComputer;

//con un ciclo for escludo i doppioni dall array del pc

for (var i = 0; computer.length < 16; i++){
    randomComputer = generaNumero(1,100);
    if (randomComputer != computer[i]) {
        computer.push(randomComputer);
    }
}

console.log('Array computer', computer);


//creo la funzione con cui riempire l array computer di numeri casuali

function generaNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//chiedo all utente di scegliere 84 volte un numero da 1 a 100 che non sia doppione

var utente=[];
var randomUtente;

//anche in questo caso procedo come con il randomComputer

for (var i = 0; utente.length < 84; i++){
    randomUtente = generaNumero(1,100);
    if (randomUtente != utente[i]) {
        utente.push(randomUtente);
    }
}

console.log('Array utente', utente);


function generaNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
