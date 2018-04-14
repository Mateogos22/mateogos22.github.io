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
   debugger;
}
    console.log(silnia(5));
});
