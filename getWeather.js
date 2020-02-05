
function getWeather() {
    $('.weatherResponse').html('');
    $('.temperature').html('');
    $('.humidity').html('');
    var cityName = $('#cityName').val();
    var openweatherApiCall = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=1b1e4ef557bca085d894a76b85555c2f';

    $.getJSON(openweatherApiCall,weatherCallBack);

    function weatherCallBack(weatherData) {
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description;
        var temperature = weatherData.main.temp-273.15;
        temperature = Math.round((temperature + Number.EPSILON) * 100) / 100
        var humidity = weatherData.main.humidity;
        console.log(weatherData);

        $('.weatherResponse').append("The weather in " + cityName+" "+country+" is currently "+description);

        $('.temperature').append("The temperature is "+temperature+"&#8451;");

        $('.humidity').append("The humidity is "+humidity+"%");
    }
}