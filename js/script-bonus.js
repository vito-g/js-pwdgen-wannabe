var nome = prompt('Qual è il tuo nome?');
console.log('Il suo nome è: ' + nome);

var cognome = prompt('Ciao ' + nome + ', qual è il tuo cognome?');
console.log('Il suo cognome è: ' + cognome);

var colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log('Il suo colore preferito è: ' + colorePreferito);

var annoCorrente = new Date().getFullYear();

var password = document.getElementById('output');
password.innerHTML =  '<strong>PASSWORD: </strong>'  + nome + cognome + colorePreferito + annoCorrente;

var acthung = document.getElementById('avviso');
acthung.append('Adesso copia la tua password. \nConservarla in un posto sicuro, però, \nnon ti servirà a nulla!');


if (new Date().getHours() < 18) {
  document.getElementById("saluto").innerHTML = nome + ", ti auguriamo una buona giornata!";
} else {document.getElementById("saluto").innerHTML = nome + ", ti auguriamo una buona serata!";}
