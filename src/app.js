function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "c3f18f2e1db7f3db1a052f607f903a25";
let api = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

console.log(api);
