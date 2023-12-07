const searchBarInput = document.querySelector('.searchBar input');
let lat = "";
let lon = "";

async function getCurrentWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`);
    var data = await res.json();
    lat = data.coord.lat;
    lon = data.coord.lon;
    console.log(data);
    document.querySelector('.standardTemp').innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector('.iconDescription').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.highTemp').innerHTML = "H:" + Math.round(data.main.temp_max) + "°F";
    document.querySelector('.lowTemp').innerHTML = "L:" + Math.round(data.main.temp_min) + "°F";
    
    getFiveDayForecast(lat,lon);
}

searchBarInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        getCurrentWeather(searchBarInput.value);
    }
    
});

const fiveDayWeathBoxRowCol = document.querySelector('.fiveDayWeathBox .row col');
const day1 = document.getElementById('day1');


async function getFiveDayForecast(lat, lon){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`)
    var data = await res.json();
    console.log(data);
    // document.querySelector('.timeOrDate').innerHTML = (data.main.temp);
    document.querySelector('.sunnyIconImg').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.tempFarenheit').innerHTML = "H:" + Math.round(data.main.temp_max) + "°F";
    document.querySelector('.lowTempFarenheit').innerHTML = "L:" + Math.round(data.main.temp_min) + "°F";
    let icon = data.weather[0].icon;
    day1.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
   

    // if(data.weather[0].icon == "01d"){
    //     https://openweathermap.org/img/wn/01d@2x.png)
    // }else if (data.weather[0].icon == "02d"){
    //     https://openweathermap.org/img/wn/02d@2x.png
    // }else if (data.weather[0].icon == "03d"){
    //     https://openweathermap.org/img/wn/03d@2x.png
    // }else if (data.weather[0].icon == "04d"){
    //     https://openweathermap.org/img/wn/04d@2x.png
    // }else if (data.weather[0].icon == "09d"){
    //     https://openweathermap.org/img/wn/09d@2x.png
    // }else if (data.weather[0].icon == "10d"){
    //     https://openweathermap.org/img/wn/10d@2x.png
    // }else if (data.weather[0].icon == "11d"){
    //     https://openweathermap.org/img/wn/11d@2x.png
    // }else if (data.weather[0].icon == "13d"){
    //     https://openweathermap.org/img/wn/13d@2x.png
    // }else if (data.weather[0].icon == "50d"){
    //     https://openweathermap.org/img/wn/50d@2x.png
    // // }
fiveDayWeathBoxRowCol.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        getFiveDayForecast(fiveDayWeathBoxRowCol.value);
    }
    
});

