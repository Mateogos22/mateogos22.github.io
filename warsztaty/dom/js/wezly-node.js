var parFirst = document.getElementById("parFirst");

// pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElement
//console.log( parFirst.parentElement );

// childNodes pobiera wszystkie węzły w tym także białe znami między elementami jako "text" oraz komentarze
//console.log( parFirst.childNodes );

// children pobiera tylko te węzły które są elementem HTML
//console.log( parFirst.children );

// children działa jak tablica, więc można się do niego tak odwoływać
// pobieram pierwsze dziecko elementu #parFirst
//var pierwszeDziecko = parFirst.children[0];
// pobieram następny węzeł dla pierwszeDziecko, który jest elementem w relacji rodzeństwo
//console.log(pierwszeDziecko.nextElementSibling);

// pobiera następny węzeł dla pierwszeDziecko niezależnie czy jest elementem HTML, textem czt komentarzem
//console.log(pierwszeDziecko.nextSibling);

// lastChild pobiera ostatnie dziecko niezależnie czy jest elemtentem HTML, textem czy komentarzem
//var ostatnieDziecko = parFirst.lastChild;


// element lastElementChild pobiera ostatnie dziecko, które jest elementem HTML
//var ostatnieDziecko = parFirst.lastElementChild;
//console.log(ostatnieDziecko);

//console.log( ostatnieDziecko.previousElementSibling );



