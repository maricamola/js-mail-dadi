const mail = ['mariorossimail', 'andrearossimail', 'lucarossimail']
console.log(mail)
const mailutente = prompt('Inserisci la tua mail')
console.log(mailutente)

let validated = 'false';
for(let i = 0 < mail.length; i++;){
  if (mailutente === mail[i]) {
    validated = 'true';
  } 
}

if (validated === 'true' ) {
  document.getElementById('output').innerHTML = "Accesso riuscito!"
} else{
  document.getElementById('output').innerHTML = "Accesso negato!"
}