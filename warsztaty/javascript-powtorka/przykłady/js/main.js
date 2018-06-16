//$( document ).ready(function(){
//    var divBlock = $("#block");
//    var par = $("#paragraf");
//    
//    
//console.log(par.html());    
//});


/* funkcja rekurencyjna */
$(document).ready(function (){
function silnia(n) {
    if (n == 0){
        return 1;
    } else {        
        return n * silnia(n - 1)
    }
}
    
//    var wynik = 1;
//    for (var i = 1; i <= 1; i++){
//        wynik *= 1;
//    }
//    
//    return wynik;
    
    console.log(silnia(4));
});
