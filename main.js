// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//PURPOSE OF THE PROGRAM

//1 - Declare and intialize variables that i need for the program

//2 - to calculate total price i need to:

//2.1 - 20% discount on the price IF the age is < of 18 

//2.2 - 40% discount on the price IF the age is > 65

//3 - use console log to print on the console total Price and use the method tofixed on that number

//PREPARATION PHASE

// let age = parseInt(prompt("inserisci la tua età"))
console.log("La tua età è:", age)

// let kmNumber = parseInt(prompt("Inserisci i Kilometri che vuoi percorrere"))
console.log("I kilometri che vuoi percorrere sono:", kmNumber)

let price = kmNumber * 0.21
console.log("prezzo provvisorio:", price.toFixed(2))


//MAIN PHASE
if (age < 18) {
    price = price - (price * 0.2)
}

else if (age > 65) {
    price = price - (price * 0.4)
}

else {
    console.log("prezzo provvisorio:", price.toFixed(2))
}

//END PHASE
console.log("prezzo totale:", price.toFixed(2));








