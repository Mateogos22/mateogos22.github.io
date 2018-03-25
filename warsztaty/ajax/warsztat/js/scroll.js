ajax("GET", 
    "https://jsonplaceholder.typicode.com/users", function(data){element.scrollIntoView();})

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

function addDataToHtml(data){
    var pDoc1 = document.createElement("p");
    var pUserId = document.createElement("p");
    var pUserName = document.createElement("p");
    var pUserUrl = document.createElement("p");
    var pDoc = document.createElement("p");
    
    var pDocContent1 = document.createTextNode("-----------------------------");
    var pUserIdContent = document.createTextNode("User ID: " + dane.userId);
    var pUserNameContent = document.createTextNode("User name: " + dane.userName);
    var pUserUrlContent = document.createTextNode("User URL: " + dane.userURL);
    var pDocContent = document.createTextNode("-----------------------------");
    
    pDoc1.appendChild(pDocContent1);
    pUserId.appendChild(pUserIdContent);
    pUserName.appendChild(pUserNameContent);
    pUserUrl.appendChild(pUserUrlContent);
    pDoc.appendChild(pDocContent);
    
    document.body.appendChild(pDoc1);
    document.body.appendChild(pUserId);
    document.body.appendChild(pUserName);
    document.body.appendChild(pUserUrl);
    document.body.appendChild(pDoc);
    
}