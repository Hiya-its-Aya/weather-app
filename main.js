let typeTemp = "imperial";
const cityname = document.querySelector("#search");
const btn = document.querySelector('button');
const name = cityname.value;


async function getWeather(location, units){
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ location +'&units='+ units +'&APPID=d02dd8bb4e86ce62227a8c23f7214c11', {mode: 'cors'});
    const weatherData = await response.json();
    // const city = weatherData.name;
    // const temp = weatherData.main.temp;
    // const humidity = weatherData.main.humidity;
    // const tempMin  = weatherData.main.temp_min;
    // const tempMax  = weatherData.main.temp_max;
    displayWeather(weatherData.name, weatherData.main.temp);
    console.log(weatherData);
    return weatherData
}

 let weather = getWeather("london", "imperial");
console.log(weather)
function displayWeather(name, temp){
    const domContain = document.querySelector("#dom-container");
    domContain.innerHTML = name +' ' + parseInt(temp); 
}

const toggle = document.querySelector("#toggle");
toggle.addEventListener('change',(name)=>{
    if(name === null){
        name = "london"
    }
    if(toggle.checked === true){
        getWeather(name, "metric"); 
        typeTemp = "metric"
    }
    if(toggle.checked === false){
        getWeather(name, "imperial"), 
        typeTemp = "imperial"
    }
})


btn.addEventListener('click', ()=>{
    getWeather(cityname.value, typeTemp)
})

