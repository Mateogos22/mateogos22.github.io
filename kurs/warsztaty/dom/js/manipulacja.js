//  innerHTML - pobieranie
var parFirst = document.getElementById("parFirst");
//console.log( parFirst.innerHTML );


// innerHTML - przypisanie wartości
var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartość h1 wstawiona w span</span>";

// zmiania styli 
mainHeader.style.color = "hsl(138, 75%, 7%)";
mainHeader.style.backgroundColor = "red";

// przypisanie klasy - nadpisuje klasy!
mainHeader.className = "headingtext";

// pobranie klasy elementu
console.log( mainHeader.className );


// classlist
mainHeader.classList.add("nowa-klasa");

// classlist - usuwanie klasy
mainHeader.classList.remove("headingtext");