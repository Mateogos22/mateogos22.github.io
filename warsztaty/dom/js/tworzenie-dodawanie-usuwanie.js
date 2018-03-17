// pobieram istniejący węzeł
var istniejacyWezel = document.getElementById("output");

// sprawdzam czy udało się go pobrać
//console.log(istniejacyWezel);

// tworzę nowy element w HTML
var newElement = document.createElement("p"); 

// tworzę treść do paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę treść paragrafu, o!");

// wstawiam nowoutworzony tekst do nowoutworzonego paragrafu
newElement.appendChild(newElementContent);

// dodaje do paragrafu atrybut class='textpar'
newElement.setAttribute('class', 'textpar');

//console.log(newElement);
// wstawiam nasz przygotowany paragraf do div#output
istniejacyWezel.appendChild( newElement );

//insertBefore

var link = document.getElementsByClassName("superlink")[0];
var br = document.createElement("br");
link.parentElement.insertBefore( br, link.nextElementSibling );

// usuwanie atrybutów
link.removeAttribute('class');




// usuwanie elementów z dokumentu
istniejacyWezel.parentElement.removeChild( istniejacyWezel );


