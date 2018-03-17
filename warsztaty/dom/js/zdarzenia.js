var paragraf = document.getElementById("par2");

// sposób 1
function obsluzZdarzenie(event) {
    //    console.log("click");
    console.log(event.type);
}

//funkcja z paragraf.onclick jest bez ()
paragraf.onclick = obsluzZdarzenie;

// sposób 2
paragraf.onclick = function (e) {
    console.log("Do obsługi zdarzenia przypisana zostałą funkcja anonimowa");
}

//var counter = 0;
//paragraf.addEventListener("mouseenter", function (event){               counter++;
//        console.log(event.type)
//        console.log( "Zdarzenie wywołane " + counter + " raz")
//});


//var title = document.getElementById("main-header");
//
//title.addEventListener("mouseenter",function(){
//    title.style.fontSize = "70px";
//    title.style.color = "rgba(0, 226, 139, 0.81)";
//});
//
//title.addEventListener("mouseleave",function(){
//    title.style.fontSize = "inherit";
//    title.style.color = "inherit";
//})


function bodyColor(event) {
    console.log(event);
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.95)"
}


var title = document.getElementById("main-header");

title.addEventListener("click", bodyColor);

// usuwanie obsługi zdarzeń
//title.removeAttribute("click", bodyColor);


// blokowanie domyślnego działania elementów

document.querySelector('.link1').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Kliknąłem na link klasy .link1");
});


























