// funkcja bez parametrów
function wyswietlWKonsoli() {
    console.log("Mateusz Gołos");
}
// wyswietlWKonsoli():

// funkcje z parametrami 

function wyswietlWKonsoliParam(imie, nazwisko) {
    console.log(imie + " " + nazwisko);
}

wyswietlWKonsoliParam("Mateusz", "Gołos");
wyswietlWKonsoliParam("Adam", "Nowacki");
wyswietlWKonsoliParam("Kinga", "Korycka");


// zwracanie wartości przez funkcję 
function obliczPodatek(kwota, procentPodatek) {
    var wynik = kwota * (procentPodatek / 100);
    return wynik.toFixed(2);
}

function wyswietlWynik( wartosc ) {
    document.write( wartosc );
}

var obliczenia = obliczPodatek( 1000, 10 );
wyswietlWynik( obliczenia );