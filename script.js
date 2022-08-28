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
}
document.forms.myForm.addEventListener('submit', function(){
    event.preventDefault();
    getWeahter();
})
