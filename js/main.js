
// CHIEDERE ALL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE

let kilometers = parseFloat(prompt("Inserisci chilometri da percorrere"));

// CHIEDERE ALL'UTENTE L'ETA' DEL PASSEGGERO

let age = parseInt(prompt("Inserisci età del passeggero"));

// IL PREZZO DEL BIGLIETTO E' DEFINITO IN BASE AI KM (0.21 € al km)

let regularPrice = kilometers * 0.21;

console.log(regularPrice);

// Validare i miei dati

if (isNaN(kilometers) || isNaN(age)) {
    alert("Mi dispiace non hai inserito entrambi dei numeri!")
} 


// APPLICA UNO SCONTO DEL 20% PER I MINORENNI e 40% per gli over 65

if(age < 18) {
    regularPrice -= regularPrice * 0.2;
} else if (age >= 65) {
    regularPrice -= regularPrice * 0.4;
}

// PREZZO FINALE CON DUE DECIMALI

let finalPrice = regularPrice.toFixed(2);

console.log(finalPrice);

// HTML

document.getElementById("kilometers").innerHTML = kilometers;

document.getElementById("age").innerHTML = age;

document.getElementById("finalPrice").innerHTML = finalPrice;