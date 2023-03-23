const mail = [mariorossimail, andrearossimail, lucarossimail]

const mailutente = prompt('Inserisci la tua mail')
console.log(mailutente)

let validated = 'false';
for(let i = 0 < mail.length; i++;){
  if (mailutente === mail[i]) {
    validated = 'true';
  } 
}

if (validated === 'true' ) {
  document.getElementById('output') .innerHTML = (`Ciao! ${mailutente}la tua mail è stata convalidata!`)
} else{
  document.getElementById('output') .innerHTML = (`Ciao! ${mailutente}la tua mail non è stata convalidata!`)
}