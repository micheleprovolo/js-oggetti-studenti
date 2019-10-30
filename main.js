// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//1A. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
      firstName: "Mario",
      lastName: "Rossi",
      age: 23
};
// 1B. Stampare a schermo attraverso il for in tutte le proprietà.
for (var prop in student) {
        console.log("La proprietà di student è: " + prop);
        console.log("Il valore di student è: " + student[prop]);
}





// - Creare un array di oggetti di studenti.

var student1 = {
        firstName: "Paolo",
        lastName: "Verdi",
        age: 35
  };

  var student2 = {
        firstName: "Franco",
        lastName: "Baresi",
        age: 44
  };

  var student3 = {
        firstName: "Francesco",
        lastName: "Gialli",
        age: 27
  };

var arrayStud = [student1, student2, student3];
console.log(arrayStud);


 // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var result = "";
var nomeCognome;
for (nomeCognome in student1) {
  result += student1[nomeCognome] + " ";
}
console.log(result);

var result = "";
var nomeCognome;
for (nomeCognome in student2) {
  result += student2[nomeCognome] + " ";
}
console.log(result);

var result = "";
var nomeCognome;
for (nomeCognome in student3) {
  result += student3[nomeCognome] + " ";
}
console.log(result);


// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//creo nuovo oggetto vuoto da riempire
var newstudent = {};

var usernome = prompt("Inserisci nome dello studente");
var usercognome = prompt("Inserisci cognome dello studente");
var usereta = parseInt(prompt("Inserisci età dello studente"));

//assegno i valori ottenuti tramite i 3 prompt all'oggetto 
newstudent.nome = usernome;
newstudent.cognome = usercognome;
newstudent.eta = usereta

console.log("stampo nuovo oggetto studente", newstudent);