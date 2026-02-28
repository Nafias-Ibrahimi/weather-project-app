const APIKEY = "d54b108e96c80d6717d844eba8dad9a6";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

function toFahrenheit(celsius){
    return (celsius * 9/5 + 32);
}

function showTemperature(celsius){
    const fahrenheit = toFahrenheit(celsius);
    document.querySelector(".temp").textContent = Math.round(celsius) + "°C | " + fahrenheit + "°F";
}
async function checkWeather(city = 'tunisia'){
    const res = await fetch(URL + city + `&appid=${APIKEY}`);
    const data = await res.json();
    console.log(data);

    if(data.cod !== 200) {
        alert("City not found");
        return;
    }

    const celsius = data.main.temp;
    const fahrenheit = toFahrenheit(celsius);
    document.querySelector(".city").textContent = data.name;
    // showTemperature(celsius);
  
    // document.querySelector(".temp").textContent = Math.floor(data.main.temp) + "°c";
    document.querySelector(".temp").textContent=Math.round(celsius) +  "°C |" + Math.round(fahrenheit) + "°F";

    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " Km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
searchBox.addEventListener("keyup", (e)=>{
    if (e.key == "Enter") {
        checkWeather(searchBox.value)
    }
})

checkWeather();