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