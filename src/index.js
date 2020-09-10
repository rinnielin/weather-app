// Current date

let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let fullYear = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let fullDate = document.querySelector("h2");
fullDate.innerHTML = `${day} ${date} ${month} ${fullYear}, ${hours}:${minutes}`;

//Headline City
function headlineCity(response) {
  let userCity = response.data.name;
  let header = document.querySelector("#city");
  header.innerHTML = userCity;
  let currentTemperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#currentTemp");
  temp.innerHTML = currentTemperature;
}

function searchCity(city) {
  let apiKey = `3ae44fdc21573b47e168c885991d0a43`;
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=3ae44fdc21573b47e168c885991d0a43`;
  axios.get(apiUrl).then(headlineCity);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#inputCity").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "3ae44fdc21573b47e168c885991d0a43";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=3ae44fdc21573b47e168c885991d0a43`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
