$(function(){
    
    var slideShow = $(".slide-show");
    var slideCount = $("single-slide").length;
    var slideWidth = 100/slideCount.length;
    var slideIndex = 0;    
    
});

// szerokość kontenera 
$("slideShow").css("width", slideCount + "+00%");

slideShow.find("single-slide").each(function(index){
    $(this).css("slideWidth" + 100% )
});