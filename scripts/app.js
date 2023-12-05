const searchBarInput = document.querySelector('.searchBar input');

async function getCurrentWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`);
    var data = await res.json();
    console.log(data);
    document.querySelector('.standardTemp').innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector('.iconDescription').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.highTemp').innerHTML = "H:" + Math.round(data.main.temp_max) + "°F";
    document.querySelector('.lowTemp').innerHTML = "L:" + Math.round(data.main.temp_min) + "°F";
}

searchBarInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        getCurrentWeather(searchBarInput.value);
    }
    
});

const fiveDayWeathBoxRowCol = document.querySelector('.fiveDayWeathBox .row col');

async function getFiveDayForecast(){
    var res = await fetch(`api.openweathermap.org/data/2.5/forecast?$lat=${lat}&lon=${lon}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`)
    var data = await res.json();
    console.log(data);
    document.querySelector('.timeOrDate').innerHTML = (data.main.temp);
    document.querySelector('.sunnyIconImg').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.tempFarenheit').innerHTML = "H:" + Math.round(data.main.temp_max) + "°F";
    document.querySelector('.lowTempFarenheit').innerHTML = "L:" + Math.round(data.main.temp_min) + "°F";
}
fiveDayWeathBoxRowCol.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        getFiveDayForecast(fiveDayWeathBoxRowCol.value);
    }
    
});

