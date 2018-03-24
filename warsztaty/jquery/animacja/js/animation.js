$(function(){
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
//    szerokość "kliszy"
    
    slideShow.css('width', slideCount*100 + '%');
    
    slideShow.find('.single-slide').each(function(index){
        $(this).css({'width' : slideWidth + '%', 'margin-left' : index * slideWidth + '%'});
    });
    
//     strzałki
     
    $('.prev-slide').click(function(){
        slide(slideIndex - 1);       
    });
    
    $('.next-slide').click(function(){
        slide(slideIndex + 1);
    });
    
//    funkcja odpowiada za przesuwanie
    
    function slide(newSlideIndex){
        if(newSlideIndex < 0 || newSlideIndex > slideCount - 1)
            return;
        
        var slideCaption = slideShow.find('.slide-caption').eq(newSlideIndex);
        
        slideCaption.hide();
        
        var newMarginLeft = (newSlideIndex * (-100)) + "%";
        
        slideShow.animate({'margin-left' : newMarginLeft}, 800, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
        
    }
    
})




