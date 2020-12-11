var nome = prompt('Qual è il tuo nome?');
console.log('Il suo nome è: ' + nome);

var cognome = prompt('Ciao, ' + nome + ' qual è il tuo cognome?');
console.log('Il suo cognome è: ' + cognome);

var colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log('Il suo colore preferito è: ' + colorePreferito);

var annoCorrente = new Date().getFullYear();

var password = document.getElementById('output');
password.innerText = 'Password: ' + nome + cognome + colorePreferito + annoCorrente;

var acthung = document.getElementById('avviso');
acthung.append('Adesso copia la tua password; \nconservarla in un posto sicuro, però, \nnon ti servirà a nulla!');
