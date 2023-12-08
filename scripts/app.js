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
    
    
    document.getElementById('standardTemp').innerText = Math.round(data.main.temp) + "°F";
    document.getElementById('iconDescription').innerText = data.weather[0].description.toUpperCase();
    document.getElementById('highTemp').innerText = "H:" + Math.round(data.main.temp_max) + "°F";
    document.getElementById('lowTemp').innerText = "L:" + Math.round(data.main.temp_min) + "°F";

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


const firstDay = document.getElementById('firstDay');
async function dayOfWeek(){
    var res = await fetch (`https://timeapi.io/api/Conversion/DayOfTheWeek/2021-03-14 \
    -H 'accept: application/json'`)
    var data = res.json();
    
    document.getElementById('firstDay') = data.dayOfWeek;
}


let d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekDay = days[d.getDay()];
console.log(weekDay);


async function getFiveDayForecast(lat, lon) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=47c60285e38b30cccff817c2787514c7&&units=imperial`);
    var data = await res.json();
    console.log(data);

    d1TimeNowHighTemp.innerText = Math.round(data.list[0].main.temp_max) + "°F";


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


let heartIcon = document.getElementById("heartIcon");
let nameInput = document.getElementById("nameInput");
let nameTxt = document.getElementById("nameTxt");
let favorite1 = document.getElementById("favorites1");
let favorite2 = document.getElementById("favorites2");
let favorite3 = document.getElementById("favorites3");
let favorite4 = document.getElementById("favorites4");
let favorite5 = document.getElementById("favorites5");
let favorite6 = document.getElementById("favorites6");
let favorite7 = document.getElementById("favorites7");
let favorite8 = document.getElementById("favorites8");
let favorite9 = document.getElementById("favorites9");
let favorite10 = document.getElementById("favorites10");
let favorite11 = document.getElementById("favorites11");
let favorite12 = document.getElementById("favorites12");
let favorite13 = document.getElementById("favorites13");
let favorite14 = document.getElementById("favorites14");

let favoritesArray  = [];
if(localStorage.getItem("favorites")){
    favoritesArray = JSON.parse(localStorage.getItem("favorites"));
    favorites1.innerText = favoritesArray[0];
    favorites2.innerText = favoritesArray[1];
    favorites3.innerText = favoritesArray[2];
    favorites4.innerText = favoritesArray[3];
    favorites5.innerText = favoritesArray[4];
    favorites6.innerText = favoritesArray[5];
    favorites7.innerText = favoritesArray[6];
    favorites8.innerText = favoritesArray[7];
    favorites9.innerText = favoritesArray[8];
    favorites10.innerText = favoritesArray[9];
    favorites11.innerText = favoritesArray[10];
    favorites12.innerText = favoritesArray[11];
    favorites13.innerText = favoritesArray[12];
    favorites14.innerText = favoritesArray[13];

}

heartIcon.addEventListener('click', function(){
    favoritesArray.push(nameInput.value);
    nameInput.value = "";
    console.log(favoritesArray[1]);

    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
});


// removeBtn.addEventListener('click', function(){
//     let index = favoritesArray.indexOf(nameInput.value);
//     favoritesArray.splice(index, 1);
//     nameInput.value = "";
//     console.log(favoritesArray);

//     localStorage.setItem("names", JSON.stringify(favoritesArray));
// });