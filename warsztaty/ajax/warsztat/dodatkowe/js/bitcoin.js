function kurs(event){
    event.preventDefault();
    $.getJSON("https://blockchain.info/pl/ticker", function(data){console.log(kurs);})
    
}

