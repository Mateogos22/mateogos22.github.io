ajax("GET",
"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
function(data){console.log(data);})

// definicja funkcji ajax

function ajax(method, url, callback){
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                var returnData = httpRequest.responseText;
                
                callback(returnData);
                
                httpRequest = null;
            }
        }
    }
    
    httpRequest.send();
}

