const city = document.querySelector(".city");
const search = document.querySelector("#search");
const city_discription = document.querySelector(".city_discription");
const celices = document.querySelector(".celices");
const description = document.querySelector(".description");
const humidityy = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let weather = {
  apikey: "9748a42de630acfbb5db65d9466a56af",
};

search.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${weather.apikey}`
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
      .then((data) => {
        console.log(data)
        display(data);
        
    });
});

function display(data) {
  const { icon } = data.weather[0];
  const desc = data.weather[0].description;
  city_discription.innerHTML = `Weather in ${data.name}`;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  description.innerHTML = desc;
  celices.innerText = (data.main.temp / 10).toFixed(0) + "°C";
  humidityy.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind: ${data.wind.speed} Km/h`;
}
