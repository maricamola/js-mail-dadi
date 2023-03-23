let numeriLista = Math.floor(Math.random() * 6) + 1;
console.log(numeriLista)

const numeroUtente= prompt('Inserisci un numero da 1 a 6');

if (numeroUtente > numeriLista){
  document.getElementById('vincitore').innerHTML= "Bravo, hai vinto tu!"
} else {
  document.getElementById('vincitore').innerHTML= "Mi dispiace, hai perso!"}

document.getElementById('numeri').innerHTML= numeriLista;

