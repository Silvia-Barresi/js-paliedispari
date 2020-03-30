// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.


var user = prompt("Inserisci una parola");

var output = isPalindrome (user);

function isPalindrome (parola){
  var reverseP = parola.split("").reverse().join("");
  if (parola === reverseP) {
    return "Il termine è palindromo";

  }
  else{
    return "Il termine non è palindromo";
  }

}

document.getElementById('palindrome').innerHTML= output;
