const APIKey = 'd69762104d76621b9eda338e1a084d6a';

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click',searchCity);

  function searchCity() {
    
    let city = document.getElementById('myText').value;
    
    const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + APIKey +'&units=metric';
    
    fetch(queryURL)
    .then(response => response.json())
    .then(data => showWeather(data))
    

    }

    

    
   // .then(data => console.log(data))
    //.catch(error => console.log('error', error));
    
    function showWeather(data) {

      console.log(data)
      
      const weatherDisplayBox = document.getElementById('weatherDisplayBox');
      createWeatherElement(data)

      function createWeatherElement(data){

        const feelsLike = data.main.feels_like;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherIcon = data.weather[0].icon;

        console.log(weatherIcon);
        
        
        
    
        const weatherConditionElementTemperature = document.createElement('p');
        weatherConditionElementTemperature.textContent = `The current temperature is ${temperature} degrees Celsius.`;
        weatherDisplayBox.append(weatherConditionElementTemperature);

        const weatherConditionElementHumidity = document.createElement('p');
        weatherConditionElementHumidity.textContent = `The current humidity is ${humidity}%`;
        weatherDisplayBox.append(weatherConditionElementHumidity);

        const weatherConditionElementFeelsLike = document.createElement('p');
        weatherConditionElementFeelsLike.textContent = `It feels like ${temperature} degrees Celsius.`;
        weatherDisplayBox.append(weatherConditionElementFeelsLike);

        
        const img = document.querySelector('img')
        

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

        }

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

        }
        else if (weatherIcon === '03n') {
          img.setAttribute('src','./assets/Weather Icons/03n.png');

        }
        else if (weatherIcon === '04n') {
          img.setAttribute('src','./assets/Weather Icons/04n.png');

        }
        else if (weatherIcon === '09n') {
          img.setAttribute('src','./assets/Weather Icons/09n.png');

        }
        else if (weatherIcon === '10n') {
          img.setAttribute('src','./assets/Weather Icons/10n.png');

        }
        else if (weatherIcon === '11n') {
          img.setAttribute('src','./assets/Weather Icons/11n.png');

        }
        else if (weatherIcon === '13n') {
          img.setAttribute('src','./assets/Weather Icons/13n.png');

        }
        else if (weatherIcon === '50d') {
          img.setAttribute('src','./assets/Weather Icons/50d.png');

        }
         
        else if (weatherIcon === '50n') {
          img.setAttribute('src','./assets/Weather Icons/50n.png');

        }
         
        


        








        
      }
    };


  


  




