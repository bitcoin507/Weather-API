const APIKey = 'd69762104d76621b9eda338e1a084d6a';

let city = 'Toronto';

 


//const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'city' +'&appid='+ 'd69762104d76621b9eda338e1a084d6a' +'&units=metric';


let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid='+ APIKey +'&units=metric',requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    





