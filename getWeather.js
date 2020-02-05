
function getWeather() {
    $('#cityNameDisplay').html('');
    $('#weatherConditions').html('');
    $('.temperature').html('');
    $('#humidity').html('');
    var cityName = $('#cityName').val();
    var openweatherApiCall = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=1b1e4ef557bca085d894a76b85555c2f';

    $.getJSON(openweatherApiCall,weatherCallBack);

    function weatherCallBack(weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var id = weatherData.weather[0].id;
        var description = weatherData.weather[0].description;
        var temperature = weatherData.main.temp-273.15;
        temperature = Math.round((temperature + Number.EPSILON) * 100) / 100;
        var humidity = weatherData.main.humidity;
        console.log(weatherData);
        var bgColour = '';
        var img = '';
        function changeColour(description) {
            if(description == 'clear sky') {
                img = 'http://openweathermap.org/img/wn/01d@2x.png';
                bgColour = '#50e6ff';
            } else if (description == 'few clouds') {
                img = 'http://openweathermap.org/img/wn/02d@2x.png';
                bgColour =	'#50e6ff';
            } else if (description == 'scattered clouds') {
                img = 'http://openweathermap.org/img/wn/03d@2x.png';
                bgColour =	'#50e6ff';
            } else if (description == 'broken clouds') {
                img = 'http://openweathermap.org/img/wn/04d@2x.png';
                bgColour = '#dfdfdf	';
            } else if (description == 'shower rain') {
                img = 'http://openweathermap.org/img/wn/09d@2x.png';
                bgColour = '#0078d4';
            } else if (description == 'rain') {
                img = 'http://openweathermap.org/img/wn/10d@2x.png';
                bgColour = '#0078d4';
            } else if (description == 'thunderstorm') {
                img = 'http://openweathermap.org/img/wn/11d@2x.png';
                bgColour = '#006ca4';
            } else if (description == 'snow') {
                img = 'http://openweathermap.org/img/wn/13d@2x.png';
                bgColour = '#dfdfdf';
            } else if (description == 'mist') {
                img = 'http://openweathermap.org/img/wn/50d@2x.png';
                bgColour = '#a8a8a8';
            }
            var bg = document.getElementById('jumbotron');
            bg.style.backgroundColor = bgColour;
            var image = document.getElementById('weatherImage');
            image.src = img;
        } 
        $('#cityNameDisplay').append(cityName+", "+country);
        $('#weatherConditions').append("The weather condition is currently "+description);

        $('.temperature').append(temperature+"&#8451;");

        $('.humidity').append("Humidity: "+humidity+"%");
        changeColour(description);
    }
}