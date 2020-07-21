// bonus:chiedo all utente di scegliere il livello di difficoltà
do{
    var scelta = prompt('A quale livello vuoi giocare? Inserisci FACILE, MEDIO o DIFFICILE').toUpperCase();
    console.log(scelta);
} while(scelta != 'FACILE' && scelta != 'MEDIO' && scelta != 'DIFFICILE')

switch (scelta) {
    case 'FACILE':
        var massimo = 100;
        break;
    case 'MEDIO':
        var massimo = 80;
        break;
    case 'DIFFICILE':
        var massimo = 50;
        break;
}

//creo un array del pc con una funzione e con un altra escludo da esso i doppioni
var numeriPc = [];
var randomPc;


// Con questa funzione creo i numeri casuali degli array
function generaNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Con questa funzione controllo che negli array non ci siano doppioni
function trovaElemento(lista,elemento){
    var i = 0;
    while (i < lista.length){
        if(elemento == lista[i]){
            return true;
        }
        i++;
    }
    return false;
}


//controllo che non ci siano doppioni nell array di 16 numeri del computer

while(numeriPc.length < 16){
    randomPc = generaNumero(1,100);
    var doppionePc = trovaElemento(numeriPc,randomPc);

    if (doppionePc == false) {
        numeriPc.push(randomPc);
    }
}

console.log('Array pc', numeriPc);

// creo l'array per i numeri dell'utente
var numeriUtente = [];
var possibilita = massimo - numeriPc.length;




// eleaboro le posibilità dei scelta dell utente
var trovato = false;
var numeroUtente;

while(numeriUtente.length < possibilita && trovato == false){
    numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e ' + massimo + ' e vinci se non è stato scelto dal computer'));
    while(numeroUtente <= 0 || numeroUtente > massimo){
        numeroUtente = parseInt(prompt('Errore. Tenta di nuovo con un numero compreso tra 1 e ' + massimo ));
    }
    while(isNaN(numeroUtente)){
        numeroUtente = parseInt(prompt('Il numero deve essere compreso tra 1 e ' + massimo));
    }


    trovato = trovaElemento(numeriPc,numeroUtente);
    if (trovato == false) {
        var doppioneUtente = trovaElemento(numeriUtente,numeroUtente);
        if (doppioneUtente == false) {
            numeriUtente.push(numeroUtente);
        } else {
            alert('Numero già inserito');
        }
    }
}

console.log('Array Utente', numeriUtente);


//elaboro i risultati
var risultato;

if(trovato){
    risultato = 'SCONFITTA!';
    console.log('SCONFITTA!')
} else {
    risultato = 'VITTORIA!';
    console.log('VITTORIA')
}
