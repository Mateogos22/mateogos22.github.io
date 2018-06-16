/*var zmiennaGlobalna = "To jest zmienna globalna, widoczna w funkcjach";

function wyswietlZmienna() {
    console.log(zmiennaGlobalna);
    var zmiennaLokalna = "To jest zmienna lokalna. Przestrzeń globalna jej nie zobaczy";
}

wyswietlZmienna();
console.log( zmiennaLokalna );*/

var zmienna = "Zmienna globalna";

function pokazZmienna() {
    var zmienna = "Zmienna lokalna";
    console.log( zmienna );
}

//pokazZmienna();

console.log( zmienna );