
// funkcja bez parametrów
function wyswietlWKonsoli() {
    console.log("Mateusz Gołos");
}
    // wyswietlWKonsoli():

    // funkcje z parametrami 

    function wyswietlWKonsoliParam (imie, nazwisko) {
        console.log(imie + " " + nazwisko);
    }

    wyswietlWKonsoliParam("Mateusz", "Gołos");
    wyswietlWKonsoliParam("Adam", "Nowacki");
    wyswietlWKonsoliParam("Kinga", "Korycka");


    // zwracanie wartości przez funkcję 
    function obliczPodatek( kwota, procentPodatek) {
        var wynik = kwota * (procentPodatek / 100);
        return wynik.toFixed(2);
    }
    
    var obliczenia1 = obliczPodatek( 4990, 23 );
    console.log( "Wysokość obliczonego podatku wynosi: " + obliczenia1 );