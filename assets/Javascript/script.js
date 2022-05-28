const APIKey = 'd69762104d76621b9eda338e1a084d6a';
​
const searchButton = document.getElementById('searchButton');
//searchButton.addEventListener('click', searchCity);
​
searchButton.addEventListener('click', convertCityToGeoLocation);
​
function convertCityToGeoLocation(){
  let city = document.getElementById('myText').value;
​
  const queryGeoLocationURL = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&appid='+ APIKey;
    
  fetch(queryGeoLocationURL)
    .then(response => response.json())
    .then(data => searchCity(data))
    .catch(error => console.log('error', error));
}
​
function showLatLong(data){
   //console.log(data)
   const lat = data[0].lat;
   const long = data[0].lon;
   //console.log(lat, long)
}
​
function searchCity(data) {
​
  const lat = data[0].lat;
  const long = data[0].lon;
​
  showLatLong(data);
  
  const queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat + '&lon='+ long + '&exclude=minutely,hourly&appid=' + APIKey + '&units=metric';
​
  fetch(queryURL)
    .then(response => response.json())
    .then(data => showWeather(data))
    .catch(error => console.log('error', error));
}
​
function showWeather(data) {
  
  const weatherDisplayBox = document.getElementById('weatherDisplayBox');
​
  const feelsLike = data.current.feels_like;
  const temperature = data.current.temp;
  const humidity = data.current.humidity;
  const windSpeed = data.current.speed;
  //const weatherIcon = data.weather[0].icon;
​
    /*why does this function only work when clicked twice?
  
  const iconImage = document.querySelector('img');
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click',showIcon);
​
  function showIcon(){
    img.style.display = 'block';
  }*/
  
  const weatherConditionElementTemperature = document.createElement('p');
  weatherConditionElementTemperature.textContent = `The current temperature is ${temperature} degrees Celsius.`;
  weatherDisplayBox.append(weatherConditionElementTemperature);
​
  const weatherConditionElementHumidity = document.createElement('p');
  weatherConditionElementHumidity.textContent = `The current humidity is ${humidity}%`;
  weatherDisplayBox.append(weatherConditionElementHumidity);
​
  const weatherConditionElementFeelsLike = document.createElement('p');
  weatherConditionElementFeelsLike.textContent = `It feels like ${temperature} degrees Celsius.`;
  weatherDisplayBox.append(weatherConditionElementFeelsLike);
​
  
  const img = document.querySelector('img')
  
​
  if (weatherIcon === '01d') {
    img.setAttribute('src','./assets/Weather Icons/01d.png');
    
    } 
  else if (weatherIcon === '02d') {
    img.setAttribute('src','./assets/Weather Icons/02d.png');
    
  } 
  else if (weatherIcon === '03d') {
    img.setAttribute('src','./assets/Weather Icons/03d.png');
    
  }
  else if (weatherIcon === '04d') {
    img.setAttribute('src','./assets/Weather Icons/04d.png');
​
  }
​
  else if (weatherIcon === '09d') {
    img.setAttribute('src','./assets/Weather Icons/09d.png');
    
  }
  else if (weatherIcon === '10d') {
    img.setAttribute('src','./assets/Weather Icons/10d.png');
    
  }
  else if (weatherIcon === '11d') {
    img.setAttribute('src','./assets/Weather Icons/11d.png');
    
  }
  else if (weatherIcon === '13d') {
    img.setAttribute('src','./assets/Weather Icons/13d.png');
    
  }
    
  else if (weatherIcon === '01n') {
    img.setAttribute('src','./assets/Weather Icons/01n.png');
    
  }
  else if (weatherIcon === '02n') {
    img.setAttribute('src','./assets/Weather Icons/02n.png');
​
  }
  else if (weatherIcon === '03n') {
    img.setAttribute('src','./assets/Weather Icons/03n.png');
​
  }
  else if (weatherIcon === '04n') {
    img.setAttribute('src','./assets/Weather Icons/04n.png');
​
  }
  else if (weatherIcon === '09n') {
    img.setAttribute('src','./assets/Weather Icons/09n.png');
​
  }
  else if (weatherIcon === '10n') {
    img.setAttribute('src','./assets/Weather Icons/10n.png');
​
  }
  else if (weatherIcon === '11n') {
    img.setAttribute('src','./assets/Weather Icons/11n.png');
​
  }
  else if (weatherIcon === '13n') {
    img.setAttribute('src','./assets/Weather Icons/13n.png');
​
  }
  else if (weatherIcon === '50d') {
    img.setAttribute('src','./assets/Weather Icons/50d.png');
​
  }
    
  else if (weatherIcon === '50n') {
    img.setAttribute('src','./assets/Weather Icons/50n.png');
​
  }
}; 
​
​
function createWeatherElements(data) {
​
  
}
