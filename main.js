
async function getWeather(location){
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location +'&APPID=d02dd8bb4e86ce62227a8c23f7214c11', {mode: 'cors'});
    const weatherData = await response.json();
    let temp = weatherData.main.temp 
    console.log(weatherData)

}

getWeather("london");