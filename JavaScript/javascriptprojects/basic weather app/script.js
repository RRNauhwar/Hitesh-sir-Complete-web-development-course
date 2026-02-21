let button = document.getElementById("get-weather-btn");
let cityInput = document.getElementById("city-input");
let cityName = document.getElementById("city-name");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let weatherInfo = document.getElementById("weather-info");
let errorMessage = document.getElementById("error-message");

button.addEventListener("click", getWeather);

async function getWeather() {
  let city = cityInput.value;
  let apiKey = "adefe6c1c7c94389f0091eed7c97365b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  if (data.cod == "404") {
    errorMessage.classList.remove("hidden");
    weatherInfo.classList.add("hidden");
    return;
  }
  cityName.innerText = data.name;
  temperature.innerText = "Temperature: " + data.main.temp + " °C";
  description.innerText = "Weather: " + data.weather[0].description;
}
weatherInfo.classList.remove("hidden");
errorMessage.classList.add("hidden");
