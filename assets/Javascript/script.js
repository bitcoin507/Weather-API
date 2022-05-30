const APIKey = 'd69762104d76621b9eda338e1a084d6a';

const searchButton = document.getElementById('searchButton');
//searchButton.addEventListener('click', searchCity);

searchButton.addEventListener('click', convertCityToGeoLocation);

function convertCityToGeoLocation(){
  let city = document.getElementById('myText').value;

  const queryGeoLocationURL = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&appid='+ APIKey;
    
  fetch(queryGeoLocationURL)
    .then(response => response.json())
    .then(data => searchCity(data))
    .catch(error => console.log('error', error));
}



function searchCity(data) {

  const lat = data[0].lat;
  const long = data[0].lon;
  
  

  
  
  const queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat + '&lon='+ long + '&exclude=minutely,hourly&appid=' + APIKey + '&units=metric';

  fetch(queryURL)
    .then(response => response.json())
    .then(data => showWeather(data))
     
   // .catch(error => console.log('error', error));
    
}

function showWeather(data) {
  console.log(data)
  const weatherDisplayBox = document.getElementById('weatherDisplayBox');
  let city = document.getElementById('myText').value;
  const feelsLike = data.current.feels_like;
  const temperature = data.current.temp;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_speed;
  const UVIndex = data.current.uvi;
  const UNIXTimeStamp = data.current.dt;

//Weather Icon
  const weatherIcon = data.current.weather[0].icon;

  //5-Day Weather Icons

  const firstDayIcon = data.daily[0].weather[0].icon;
  console.log(firstDayIcon)
  
  const secondDayIcon = data.daily[1].weather[0].icon;
  console.log(secondDayIcon)
  
  const thirdDayIcon = data.daily[2].weather[0].icon;
 
  const fourthDayIcon = data.daily[3].weather[0].icon;
 
  const fithDayIcon = data.daily[4].weather[0].icon;

 //Temperature consts for each of the 5day forcast

  const NewTemp1 = data.daily[0].temp.day;
 

  const NewTemp2 = data.daily[1].temp.day;
  

  const NewTemp3 = data.daily[2].temp.day;
  

  const NewTemp4 = data.daily[3].temp.day;
  

  const NewTemp5 = data.daily[4].temp.day;

  //5-DAY wind speed variables

  const newWindSpeed1 = data.daily[0].wind_speed;

  const newWindSpeed2 = data.daily[1].wind_speed;

  const newWindSpeed3 = data.daily[2].wind_speed;

  const newWindSpeed4 = data.daily[3].wind_speed;

  const newWindSpeed5 = data.daily[4].wind_speed;

  //5-day humidity

  const newHumidity1 = data.daily[0].humidity;
  
  const newHumidity2 = data.daily[1].humidity;

  const newHumidity3 = data.daily[2].humidity;

  const newHumidity4 = data.daily[3].humidity;

  const newHumidity5 = data.daily[4].humidity;

  //5-day UV Index

  const newUVIndex1 = data.daily[0].uvi;
  console.log(newUVIndex1)
  
  const newUVIndex2 = data.daily[1].uvi;
  console.log(newUVIndex2)

  const newUVIndex3 = data.daily[2].uvi;
  console.log(newUVIndex3)

  const newUVIndex4 = data.daily[3].uvi;
  console.log(newUVIndex4)

  const newUVIndex5 = data.daily[4].uvi;
  console.log(newUVIndex5)

  
  


 

  const firstDayUNIXTimeStamp = data.daily[0].dt;
  const secondDayUNIXTimeStamp = data.daily[1].dt;
  const thirdDayUNIXTimeStamp = data.daily[2].dt;
  const fourthDayUNIXTimeStamp = data.daily[3].dt;
  const fithDayUNIXTimeStamp = data.daily[4].dt;
  
  

  const timeStamp = UNIXTimeStamp  * 1000;

  const firstDayTimestamp = firstDayUNIXTimeStamp * 1000;
  const secondDayTimestamp = secondDayUNIXTimeStamp * 1000;
  const thirdDayTimestamp = thirdDayUNIXTimeStamp * 1000;
  const fourthDayTimestamp = fourthDayUNIXTimeStamp * 1000;
  const fithDayTimestamp = fithDayUNIXTimeStamp * 1000;

  const timezoneOffset = data.timezone_offset * 1000;

  const newTime = timeStamp + timezoneOffset;

  const firstDayNewTime = firstDayTimestamp + timezoneOffset;
  const secondDayNewTime = secondDayTimestamp + timezoneOffset;
  const thirdDayNewTime = thirdDayTimestamp + timezoneOffset;
  const fourthDayNewTime = fourthDayTimestamp + timezoneOffset;
  const fithDayNewTime = fithDayTimestamp + timezoneOffset;
  
    
    
  

  const dateObject = new Date(newTime);
  const humanDateFormat = dateObject.toLocaleString();
  console.log(humanDateFormat)

  const firstDayDateObject = new Date(firstDayNewTime);
  const firstDayhumanDateFormat = firstDayDateObject.toLocaleString("en-US", {month: "long",weekday: "long",day: "numeric",year: "numeric"}) // Monday
  console.log(firstDayhumanDateFormat)

  const secondDayDateObject = new Date(secondDayNewTime);
  const secondDayhumanDateFormat = secondDayDateObject.toLocaleString("en-US", {month: "long",weekday: "long",day: "numeric",year: "numeric"}) // Monday
  console.log(secondDayhumanDateFormat)
  
  const thirdDayDateObject = new Date(thirdDayNewTime);
  const thirdDayhumanDateFormat = thirdDayDateObject.toLocaleString("en-US", {month: "long",weekday: "long",day: "numeric",year: "numeric"}) // Monday
  console.log(thirdDayhumanDateFormat)

  const fourthDayDateObject = new Date(fourthDayNewTime);
  const fourthDayhumanDateFormat = fourthDayDateObject.toLocaleString("en-US", {month: "long",weekday: "long",day: "numeric",year: "numeric"}) // Monday
  console.log(fourthDayhumanDateFormat)

  const fithDayDateObject = new Date(fithDayNewTime);
  const fithDayhumanDateFormat = fithDayDateObject.toLocaleString("en-US", {month: "long",weekday: "long",day: "numeric",year: "numeric"}) // Monday
  console.log(fithDayhumanDateFormat)
  



 

  

  const weatherConditionElementTime = document.createElement('p');
  weatherConditionElementTime.textContent = `${city}: date and time is ${humanDateFormat} .`;
  weatherDisplayBox.append(weatherConditionElementTime);
  
  const weatherConditionElementTemperature = document.createElement('p');
  weatherConditionElementTemperature.textContent = `The current temperature is ${temperature} °C`;
  weatherDisplayBox.append(weatherConditionElementTemperature);

  const weatherConditionElementHumidity = document.createElement('p');
  weatherConditionElementHumidity.textContent = `The current humidity is ${humidity}%`;
  weatherDisplayBox.append(weatherConditionElementHumidity);

  const weatherConditionElementFeelsLike = document.createElement('p');
  weatherConditionElementFeelsLike.textContent = `It feels like ${temperature} °C`;
  weatherDisplayBox.append(weatherConditionElementFeelsLike);

  const weatherConditionElementWindSpeed = document.createElement('p');
  weatherConditionElementWindSpeed.textContent = `Wind speed is ${windSpeed} kph`;
  weatherDisplayBox.append(weatherConditionElementWindSpeed);

  const weatherConditionElementUVIndex = document.createElement('p');
  weatherConditionElementUVIndex.textContent = `UV Index is ${UVIndex} `;
  weatherDisplayBox.append(weatherConditionElementUVIndex);

  const firstDayWeatherConditionsDate = document.createElement('p');
  firstDayWeatherConditionsDate.textContent = ` ${firstDayhumanDateFormat} `;
  firstDayCard.append(firstDayWeatherConditionsDate); 
  
  const secondDayWeatherConditionsDate = document.createElement('p');
  secondDayWeatherConditionsDate.textContent = ` ${secondDayhumanDateFormat} `;
  secondDayCard.append(secondDayWeatherConditionsDate);

  const thirdDayWeatherConditionsDate = document.createElement('p');
  thirdDayWeatherConditionsDate.textContent = ` ${thirdDayhumanDateFormat} `;
  thirdDayCard.append(thirdDayWeatherConditionsDate);

  const fourthDayWeatherConditionsDate = document.createElement('p');
  fourthDayWeatherConditionsDate.textContent = ` ${fourthDayhumanDateFormat} `;
  fourthDayCard.append(fourthDayWeatherConditionsDate);

  const fithDayWeatherConditionsDate = document.createElement('p');
  fithDayWeatherConditionsDate.textContent = ` ${fithDayhumanDateFormat} `;
  fithDayCard.append(fithDayWeatherConditionsDate);
//Temperatures for each day of the 5day forcast

  const firstDayTemp = document.createElement('p');
  firstDayTemp.textContent = `Temperature: ${NewTemp1} °C `;
  firstDayCard.append(firstDayTemp); 

  const secondDayTemp = document.createElement('p');
  secondDayTemp.textContent = `Temperature: ${NewTemp2} °C `;
  secondDayCard.append(secondDayTemp); 

  const thirdDayTemp = document.createElement('p');
  thirdDayTemp.textContent = `Temperature: ${NewTemp3} °C `;
  thirdDayCard.append(thirdDayTemp); 

  const fourthDayTemp = document.createElement('p');
  fourthDayTemp.textContent = `Temperature: ${NewTemp4} °C `;
  fourthDayCard.append(fourthDayTemp); 

  const fithDayTemp = document.createElement('p');
  fithDayTemp.textContent = `Temperature: ${NewTemp5} °C `;
  fithDayCard.append(fithDayTemp); 

  //5 day wind speeds

  const firstDayWindSpeed = document.createElement('p');
  firstDayWindSpeed.textContent =`Wind Speed:${newWindSpeed1}`;
  firstDayCard.append(firstDayWindSpeed);



  const secondDayWindSpeed = document.createElement('p');
  secondDayWindSpeed.textContent =`Wind Speed:${newWindSpeed2}`;
  secondDayCard.append(secondDayWindSpeed);

  const thirdDayWindSpeed = document.createElement('p');
  thirdDayWindSpeed.textContent =`Wind Speed:${newWindSpeed3}`;
  thirdDayCard.append(thirdDayWindSpeed);


  const fourthDayWindSpeed = document.createElement('p');
  fourthDayWindSpeed.textContent =`Wind Speed:${newWindSpeed4}`;
  fourthDayCard.append(fourthDayWindSpeed);
  


  const fithDayWindSpeed = document.createElement('p');
  fithDayWindSpeed.textContent =`Wind Speed:${newWindSpeed5}`;
  fithDayCard.append(fithDayWindSpeed);

  //5-day humidity

  const firstDayHumidity = document.createElement('p');
  firstDayHumidity.textContent =`Humidity:${newHumidity1}%`;
  firstDayCard.append(firstDayHumidity);

  const secondDayHumidity = document.createElement('p');
  secondDayHumidity.textContent =`Humidity:${newHumidity2}%`;
  secondDayCard.append(secondDayHumidity);

  const thirdDayHumidity = document.createElement('p');
  thirdDayHumidity.textContent =`Humidity:${newHumidity3}%`;
  thirdDayCard.append(thirdDayHumidity);

  const fourthDayHumidity = document.createElement('p');
  fourthDayHumidity.textContent =`Humidity:${newHumidity4}%`;
  fourthDayCard.append(fourthDayHumidity);

  const fithDayHumidity = document.createElement('p');
  fithDayHumidity.textContent =`Humidity:${newHumidity5}%`;
  fithDayCard.append(fithDayHumidity);

  //5-day UVI

  const firstDayUVI = document.createElement('p');
  firstDayUVI.setAttribute('id','p1');
  firstDayUVI.textContent =`UV Index is: ${newUVIndex1}`;
  firstDayCard.append(firstDayUVI);

  const secondDayUVI = document.createElement('p');
  secondDayUVI.setAttribute('id','p2');
  secondDayUVI.textContent =`UV Index is: ${newUVIndex2}`;
  secondDayCard.append(secondDayUVI);

  const thirdDayUVI = document.createElement('p');
  thirdDayUVI.setAttribute('id','p3');
  thirdDayUVI.textContent =`UV Index is: ${newUVIndex3}`;
  thirdDayCard.append(thirdDayUVI);

  const fourthDayUVI = document.createElement('p');
  fourthDayUVI.setAttribute('id','p4');
  fourthDayUVI.textContent =`UV Index is: ${newUVIndex4}`;
  fourthDayCard.append(fourthDayUVI);

  const fithDayUVI = document.createElement('p');
  fithDayUVI.setAttribute('id','p5');
  fithDayUVI.textContent =`UV Index is: ${newUVIndex5}`;
  fithDayCard.append(fithDayUVI);





  if (UVIndex >= 8 ) {
    document.querySelector('p:last-child').style.color = 'red';
    
    } 
  else if (UVIndex >=2.9 && UVIndex <=7.9  ) {
    document.querySelector('p:last-child').style.color = '#fce000';
    
  } 
  else if (UVIndex <=2.9 ) {
    document.querySelector('p:last-child').style.color = '#08c408';
    
  }



  if (newUVIndex1 >= 8 ) {
    document.getElementById('p1').style.color = 'red';
    
    } 
  else if (newUVIndex1 >=2.9 && UVIndex <=7.9  ) {
    document.getElementById('p1').style.color = '#fce000';
    
  } 
  else if (newUVIndex1 <=2.9 ) {
    document.getElementById('p1').style.color = '#08c408';
    
  }

  
  if (newUVIndex2 >= 8 ) {
    document.getElementById('p2').style.color = 'red';
    
    } 
  else if (newUVIndex2 >=2.9 && UVIndex <=7.9  ) {
    document.getElementById('p2').style.color = '#fce000';
    
  } 
  else if (newUVIndex2 <=2.9 ) {
    document.getElementById('p2').style.color = '#08c408';
    
  }

  
  if (newUVIndex3 >= 8 ) {
    document.getElementById('p3').style.color = 'red';
    
    } 
  else if (newUVIndex3 >=2.9 && UVIndex <=7.9  ) {
    document.getElementById('p3').style.color = '#fce000';
    
  } 
  else if (newUVIndex3 <=2.9 ) {
    document.getElementById('p3').style.color = '#08c408';
    
  }

  
  if (newUVIndex4 >= 8 ) {
    document.getElementById('p4').style.color = 'red';
    
    } 
  else if (newUVIndex4 >=2.9 && UVIndex <=7.9  ) {
    document.getElementById('p4').style.color = '#fce000';
    
  } 
  else if (newUVIndex4 <=2.9 ) {
    document.getElementById('p4').style.color = '#08c408';
    
  }

  
  if (newUVIndex5 >= 8 ) {
    document.getElementById('p5').style.color = 'red';
    
    } 
  else if (newUVIndex5 >=2.9 && UVIndex <=7.9  ) {
    document.getElementById('p5').style.color = '#fce000';
    
  } 
  else if (newUVIndex5 <=2.9 ) {
    document.getElementById('p5').style.color = '#08c408';
    
  }

   
  



  
  const img = document.querySelector('img')
  

  if (weatherIcon === '01d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/01d.png');
    
    } 
  else if (weatherIcon === '02d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/02d.png');
    
  } 
  else if (weatherIcon === '03d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/03d.png');
    
  }
  else if (weatherIcon === '04d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/04d.png');

  }

  else if (weatherIcon === '09d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/09d.png');
    
  }
  else if (weatherIcon === '10d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/10d.png');
    
  }
  else if (weatherIcon === '11d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/11d.png');
    
  }
  else if (weatherIcon === '13d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/13d.png');
    
  }
    
  else if (weatherIcon === '01n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/01n.png');
    
  }
  else if (weatherIcon === '02n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/02n.png');

  }
  else if (weatherIcon === '03n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/03n.png');

  }
  else if (weatherIcon === '04n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/04n.png');

  }
  else if (weatherIcon === '09n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/09n.png');

  }
  else if (weatherIcon === '10n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/10n.png');

  }
  else if (weatherIcon === '11n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/11n.png');

  }
  else if (weatherIcon === '13n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/13n.png');

  }
  else if (weatherIcon === '50d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/50d.png');

  }
    
  else if (weatherIcon === '50n') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/50n.png');

  }


// First day icons

  if (firstDayIcon === '01d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/01d.png');
    
    } 
  else if (firstDayIcon === '02d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/02d.png');
    
  } 
  else if (firstDayIcon === '03d') {
    document.getElementById("img1").setAttribute('src','./assets/Weather Icons/03d.png');
    
  }
  else if (firstDayIcon === '04d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/04d.png');

  }

  else if (firstDayIcon === '09d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/09d.png');
    
  }
  else if (firstDayIcon === '10d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/10d.png');
    
  }
  else if (firstDayIcon === '11d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/11d.png');
    
  }
  else if (firstDayIcon === '13d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/13d.png');
    
  }
    
  else if (firstDayIcon === '01n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/01n.png');
    
  }
  else if (firstDayIcon === '02n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/02n.png');

  }
  else if (firstDayIcon === '03n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/03n.png');

  }
  else if (firstDayIcon === '04n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/04n.png');

  }
  else if (firstDayIcon === '09n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/09n.png');

  }
  else if (firstDayIcon === '10n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/10n.png');

  }
  else if (firstDayIcon === '11n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/11n.png');

  }
  else if (firstDayIcon === '13n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/13n.png');

  }
  else if (firstDayIcon === '50d') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/50d.png');

  }
    
  else if (firstDayIcon === '50n') {
    document.getElementById("img2").setAttribute('src','./assets/Weather Icons/50n.png');

  }



// seond day icons



  if (secondDayIcon === '01d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/01d.png');
    
    } 
  else if (secondDayIcon === '02d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/02d.png');
    
  } 
  else if (secondDayIcon === '03d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/03d.png');
    
  }
  else if (secondDayIcon === '04d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/04d.png');

  }

  else if (secondDayIcon === '09d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/09d.png');
    
  }
  else if ( secondDayIcon === '10d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/10d.png');
    
  }
  else if (secondDayIcon === '11d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/11d.png');
    
  }
  else if (secondDayIcon === '13d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/13d.png');
    
  }
    
  else if (secondDayIcon === '01n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/01n.png');
    
  }
  else if (secondDayIcon === '02n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/02n.png');

  }
  else if (secondDayIcon === '03n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/03n.png');

  }
  else if (secondDayIcon === '04n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/04n.png');

  }
  else if (secondDayIcon === '09n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/09n.png');

  }
  else if (secondDayIcon === '10n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/10n.png');

  }
  else if (secondDayIcon === '11n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/11n.png');

  }
  else if (secondDayIcon === '13n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/13n.png');

  }
  else if (secondDayIcon === '50d') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/50d.png');

  }
    
  else if (secondDayIcon === '50n') {
    document.getElementById("img3").setAttribute('src','./assets/Weather Icons/50n.png');

  }

  //Third day icons

  if (thirdDayIcon === '01d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/01d.png');
    
    } 
  else if (thirdDayIcon === '02d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/02d.png');
    
  } 
  else if (thirdDayIcon === '03d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/03d.png');
    
  }
  else if (thirdDayIcon === '04d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/04d.png');

  }

  else if (thirdDayIcon === '09d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/09d.png');
    
  }
  else if (thirdDayIcon === '10d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/10d.png');
    
  }
  else if (thirdDayIcon === '11d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/11d.png');
    
  }
  else if (thirdDayIcon === '13d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/13d.png');
    
  }
    
  else if (thirdDayIcon === '01n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/01n.png');
    
  }
  else if (thirdDayIcon === '02n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/02n.png');

  }
  else if (thirdDayIcon === '03n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/03n.png');

  }
  else if (thirdDayIcon === '04n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/04n.png');

  }
  else if (thirdDayIcon === '09n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/09n.png');

  }
  else if (thirdDayIcon === '10n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/10n.png');

  }
  else if (thirdDayIcon === '11n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/11n.png');

  }
  else if (thirdDayIcon === '13n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/13n.png');

  }
  else if (thirdDayIcon === '50d') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/50d.png');

  }
    
  else if (thirdDayIcon === '50n') {
    document.getElementById("img4").setAttribute('src','./assets/Weather Icons/50n.png');

  }




// fourth day icons

if (fourthDayIcon === '01d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/01d.png');
  
  } 
else if (fourthDayIcon === '02d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/02d.png');
  
} 
else if (fourthDayIcon === '03d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/03d.png');
  
}
else if (fourthDayIcon === '04d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/04d.png');

}

else if (fourthDayIcon === '09d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/09d.png');
  
}
else if (fourthDayIcon === '10d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/10d.png');
  
}
else if (fourthDayIcon === '11d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/11d.png');
  
}
else if (fourthDayIcon === '13d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/13d.png');
  
}
  
else if (fourthDayIcon === '01n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/01n.png');
  
}
else if (fourthDayIcon === '02n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/02n.png');

}
else if (fourthDayIcon === '03n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/03n.png');

}
else if (fourthDayIcon === '04n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/04n.png');

}
else if (fourthDayIcon === '09n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/09n.png');

}
else if (fourthDayIcon === '10n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/10n.png');

}
else if (fourthDayIcon === '11n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/11n.png');

}
else if (fourthDayIcon === '13n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/13n.png');

}
else if (fourthDayIcon === '50d') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/50d.png');

}
  
else if (fourthDayIcon === '50n') {
  document.getElementById("img5").setAttribute('src','./assets/Weather Icons/50n.png');

}


//fith day icons

if (fithDayIcon === '01d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/01d.png');
  
  } 
else if (fithDayIcon === '02d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/02d.png');
  
} 
else if (fithDayIcon === '03d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/03d.png');
  
}
else if (fithDayIcon === '04d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/04d.png');

}

else if (fithDayIcon === '09d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/09d.png');
  
}
else if (fithDayIcon === '10d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/10d.png');
  
}
else if (fithDayIcon === '11d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/11d.png');
  
}
else if (fithDayIcon === '13d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/13d.png');
  
}
  
else if (fithDayIcon === '01n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/01n.png');
  
}
else if (fithDayIcon === '02n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/02n.png');

}
else if (fithDayIcon === '03n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/03n.png');

}
else if (fithDayIconon === '04n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/04n.png');

}
else if (fithDayIcon === '09n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/09n.png');

}
else if (fithDayIcon === '10n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/10n.png');

}
else if (fithDayIcon === '11n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/11n.png');

}
else if (fithDayIcon === '13n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/13n.png');

}
else if (fithDayIcon === '50d') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/50d.png');

}
  
else if (fithDayIcon === '50n') {
  document.getElementById("img6").setAttribute('src','./assets/Weather Icons/50n.png');

}




};



