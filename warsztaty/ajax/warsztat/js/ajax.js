// funkcja pobierająca dane z serwera

function pobierzDane(event) {
    event.preventDefault();
    var pobierz = new XMLHttpRequest();
    pobierz.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");

    pobierz.onreadystatechange = function () {
        if (pobierz.readyState == 4) {
            if (pobierz.status == 200) {
                var zwrocDane = JSON.parse(pobierz.responseText);

                dodajDaneDoHtml(zwrocDane);

                pobierz = null;
            }
        }
    }

    pobierz.send();

}

// wyświetlanie

function dodajDaneDoHtml(dane) {
    
    var pUserId = document.createElement("p");
    var pUserName = document.createElement("p");
    var pUserUrl = document.createElement("p");
    var pDoc = document.createElement("p");
    
    var pUserIdContent = document.createTextNode("User ID: " + dane.userId);
    var pUserNameContent = document.createTextNode("User name: " + dane.userName);
    var pUserUrlContent = document.createTextNode("User URL: " + dane.userURL);
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