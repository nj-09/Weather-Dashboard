// Global variables
var searchInput = document.querySelector("#search-input")
var searchButton = document.querySelector("#search-button")
var historyDiv = document.querySelector("#history")
var historyButton = document.querySelector("#history-button")
var apiKey = "3f75236b7925362e7c2aa1e412e899f6"
var weatherApiRootUrl = 'https://api.openweathermap.org';



// API Key from openweather app
// 3f75236b7925362e7c2aa1e412e899f6 

// ----- Psuedocode ----- //
// 1. make a function that is connected to a eventlistener that when the search is made it activates the fetch call.
//2. hard code all the variables for the api
//3. console.log the data that you receive from the fetch call
//4. then console.log the data inside the fetch call to get the temp, wind speed, date.....etc.
//5. do this for only the single day first before you go into the 5 day.

// ------------------------------

//1. console.log each data point
//2. put each data point into a variable
//3. create an element inside of your javascript for each of the variables
//4. append those elements to the corresponding div on the html

//-------------------------------

function fetchWeather(location) {
    var lat = 51.509865;
    var lon = -0.118092;
  //   var city = London;
    var apiUrl = `${weatherApiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
         console.log(data);
         console.log(data.list);
         console.log(data.list[0]);
         console.log(data.list[0].dt);
         console.log(data.list[0].wind.speed);
         var weather = data.list[0]
         var tempF = weather.main.temp;
         var windMph = weather.wind.speed;
         var humidity = weather.main.humidity;
         var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
         var iconDescription = weather.weather[0].description || weather[0].main;
         console.log(tempF);
         console.log(windMph);
         console.log(humidity);
         console.log(iconUrl);
         console.log(iconDescription);
       
         var card = document.createElement('div');
         var cardBody = document.createElement('div');
         var heading = document.createElement('h2');
         var weatherIcon = document.createElement('img');
         var tempEl = document.createElement('p');
         var windEl = document.createElement('p');
         var humidityEl = document.createElement('p');
  
         weatherIcon.setAttribute('src', iconUrl);
         weatherIcon.setAttribute('alt', iconDescription);
         weatherIcon.setAttribute('class', 'weather-img');
         console.log(weatherIcon)
        // renderItems(city, data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }
  
fetchWeather();




  // For loop to register 5 days worth of datapoints until the 5th day
for (let i = 1; i < 6; i++) {
    const element = array[i];
}
