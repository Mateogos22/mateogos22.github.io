var btn = $("#animate");

btn.on("click", function(){
   
//    $("h1").hide(4000).show("fast");
//    $("h1").fadeOut(300).fadeIn("slow");
//    $("h1").slideUp(3000).slideDown(6000);
    
    
    $("h1").animate(
        {'left' : "300px", 'top' : '100px'},
        4000,
        function() {
            alert("Koniec animacji");
        }
    )
    
    $("h1").animate(
    {'left' : '0px', 'top' : '0px'}
    )
    
});
