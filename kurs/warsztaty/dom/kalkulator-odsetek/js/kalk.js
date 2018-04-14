function oblicz(e){
    e.preventDefault();
    var wplata = parseInt(document.getElementById("wplata").value);
    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
    var podatek = $("#podatek")[0];
    var check = podatek.checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, check);
    
    $("#wynik").text(wynik);
}

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    var kapital;
    
    var oprocentowanieOpodatkowane;
    
    
//    oprocentowanieOpodatkowane = podatek ? oprocentowanie * 0.81 : oprocentowanie;
        
    if(podatek){
        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    kapital = wplata * Math.pow((1 + (oprocentowanieOpodatkowane/okresKapitalizacji)), iloscLat * okresKapitalizacji);
    return kapital;
    
}
