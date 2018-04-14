$(function(){
    
    // pobieranie tekstu
    var textParagrafuId = $("#paragraf").text();
    console.log( textParagrafuId );
    
    // ustawienie tekstu 
    $("#paragraf").text("Nowy tekst ustawiony metodą text()");
    
    // dodawanie HTML'a
    $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>");
    
    // dodawanie treści na końcu selektora 
    $(".paragrafnext").append("<br>Nowa treść na końcu selektora");
    
    // dodawanie treści za selektorem
    $(".paragrafnext").after("<h6>Za selektorem</h6>");
    
    // usuwane elementu wraz z zawartością
    $(".paragrafnext").remove();
    
    // usuwanie tylko zawartości elementu
//    $("div").empty();
    
    // dodawanie pojedynczego stylu css
    $("div").css("background-color", "red");
    
    // dodawanie wielu styli css
    $("div").css({
        width : "600px",
        height: "120px",
        backgroundColor: "#03b403"
    })
    
    // dodawanie klasy id elementu
    $("h1").addClass("nowa-klasa");
    
    // dodawanie atrybutów do elementu
    $("h1").attr("title", "Główny tytuł ustawiony za pomocą jQuery");
    
});