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
    var lat = 51.500153;
    var lon = -0.1262362;
    // var city = London;
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
        console.log(data.list[0].wind.speed)
        console.log(data.list[0].main.temp)
        var windSpeed = data.list[0].wind.speed;
        var windEl = document.createElement('p');
        console.log(windEl);
        var mainTemp = data.list[0].main.temp;
        var tempEl = document.createElement('p');
        console.log(tempEl)
        

    })
     // renderItems(city, data);


    .catch(function (err) {
        console.error(err);
    });
}

fetchWeather();

  // For loop to register 5 days worth of datapoints until the 5th day
for (let i = 1; i < 6; i++) {
    const element = array[i];
}




