$(document).ready(function () {


    var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    var days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
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

            if(hour >= 6 && hour < 12) {
                $("body").css("background-color", "#4595f7");
            } else if (hour > 12 && hour < 20) {
                $('body').css("background-color", "#1a7cf4")
            } else {
                $('body').css("background-color", "#012959");
            }
        
    }

    /* 
        wyswietlenie w oknie funkcji updateDate
    */

    updateDate();
    window.setInterval(updateDate, 1000);


});
