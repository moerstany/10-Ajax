let apiKey="d546932a90e24a7832a681e6b0601915";
let apiUrl="https://api.openweathermap.org/data/2.5/forecast";
//https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}

/*$('#form1').submit(async function(){
    event.preventDefault();
    let cityName = $('#city').val();
    let data = await $.get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
});

if(data){
    $('#h5').text(data.city.name);
}*/
//https://api.openweathermap.org/data/2.5/forecast?q=Baku&appid=d546932a90e24a7832a681e6b0601915&units=metric

async function getWeahter()
{
    let cityName = document.forms.myForm.city.value;
    let response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
    let data = await response.json();
    console.log(data);

    document.querySelector('.cards').innerHTML=
    `<div class="card text-bg-warning mb-3" style="max-width: 60rem;">
    <p class="p1"><img src="http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png"/> </p> 
    <div class="card-body">
            <h5 id="h5">City name: ${data.city.name}</h5>
            <p class="card-text">Temperature: ${Math.round(data.list[1].main.temp)}°C</p>
            <p class="card-text">Temperature maximum: ${Math.round(data.list[1].main.temp_max)}°C &nbsp  &nbsp   Clouds: ${data.list[1].weather[0].description}</p>
            <p class="card-text">Temperature minimum: ${Math.round(data.list[1].main.temp_min)}°C &nbsp  &nbsp   Wind speed: ${data.list[1].wind.speed} m/c</p>
            <p class="card-text">Feels like: ${Math.round(data.list[1].main.feels_like)}°C</p>
                     
            <b class="card-text" >Data ${data.list[1].dt_txt}</b>
          </div>
    </div>`
   
   document.querySelector('.cardsGroup').innerHTML=
    `<div class="card-group">
        <div class="card border-light mb-3" >
        <div class="card text-white bg-dark mb-3" id="card2">
        <p class="p2"><img src="http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}.png"/> </p>
         <div class="card-body">
         <h5 id="h5">City name: ${data.city.name}</h5>
            <p class="card-text">Temperature: ${Math.round(data.list[9].main.temp)}°C</p>
            <p class="card-text">Temperature maximum: ${Math.round(data.list[9].main.temp_max)}°C</p>
            <p class="card-text">Temperature minimum: ${Math.round(data.list[9].main.temp_min)}°C</p>
            <p class="card-text">Feels like: ${Math.round(data.list[9].main.feels_like)}°C</p>
            <p class="card-text">Clouds: ${data.list[9].weather[0].description}</p>
            <p class="card-text">Wind speed: ${data.list[9].wind.speed} m/c</p>
            <hr>
            <p class="card-text">:Data ${data.list[9].dt_txt}</p>
        </div>
       </div>
      </div>
      <div class="card border-light mb-3" >
        <div class="card text-white bg-dark mb-3" id="card2">
        <p class="p2"><img src="http://openweathermap.org/img/wn/${data.list[17].weather[0].icon}.png"/> </p>
         <div class="card-body">
         <h5 id="h5">City name: ${data.city.name}</h5>
            <p class="card-text">Temperature: ${Math.round(data.list[17].main.temp)}°C</p>
            <p class="card-text">Temperature maximum: ${Math.round(data.list[17].main.temp_max)}°C</p>
            <p class="card-text">Temperature minimum: ${Math.round(data.list[17].main.temp_min)}°C</p>
            <p class="card-text">Feels like: ${Math.round(data.list[17].main.feels_like)}°C</p>
            <p class="card-text">Clouds: ${data.list[17].weather[0].description}</p>
            <p class="card-text">Wind speed: ${data.list[17].wind.speed} m/c</p>
            <hr>
            <p class="card-text">:Data ${data.list[17].dt_txt}</p>
        </div>
       </div>
      </div>
      <div class="card border-light mb-3" >
        <div class="card text-white bg-dark mb-3" id="card2">
        <p class="p2"><img src="http://openweathermap.org/img/wn/${data.list[25].weather[0].icon}.png"/> </p>
         <div class="card-body">
         <h5 id="h5">City name: ${data.city.name}</h5>
            <p class="card-text">Temperature: ${Math.round(data.list[25].main.temp)}°C</p>
            <p class="card-text">Temperature maximum: ${Math.round(data.list[25].main.temp_max)}°C</p>
            <p class="card-text">Temperature minimum: ${Math.round(data.list[25].main.temp_min)}°C</p>
            <p class="card-text">Feels like: ${Math.round(data.list[25].main.feels_like)}°C</p>
            <p class="card-text">Clouds: ${data.list[25].weather[0].description}</p>
            <p class="card-text">Wind speed: ${data.list[25].wind.speed} m/c</p>
            <hr>
            <p class="card-text">:Data ${data.list[25].dt_txt}</p>
        </div>
       </div>
      </div>
      <div class="card border-light mb-3" >
        <div class="card text-white bg-dark mb-3" id="card2">
        <p class="p2"><img src="http://openweathermap.org/img/wn/${data.list[33].weather[0].icon}.png"/> </p>
         <div class="card-body">
         <h5 id="h5">City name: ${data.city.name}</h5>
            <p class="card-text">Temperature: ${Math.round(data.list[33].main.temp)}°C</p>
            <p class="card-text">Temperature maximum: ${Math.round(data.list[33].main.temp_max)}°C</p>
            <p class="card-text">Temperature minimum: ${Math.round(data.list[33].main.temp_min)}°C</p>
            <p class="card-text">Feels like: ${Math.round(data.list[33].main.feels_like)}°C</p>
            <p class="card-text">Clouds: ${data.list[33].weather[0].description}</p>
            <p class="card-text">Wind speed: ${data.list[33].wind.speed} m/c</p>
            <hr>
            <p class="card-text">:Data ${data.list[33].dt_txt}</p>
        </div>
       </div>
      </div>
      
    </div>`
}
document.forms.myForm.addEventListener('submit', function(){
    event.preventDefault();
    getWeahter();
})
