// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

var scelta = prompt("Scegli pari o dispari");

var num1 = Math.floor (Math.random()*5) + 1;
var num2 = Math.floor (Math.random()*5) + 1;

output = pariDispari (scelta, num1, num2);

function pariDispari (num1, num2, scelta){
  var risultato = num1 + num2;
   if (risultato %2==0){
     var result = "pari";
   } else{
     var result = "dispari";
   }

  if (scelta === result ){
      return "Hai vinto";
    } else {
      return "Hai perso";
    }

}

document.getElementById('output').innerHTML= output;
