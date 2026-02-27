// JS-BIGLIETTO-TRENO

/*
📋 Il programma deve chiedere all'utente il numero di km da percorrere e l'età del passeggero.

Il biglietto costa 0.21€/km, ma si applicano i seguenti sconti:
- sconto 20% per i minorenni
- sconto 40% per gli over 65 (anche se in Italia i pensionati sono quelli con la capacità di spesa più alta...)

Gli output devono avere 2 cifre decimali.

Possiamo testare la logica con i seguenti esempi:
- 100km / 10 anni / 16.80€
- 100km / 70 anni / 12.60€
*/

// ➡️ Definiamo le variabili che ci serviranno per la logica
const welcomeMessage = alert('🧑‍✈️ Benvenuto in NSI, il NUOVO SISTEMA INTELLIGENTE di calcolo del prezzo del biglietto.');
const discountMessage = alert('Ti ricordiamo che se hai meno di 18 o più di 65 anni avrai diritto a uno sconto!');
const tripKm = prompt('indica quanti kilometri vuoi percorrere');
const passengerAge = prompt('indica la tua età');
const costKm = 0.21;
const ticketCalc = tripKm * costKm;

/*
🧮 Definiamo la logica di calcolo del prezzo del biglietto considerando che:
- lo sconto del 20% per i minorenni equivale all'80% del prezzo del biglietto intero
- lo sconto del 40% per gli over65 equivale al 60% del prezzo del biglietto intero.
*/

// MODELLO DI LOGICA

if (passengerAge < 18) {
    const ticketPrice = ticketCalc * 0.8;
    console.log(tripKm, passengerAge, ticketPrice.toFixed(2)); //utilizziamo il console.log per verificare i valori immessi dall'utente
} else if (passengerAge > 65) {
    const ticketPrice = ticketCalc * 0.6;
    console.log(tripKm, passengerAge, ticketPrice.toFixed(2)); //utilizziamo il console.log per verificare i valori immessi dall'utente
} else {
    const ticketPrice = ticketCalc;
    console.log(tripKm, passengerAge, ticketPrice.toFixed(2)); //utilizziamo il console.log per verificare i valori immessi dall'utente
}