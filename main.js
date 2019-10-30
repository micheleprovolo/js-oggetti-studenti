// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1A. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
      firstName: "Mario",
      lastName: "Rossi",
      age: 23
};
// 1B. Stampare a schermo attraverso il for in tutte le proprietà.
for (var prop in student) {
        console.log("Le proprietà di student sono: " + prop);
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
// console.log(arrayStud);

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

for (var key in arrayStud) {
        console.log(arrayStud[key]);
}