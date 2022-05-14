const APIKey = 'd69762104d76621b9eda338e1a084d6a';





  


  let city = document.getElementById('myText').value;
  
  


 


const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid='+  + APIKey +'&units=metric';



  
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid='+ APIKey +'&units=metric')
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    





