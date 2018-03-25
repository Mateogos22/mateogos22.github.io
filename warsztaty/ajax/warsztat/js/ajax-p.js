
function pobierzDane(event){
    event.preventDefault();
    ajax("GET",
    "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", wrzucDaneDoHtml)  
    
}
         
         
         
function wrzucDaneDoHtml(dane){
        var pUserId = document.createElement("p");
        var pUserName = document.createElement("p");
        var pUserUrl = document.createElement("p");
        var pUserIdContent = document.createTextNode("User ID: " + dane.userId);
        var pUserNameContent = document.createTextNode("User name: " + dane.userName);
        var pUserUrlContent = document.createTextNode("User URL: " + dane.userUrl);
    }


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