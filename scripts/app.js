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
    console.log(lat);
    console.log(lon);
    console.log(data);
    icon1 = data.weather[0].icon;
    console.log(data.weather[0].icon);
    d1TimeNow.src = `https://openweathermap.org/img/wn/${icon1}@2x.png`;

    icon6 = data.weather[0].icon;
    day1.src = `https://openweathermap.org/img/wn/${icon6}@2x.png`;
    
    
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

const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const day4 = document.getElementById('day4');
const day5 = document.getElementById('day5');


async function getFiveDayForecast(lat, lon) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`);
    var data = await res.json();
    console.log(data);
    // document.querySelector('.timeOrDate').innerHTML = (data.main.temp);
    // document.querySelector('.d1TimeNow').innerHTML = data;
    d1TimeNowHighTemp.innerText = Math.round(data.list[0].main.temp_max) + "°F";

    // document.getElementById

    document.getElementById('d1HighTemp').innerText = "H:" + Math.round(data.list[0].main.temp_max) + "°F";
    document.getElementById('d1LowTemp').innerText = "L:" + Math.round(data.list[0].main.temp_min) + "°F";

    icon2 = data.list[5].weather[0].icon;
    d1Time12pm.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`;

    d1Time12pmHighTemp.innerText = Math.round(data.list[5].main.temp_max) + "°F";
    document.getElementById('d2HighTemp').innerText = "H:" + Math.round(data.list[5].main.temp_max) + "°F";
    document.getElementById('d2LowTemp').innerText = "L:" + Math.round(data.list[5].main.temp_min) + "°F";

    icon3 = data.list[6].weather[0].icon;
    d1Time3pm.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`;

    d1Time3pmHighTemp.innerText = Math.round(data.list[6].main.temp_max) + "°F";
    document.getElementById('d3HighTemp').innerText = "H:" + Math.round(data.list[6].main.temp_max) + "°F";
    document.getElementById('d3LowTemp').innerText = "L:" + Math.round(data.list[6].main.temp_min) + "°F";

    icon4 = data.list[7].weather[0].icon;
    d1Time6pm.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`;

    d1Time6pmHighTemp.innerText = Math.round(data.list[7].main.temp_max) + "°F";
    document.getElementById('d4HighTemp').innerText = "H:" + Math.round(data.list[7].main.temp_max) + "°F";
    document.getElementById('d4LowTemp').innerText = "L:" + Math.round(data.list[7].main.temp_min) + "°F";

    icon5 = data.list[8].weather[0].icon;
    d1Time9pm.src = `https://openweathermap.org/img/wn/${icon5}@2x.png`;

    d1Time9pmHighTemp.innerText = Math.round(data.list[8].main.temp_max) + "°F";
    document.getElementById('d5HighTemp').innerText = "H:" + Math.round(data.list[8].main.temp_max) + "°F";
    document.getElementById('d5LowTemp').innerText = "L:" + Math.round(data.list[8].main.temp_min) + "°F";

  
    
    icon7 = data.list[8].weather[0].icon;
    console.log(icon7);
    day2.src = `https://openweathermap.org/img/wn/${icon7}@2x.png`;
    
    icon8 = data.list[16].weather[0].icon;
    day3.src = `https://openweathermap.org/img/wn/${icon8}@2x.png`;
    
    icon9 = data.list[24].weather[0].icon;
    day4.src = `https://openweathermap.org/img/wn/${icon9}@2x.png`;
    
    icon10 = data.list[32].weather[0].icon;
    day5.src = `https://openweathermap.org/img/wn/${icon10}@2x.png`;
}
