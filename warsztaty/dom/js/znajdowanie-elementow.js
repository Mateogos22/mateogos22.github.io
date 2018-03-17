//pobranie elementu po id - tylko jeden element
//paramert w getElementById wpisujemy bez #
//var parFist = document.getElementById("parFirst");
//console.log( parFist );

//pobranie elementów po class - kolekcja elementów
//paremetr w getElementsByClasses bez .
//var elementLink = document.getElementsByClassName("link");
//console.log( elementLink );

//pobranie elementu po tagu
//var elementTag = document.getElementsByTagName("p");
//console.log(elementTag);

//pobranie elementów po selektorze superlink - tutaj niezbędne jest pobranie skelektora klasy lub id
//var elementSuperLink = document.querySelectorAll(".superlink");
//console.log(elementSuperLink);


//pobranie pojedynczego elementru po selektorze id
//var parSecond = document.querySelector("#parSecond");
//console.log(parSecond);

var mojeLinki = document.getElementsByClassName("link");

//console.log( mojeLinki[1] );



for( var i = 0; i < mojeLinki.length;
   i++) {
    console.log( "To mój link nr " + (i + 1) );
    console.log( mojeLinki[i] );
    console.log("------------------");
}


//pętla forEach działa na kolekcji pobranej za pomocą metody document.querySelectorAll()
//mojeLinki.forEach(function(element, index){
//    console.log( element );
//});


//var arr = [100,2353,13,46,587,63];
//
//arr.forEach( function( element, index ){
//    console.log( "Index tablicy = " + index + ". Wartość = " + element );
//} );












