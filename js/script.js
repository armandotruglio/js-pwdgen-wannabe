//Check JS connection
console.log('JS OK')

//Step dell'esercizio
/*
1. Recupero elementi dal DOM
2. Preparo una variabile con la stringa '21'
3. Chiedo all'utente il Nome
4. Chiedo all'utente il Cognome
5. Chiedo all'utente il suo colore preferito
6. Genero la password sommando Nome + Cognome + Colore + '21'
7. Inserisco la password nell'elemento del DOM*/

//Recupero l'elemento del DOM
const resultElement = document.getElementById('password');
console.log(resultElement);

//Creo variabile per completare la password
const number = '21';
console.log(number);

//Chiedo all'utente il Nome
const firstName = prompt('Come ti chiami?', 'Armando');
console.log(firstName);

//Chiedo all'utente il Cognome
const lastName = prompt('Qual è il tuo cognome?', 'Truglio');
console.log(lastName);

//Chiedo all'utente il suo colore preferito
const favouriteColor = prompt('Qual è il tuo colore preferito?', 'Bianco');
console.log(favouriteColor);

//Genero la password
const password = firstName + lastName + favouriteColor + number;
console.log(password);

//Inserico la password nell'elemento del DOM
resultElement.innerText = 'La tua password (molto sicura) è: ' + password;
