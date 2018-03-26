/*
funkcja pobierająca dane z serwera za pomocą buttona
*/
function pobierzDane(event) {
    event.preventDefault();
    var pobierz = new XMLHttpRequest();
    pobierz.open("GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php");
}


pobierz.onreadystatechange = function() {
        if (pobierz.readyState == 4) {
            if (pobierz.status == 200) {
                var zwrocDane = JSON.parse(pobierz.responseText);

                dodajDaneDoHtml(zwrocDane);

                pobierz = null;
            }
        }
    
    pobierz.send();
    
    }




/*
wyświetlanie
*/

function dodajDaneDoHtml(dane) {

    // stworzenie DIV
    var divDaneProgramisty = document.createElement("div");

    document.body.appendChild(divDaneProgramisty);

    // paragrafy z danymi w div

    var parDoc1 = document.createElement("p");
    var parImie = document.createElement("p");
    var parNazwisko = document.createElement("p");
    var parZawod = document.createElement("p");
    var parFirma = document.createElement("p");
    var parDoc2 = document.createElement("p");
    
    var parDoc1Content = document.createTextNode("----------");
    var parImieContent = document.createTextNode("Imie: " + dane.imie);
    var parNazwiskoContent = document.createTextNode("Nazwisko: " + dane.nazwisko);
    var parZawodContent = document.createTextNode("Zawód: " + dane.zawod);
    var parFirmaContent = document.createTextNode("Firma: " + dane.firma);
    var parDoc1Content = document.createTextNode("----------");

    parDoc1.appendChild(parDoc1Content);
    parImie.appendChild(parImieContent);

    parNazwisko.appendChild(parNazwiskoContent);
    parZawod.appendChild(parZawodContent);
    parFirma.appendChild(parFirmaContent);
    parDoc2.appendChild(parDoc2Content);
    
    document.div.appendChild(parDoc1);
    document.div.appendChild(parImie);
    document.div.appendChild(parNazwisko);
    document.div.appendChild(parZawod);
    document.div.appendChild(parFirma);
    document.div.appendChild(parDoc2);



}