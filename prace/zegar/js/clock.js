$(document).ready(function () {

    var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    var days = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
    var dayOut = $('#date');
    var hourOut = $('#hour');
    var minutesOut = $('#minutes');
    var secondOut = $('#second');

    /* 
        Pobranie daty i godziny
    */
   
   function updateDate() {
       
       var date = new Date;
    
       var hour = date.getHours() < 10 ?
           "0" + date.getHours() :
           date.getHours();
       var minutes = date.getMinutes() < 10 ?
           "0" + date.getMinutes() :
           date.getMinutes();
       var second = date.getSeconds() < 10 ?
           "0" + date.getSeconds() :
           date.getSeconds();
        var dayOfWeek = days[date.getDay()];
        var month = months[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();

        var dateStr = dayOfWeek + ", " + day + " " + month + ", " + year;

        dayOut.text(dateStr);
        hourOut.text(hour);
        minutesOut.text(minutes);
        secondOut.text(second);

            if(hour >= 6 && hour <= 19) {
                $("body").css("background-color", "#9ec103");
            } else {
                $('body').css("background-color", "#060630");
            }
        
    }

    /* 
        wyswietlenie w oknie funkcji updateDate
    */

    updateDate();
    window.setInterval(updateDate, 1000);


});