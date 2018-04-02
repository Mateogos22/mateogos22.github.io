
window.onscroll = function(event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    ajax("GET", "https://jsonplaceholder.typicode.com/users", addToHtml);
    }


function addToHtml(data) {
    for(var i = 0; i < data.lenght; i++){    
    var pUserId = document.createElement("p");
    var pUserName = document.createElement("p");
    var pUserUrl = document.createElement("p");
    var pDoc = document.createElement("p");
    
    var pUserIdContent = document.createTextNode("User ID: " + data[i].id);
    var pUserNameContent = document.createTextNode("User name: " + data[i].name);
    var pUserUrlContent = document.createTextNode("User URL: " + data[i].website);
    var pDocContent = document.createTextNode("-------------------");
    
    pUserId.appendChild(pUserIdContent);
    pUserName.appendChild(pUserNameContent);
    pUserUrl.appendChild(pUserUrlContent);
    pDoc.appendChild(pDocContent);
    
    document.body.appendChild(pUserId);
    document.body.appendChild(pUserName);
    document.body.appendChild(pUserUrl);
    document.body.appendChild(pDoc);
}
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

