var nome = prompt('Qual è il tuo nome?');
console.log('Il suo nome è: ' + nome);

var cognome = prompt('Qual è il tuo cognome?');
console.log('Il suo cognome è: ' + cognome);

var colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log('Il suo colore preferito è: ' + colorePreferito);

var annoCorrente = new Date().getFullYear();

var password = document.getElementById('output');
password.innerText = nome + cognome + colorePreferito + annoCorrente;
