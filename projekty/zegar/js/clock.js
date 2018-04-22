$(document).ready(function () {

    var months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
    var days = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek'];
    var dayOut = $('#date');
    var hourOut = $('#hour');
    var minutesOut = $('#minutes');
    var secondOut = $('#second');

    function updateDate() {
        var date = new Date;

        var hour = date.getHours() < 10 ?
            "0" + date.getHours() 
            : date.getHours();
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

        var dateStr = dayOfWeek + " " + day + " " + month + " " + year;
       
        dayOut.text(dateStr);
        hourOut.text(hour);
        minutesOut.text(minutes);
        secondOut.text(second);
    }

    updateDate();
    window.setInterval(updateDate);


});