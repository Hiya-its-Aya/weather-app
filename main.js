let typeTemp = "imperial";
const cityname = document.querySelector("#search");
const btn = document.querySelector('button');
let url;


async function getWeather(url = 'http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&APPID=d02dd8bb4e86ce62227a8c23f7214c11'){
    const response = await fetch(url, {mode:"cors"})
    const weatherData = await response.json();
    const city = weatherData.name;
    const temp = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const tempMin  = weatherData.main.temp_min;
    const tempMax  = weatherData.main.temp_max;
    const description = weatherData.weather[0].description;
    const code = weatherData.weather[0].icon;
    displayWeather(city, temp, description, code);
    console.log(weatherData);
}


function displayWeather(name, temp, description, code){
    const domContain = document.querySelector("#dom-container");
    domContain.innerHTML = 
    `<div id = temp>${name} ${parseInt(temp)}<sup>o</sup></div>
    <div id= description>${description}</div>
    <img src="http://openweathermap.org/img/wn/${code}@2x.png">` 
}

const toggle = document.querySelector("#toggle");

toggle.addEventListener('change', ()=> {changeToggle(cityname.value)
console.log(cityname.value)})

function changeToggle(name){
    if(toggle.checked === true){
        if (name === ""){
            url = 'http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=d02dd8bb4e86ce62227a8c23f7214c11';
            getWeather(url)
        }
        else{
            url = 'http://api.openweathermap.org/data/2.5/weather?q='+ name +'&units=metric&APPID=d02dd8bb4e86ce62227a8c23f7214c11';
            getWeather(url)
        }
        typeTemp = "metric"
    }
    if(toggle.checked === false){
        if (name === ""){
            url = 'http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&APPID=d02dd8bb4e86ce62227a8c23f7214c11';
            getWeather(url)
        }
        else{
            url = 'http://api.openweathermap.org/data/2.5/weather?q='+ name +'&units=imperial&APPID=d02dd8bb4e86ce62227a8c23f7214c11';
            getWeather(url)
        }
        typeTemp = "imperial"
    }
}   

btn.addEventListener('click', ()=>{
    url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityname.value +'&units=imperial&APPID=d02dd8bb4e86ce62227a8c23f7214c11';
    getWeather(url)
})

getWeather();
