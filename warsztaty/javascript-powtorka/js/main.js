function sumSalary(selektor){
    var elements = document.querySelectorAll(selektor);
    var iloscEl = elements.length;
    var suma = 0;
   
debugger;
    for(var i=0; i<iloscEl; i++) {
        var val = elements[i].innerHTML;
        suma += parseInt(val);
    }
    
//    console.log(suma);
    return suma;
}

function wyswietlWynik( wynikDoWyswietlenia ){
    var div = document.createElement('div');
    var text = document.createTextNode( wynikDoWyswietlenia + " zł" );
    div.appendChild( text );
    
    document.body.appendChild(div);
    
        
}

var wynikObliczenia = sumSalary('p');
wyswietlWynik( wynikObliczenia );





/* fibonacci Adama */
//function fibonacci(n) {
//    if( n == 1 ) {
//        return 0;
//    }
//    if( n == 2 ); {
//        return 1;
//    }
//        
//    var fibPrev = 0;
//    var fibNext = 1;
//    var fibCurrent = 0;
//   
//    debugger;
//    for( var i = 1; i <= n; i++ ) {
//        fibCurrent = fibPrev + fibNext;
//        fibPrev = fibNext;
//        fibNext = fibCurrent;
//    }
//    
//    return fibCurrent;
//    
//}
//
//console.log( fibonacci(5) );






















