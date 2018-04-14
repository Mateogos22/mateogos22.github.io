var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}
//
//
//
//jsonOsoby.osoby.forEach(function( element, index ){
//    console.log( "Nazywam się: " + element.imie + " " + element.nazwisko + " " + " i mam " + element.oczy + " oczy" );
//});


//pętla po obiekcie

var obiekt = {
    imie : "Adam",
    nazwisko : "Nowacki",
    wzrost : 182,
    oczy : "brązowe",
}


for( var property in obiekt ) {
    console.log( "Nazwa właściwości: " + property + " Wartość właściwości: " + obiekt[property] );
}





