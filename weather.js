fetch("https://api.openweathermap.org/data/2.5/weather?q=cancun&appid=02eb6600162720bd99d4e318bd1f7bfb&units=metric")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Cancún: "+ data.main.temp +"\u00b0C";
    feelslike.textContent = "Feels Like: " + data.main.feels_like +"\u00b0C";
}); 