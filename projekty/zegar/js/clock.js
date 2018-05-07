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

    function updateDate() {

        var dayOfWeek = days[date.getDay()];
        var month = months[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();

        var dateStr = dayOfWeek + ", " + day + " " + month + ", " + year;

        dayOut.text(dateStr);
        hourOut.text(hour);
        minutesOut.text(minutes);
        secondOut.text(second);
    }

    function changeBackgroundImage() {
        if (hour >= 6 && hour <= 20) {
            $('body').css('background-image', 'url(../img/day.jpg)');
        } else {
            $('body').css('background-image', 'url(../img/night.jpg)');
        }
    }

    /* 
        wyswietlenie w oknie funkcji updateDate
    */

    updateDate();
    window.setInterval(updateDate, changeBackgroundImage);


});