$('#count-sum').click(function(){
    var sum = 0;
    $('.salary').each(function(){
        sum += parseInt(this.innerHTML, 10)
    })
    
    $('#sum').text(sum);
    
});




