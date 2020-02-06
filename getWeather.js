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
        temperature = Math.round((temperature + Number.EPSILON) );
        var humidity = weatherData.main.humidity;

        var icon = weatherData.weather[0].icon;
        var bgColour = '';
        var img = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';

        function changeColour(description) {
            if(description == 'clear sky') {
                
                bgColour = '#50e6ff';
            } else if (description == 'few clouds') {
                
                bgColour =	'#50e6ff';
            } else if (description == 'scattered clouds') {
                
                
                bgColour =	'#50e6ff';
            } else if (description == 'broken clouds') {
                
                bgColour = '#dfdfdf	';
            } else if (description == 'shower rain') {
                
                bgColour = '#0078d4';
            } else if (description == 'rain') {
                
                bgColour = '#0078d4';
            } else if (description == 'thunderstorm') {
                
                bgColour = '#006ca4';
            } else if (description == 'snow') {
                
                bgColour = '#dfdfdf';
            } else if (description == 'mist') {
                bgColour = '#a8a8a8';
            }
            
            $('html').css('background-color',bgColour);
            $('.jumbotron').css('background-color',bgColour);
            
            
            var image = document.getElementById('weatherImage');
            image.src = img;
        } 
        $('#cityNameDisplay').append(cityName+", "+country);
        $('#weatherConditions').append(description);
        $('.temperature').append(temperature+"&#8451;");

        $('.humidity').append("Humidity: "+humidity+"%");
        changeColour(description);
    }
}