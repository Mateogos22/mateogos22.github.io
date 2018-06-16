// typ liczbowy - można wykowywać działania arytmetyczne
var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
//console.log( suma );
//console.log( typeof wyplata );

// typ łańcuchowy - sring (znak plus łączy stringi, czyli działa nieco inaczej od typu liczbowego)
var strWyplata = "4500\n";
var strPremia = "\"850\"";
var strSuma = strWyplata + strPremia;
//console.log( strSuma );
//console.log( typeof strSuma );


// typ logiczny - przyjmuje jedną z dwóch wartości (true/false)
var czyJestWiosna = true;

if( czyJestWiosna) {
    console.log("Tak, jest wiosna");
} else {
    console.log("Nie jest zima");
}

// typy specjalne 

var zmiennaTylkoZadeklarowana;
console.log( zmiennaTylkoZadeklarowana );

var zmiennaNull = null;
console.log( zmiennaNull );