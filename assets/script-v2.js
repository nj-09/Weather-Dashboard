// Global variables
var searchInput = document.querySelector("#search-input")
var searchButton = document.querySelector("#search-button")
var historyDiv = document.querySelector("#history") // we already have a variable, so we can append here
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
 // var city = London;
 //var apiUrl = `${weatherApiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
 var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3f75236b7925362e7c2aa1e412e899f6&units=imperial`;
 
 fetch(apiUrl)
 .then(function (res) {
 return res.json();
 })
 .then(function (data) {
 console.log(data);
 document.getElementById('today').innerHTML = '';
 var weather = data.weather[0].description || data.weather[0].main;
 var tempF = data.main.temp;
 var windMph = data.wind.speed;
 var humidity = data.main.humidity;
 var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
 var iconDescription = data.weather[0].description || data.weather[0].main;
 var card = document.createElement('div');
 var cardBody = document.createElement('div');
 var heading = document.createElement('h2');
 var weatherIcon = document.createElement('img');
 var tempEl = document.createElement('p');
 var windEl = document.createElement('p');
 var humidityEl = document.createElement('p');
 tempEl.textContent = "Temp: " + tempF;
 windEl.textContent = "Wind Speed: "+windMph;
 humidityEl.textContent = "Humidity: "+humidity;
 weatherIcon.setAttribute('src', iconUrl);
 weatherIcon.setAttribute('alt', iconDescription);
 weatherIcon.setAttribute('class', 'weather-img');
// heading.innerHTML = `${location} (${moment().add(10, 'days').calendar()})`
formattedDate = moment().format('DD/MM/YYYY');
heading.innerHTML = `${location} (${formattedDate})`
 cardBody.append(heading)
 cardBody.append(tempEl)
 cardBody.append(weatherIcon)
 cardBody.append(windEl)
 cardBody.append(humidityEl)
 card.append(cardBody)
 
 document.getElementById("today").append(card);
 })
 .catch(function (err) {
 console.error(err);
 });
 }
 
 // we can do the CSS styling

 function fetch5dayWeather(location) {
 var lat = 51.509865;
 var lon = -0.118092;
 // var city = London;
 //var apiUrl = `${weatherApiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
 var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=3f75236b7925362e7c2aa1e412e899f6&units=imperial`;
 
 fetch(apiUrl)
 .then(function (res) {
 return res.json();
 })
 .then(function (data) {
 console.log(data);
 document.getElementById('forecast').innerHTML = '';
 var sectionEl = document.createElement("div")
 sectionEl.setAttribute("class", "section-element2")
 for(let i =0;i<data.list.length;i=i+8){
 var weather = data.list[i].weather[0].description || data.list[i].weather[0].main;
 var tempF = data.list[i].main.temp;
 var windMph = data.list[i].wind.speed;
 var humidity = data.list[i].main.humidity;
 var iconUrl = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
 var iconDescription = data.list[i].weather[0].description || data.list[i].weather[0].main;
 //var card = document.createElement('div');
 //card.setAttribute("class", "col-lg-3")
 var cardBody = document.createElement('div');
 cardBody.setAttribute("class", "card")
 var heading = document.createElement('h2');
 var weatherIcon = document.createElement('img');
 var tempEl = document.createElement('p');
 var windEl = document.createElement('p');
 var humidityEl = document.createElement('p'); // similar item to reference
//  heading.textContent = location 
fiveDays = moment().format('dddd');
heading.innerHTML = `${location} (${fiveDays})`
 // heading.textContent = moment().add(10, 'days').calendar()
 // heading.textContent = `${location } (${moment().add(10, 'days').calendar()})`
 // heading.innerHTML = `${location } (${moment().add(10, 'days').calendar()})`
 tempEl.textContent = "Temp: " + tempF;
 windEl.textContent = "Wind Speed: " +windMph;
 humidityEl.textContent = "Humidity: "+humidity;
 weatherIcon.setAttribute('src', iconUrl);
 weatherIcon.setAttribute('alt', iconDescription);
 weatherIcon.setAttribute('class', 'weather-img');
 cardBody.append(heading)
 cardBody.append(tempEl)
 cardBody.append(weatherIcon)
 cardBody.append(windEl)
 cardBody.append(humidityEl)

 sectionEl.append(cardBody)
 //card.append(cardBody)
 //sectionEl.append(card)
 }
 document.getElementById("forecast").append(sectionEl);
 })
 .catch(function (err) {
 console.error(err);
 });
 }


searchButton.addEventListener("click",function(event){
 event.preventDefault()
 var location = searchInput.value
 fetchWeather(location)
 fetch5dayWeather(location)

 // Pull previously saved cities OR if no saved cities create empty array

 // you'll need to add in a contingency for when you have saved something. Otherwise if you just start it as an amty array, you'll always overwrite it and have an empty array. For example:

 //var searchHistory = []; // it will always be empty if you do it this way, but if you've already search for a city, you want to check local storage and pull that in, so the alternative is:
 var searchHistory = JSON.parse(localStorage.getItem('cities')) || []

 // Save new location to saved city array

 // push our new city into this array searchHistory
 searchHistory.push(location)

 // store updated saved city array in local storage 
 localStorage.setItem("cities", JSON.stringify(searchHistory));
console.log(JSON.parse(localStorage.getItem("cities")));

// to call the function when a new city has been added to the search history.
populateButtons ()

})


function populateButtons () {

 //clear out old code
 historyDiv.innerHTML = "";

 // we need to grab the stored cities from local storage and store them in a variable
 var storedButtons = JSON.parse(localStorage.getItem("cities"));

 for (let i = 0; i < storedButtons.length; i++) {

 // create button elelements
// we dynamically create the button element
var buttonEl = document.createElement('button');
buttonEl.setAttribute("class", "btn")
 // add the text content
buttonEl.textContent = storedButtons[i] // ?
 //add event listener to key off function

 buttonEl.addEventListener('click', function(){
 //if the button is clicked, we want those functions to start with the city name populating
 fetchWeather(storedButtons[i])
 fetch5dayWeather(storedButtons[i]) 

 })

 //append button to the page
 historyDiv.append(buttonEl) 



}

}

// To call the function on page load
populateButtons ()



// how would i display the location?