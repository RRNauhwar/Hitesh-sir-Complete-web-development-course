let cityInput = document.getElementById("cityInput");
let cityName = document.getElementById("cityName");
let currentDay = document.getElementById("currentDay");
let currentDate = document.getElementById("currentDate");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let windSpeed = document.getElementById("windSpeed");
let humidity = document.getElementById("humidity");

let button = document.getElementById("searchBtn");
let slider = document.getElementById("hourSlider");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

function setCurrentDate() {
  const now = new Date();
  currentDay.innerText = now.toLocaleDateString("en-US", { weekday: "long" });
  currentDate.innerText = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

setCurrentDate();

button.addEventListener("click", getWeather);

async function getWeather() {
  let city = cityInput.value;
  let apiKey = "adefe6c1c7c94389f0091eed7c97365b";

  let currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let currentRes = await fetch(currentUrl);
    let currentData = await currentRes.json();

    cityName.innerText = currentData.name;
    temperature.innerText = Math.round(currentData.main.temp) + "°C";
    humidity.innerText = currentData.main.humidity + "%";
    windSpeed.innerText = currentData.wind.speed + " km/h";
    description.innerText = currentData.weather[0].description;

    let forecastRes = await fetch(forecastUrl);
    let forecastData = await forecastRes.json();

    for (let i = 1; i <= 4; i++) {
      let dayData = forecastData.list[i * 8];
      let date = new Date(dayData.dt * 1000);
      document.getElementById(`day${i}`).innerText = date.toLocaleDateString(
        "en-US",
        { weekday: "short" }
      );
      document.getElementById(`temp${i}`).innerText =
        Math.round(dayData.main.temp) + "°";
    }

    // Update 10 hour slots (30 hours of data)
    for (let i = 1; i <= 10; i++) {
      let hourData = forecastData.list[i - 1];
      let time = new Date(hourData.dt * 1000);
      let hourString = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      });

      let timeElem = document.getElementById(`time${i}`);
      let tempElem = document.getElementById(`hourTemp${i}`);

      if (timeElem && tempElem) {
        timeElem.innerText = hourString;
        tempElem.innerText = Math.round(hourData.main.temp) + "°";
      }
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
});
