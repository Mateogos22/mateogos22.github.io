// metoda find wyszukuje potomków selektora. W poniższym przykładzie
// poszukuje paragrafów znajdujących się w div.
// metoda find może wyszukiwać po tagu, klasie, id, atrybucie
$("div").find("p").css({fontSize : "70px", color : "orange"});



// metoda each - jako parametr przyjmuje funkcję zwrotną, która zostanie wykonana w każdym znalezionym elemencie
$("p").each( function( index, element ){
    console.log( index, element );
    $(this).addClass('new_class').css({fontSize : "55px", backgroundColor : "yellow"});
//    $(this).remove();
} );

