var imiona = ['Adam', 'Marek', 'Agnieszka', 'Kasia', 'Martyna', 'Robert', 'Mateusz'];
imiona[7] = 'Dominik';
//console.log( imiona );

imiona.push("Kamil");
imiona.push("Joanna");

// usuwanie elementów tablicy z końca
imiona.pop();
imiona.pop();


// dodawanie elementów tablicy na początku
imiona.unshift("Grzegorz");
imiona.unshift("Michał");

// usuwanie elementów z początku tablicy
//var usunietyElement = imiona.shift();

//console.log( usunietyElement );

// sprawdzenie "długości" 
var iloscElementowTablicy = imiona.length;
console.log( iloscElementowTablicy );
//console.log( imiona );

//var elementyTablicy = imiona.join( " -- " );
//console.log( elementyTablicy );

imiona.reverse();
console.log( imiona );

imiona.sort();
console.log( imiona );