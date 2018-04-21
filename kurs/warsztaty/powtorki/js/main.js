

$(document).ready(function(){
   
    function pobierzKursBitcoin( url ) {
        
        
        $.getJSON( url, function( data ) {
        var currentBuyPrice = parseFloat( $('#buy').html() );
        var currentSellPrice = parseFloat( $('#sell').html() );
        
        console.log( currentBuyPrice, currentSellPrice );
            
            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);
            
        } )
    }
    
    pobierzKursBitcoin( 'https://blockchain.info/pl/ticker' );
    
});