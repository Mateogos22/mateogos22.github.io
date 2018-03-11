class Ogloszenie {
    
    constructor( tytul, tresc, cena, kategoria ) {
        this.tytul = tytul;
        this.tresc = tresc;
        this.cena = cena;
        this.kategoria = kategoria;
    }
    
    wyswietlOgloszenie() {
        var ogloszenie = ("Tytuł ogłoszenia: " + this.tytul + " Treść: " + this.tresc + " Cena: " + this.cena + " Kategoria: " + this.kategoria);
        
        
        return ogloszenie;
    }
    
}

var ogloszenie1 = new Ogloszenie( "Sprzedam Opla", "Niemiec płakał, jak sprzedawał i tylko do kościła nim jeździł", 500, "motoryzacja" );

//console.log( ogloszenie1 );

var ogloszenieDoWyswietlenia = ogloszenie1.wyswietlOgloszenie();
console.log( ogloszenieDoWyswietlenia );