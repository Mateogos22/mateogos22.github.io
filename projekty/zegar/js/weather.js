function getWeather() {
    $.getJSON(url, function (data) {
        console.log(getWeather);
    });
}

getWeather('https://danepubliczne.imgw.pl/api/data/synop/id/12375');