const searchBarInput = document.querySelector('.searchBar input');
let lat = "";
let lon = "";
let icon;
let logo;

async function getCurrentWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`);
    var data = await res.json();
    lat = data.coord.lat;
    lon = data.coord.lon;
    console.log(data);
    icon = data.weather[0].icon
    console.log(data.weather[0].icon);
    // d1TimeNow.src = `https://openweathermap.org/img/wn/${icon1}@2x.png`;
    d1TimeNow.innerHTML = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    document.querySelector('.standardTemp').innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector('.iconDescription').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.highTemp').innerHTML = "H:" + Math.round(data.main.temp_max) + "°F";
    document.querySelector('.lowTemp').innerHTML = "L:" + Math.round(data.main.temp_min) + "°F";

    getFiveDayForecast(lat, lon);
}

searchBarInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getCurrentWeather(searchBarInput.value);
    }

});


const d1TimeNow = document.getElementById('d1TimeNow');
const d1Time12pm = document.getElementById('d1Time12pm');
const d1Time3pm = document.getElementById('d1Time3pm');
const d1Time6pm = document.getElementById('d1Time6pm');
const d1Time9pm = document.getElementById('d1Time9pm');


async function getFiveDayForecast(lat, lon) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`)
    var data = await res.json();
    console.log(data);
    // document.querySelector('.timeOrDate').innerHTML = (data.main.temp);
    // document.querySelector('.d1TimeNow').innerHTML = data;
    let icon = 
    document.querySelector('.d1TimeNowHighTemp').innerHTML = "H:" + Math.round(data.main.temp_max) + "°F";
    document.querySelector('.d1TimeNowLowTemp').innerHTML = "L:" + Math.round(data.main.temp_min) + "°F";
    document.querySelector('.d1Time12pmIconImg2').innerHTML = data.list[5].weather[0];
    document.querySelector('.d1Time12pmHighTemp').innerHTML = "H:" + Math.round(data.list[5].main.temp_max) + "°F";
    document.querySelector('.d1Time12pmLowTemp').innerHTML = "L:" + Math.round(data.list[5].main.temp_min) + "°F";
    document.querySelector('.d1Time3pmIconImg3').innerHTML = data.list[6].weather[0];
    document.querySelector('.d1Time3pmHighTemp').innerHTML = "H:" + Math.round(data.list[6].main.temp_max) + "°F";
    document.querySelector('.d1Time3pmLowTemp').innerHTML = "L:" + Math.round(data.list[6].main.temp_min) + "°F";
    document.querySelector('.d1Time6pmIconImg4').innerHTML = data.list[7].weather[0];
    document.querySelector('.dTime6pmHighTemp').innerHTML = "H:" + Math.round(data.list[7].main.temp_max) + "°F";
    document.querySelector('.dTime6pmLowTemp').innerHTML = "L:" + Math.round(data.list[7].main.temp_min) + "°F";
    document.querySelector('.d1Time9pmIconImg5').innerHTML = data.list[8].weather[0];
    document.querySelector('.dTime9pmHighTemp').innerHTML = "H:" + Math.round(data.list[8].main.temp_max) + "°F";
    document.querySelector('.dTime9pmLowTemp').innerHTML = "L:" + Math.round(data.list[8].main.temp_min) + "°F";

    let icon1 = data.weather[0].icon;
    let icon2 = data.list[5].weather[0].icon;
    let icon3 = data.list[6].weather[0].icon;
    let icon4 = data.list[7].weather[0].icon;
    let icon5 = data.list[8].weather[0].icon;
    d1TimeNow.src = `https://openweathermap.org/img/wn/${icon1}@2x.png`;
    d1Time12pm.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
    d1Time3pm.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
    d1Time6pm.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
    d1Time9pm.src = `https://openweathermap.org/img/wn/${icon5}@2x.png`;
}

