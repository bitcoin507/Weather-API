const APIKey = 'd69762104d76621b9eda338e1a084d6a';

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click',searchCity);

  function searchCity() {
    
    let city = document.getElementById('myText').value;
    
    const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + APIKey +'&units=metric';
    
    fetch(queryURL)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  }



const weatherDisplayBox = document.getElementById('weatherDisplayBox');


