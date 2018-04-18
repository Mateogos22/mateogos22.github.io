$('#count-sum').click(function(){
    var sum = 0;
    $('.salary').each(function(){
        sum += parseInt(this.innerHTML)
    })
    
    $('#sum').text(sum);
    
});




