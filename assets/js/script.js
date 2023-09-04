var location = document.getElementById('location-name');
var searchBtn = document.getElementById('search-btn');

var key = '64f2ee2a8261daa4d9f780f5b365f275';
var city = "Denver"; 

var todayCard= $('.todayCard');
function getWeatherApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;

    $.ajax({
      url: requestUrl,
      method: 'GET',
    }).then(function (response) {
      $('.cardTodayCityName').text(response.name);
      $('.cardTodayDate').text(date);
      //Icons
      $('.icons').attr('src', `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
      // Temperature
      var pEl = $('<p>').text(`Temperature: ${response.main.temp} °F`);
      cardTodayBody.append(pEl);

      //Humidity
      var pElHumid = $('<p>').text(`Humidity: ${response.main.humidity} %`);
      cardTodayBody.append(pElHumid);
      //Wind Speed
      var pElWind = $('<p>').text(`Wind Speed: ${response.wind.speed} MPH`);
      cardTodayBody.append(pElWind);
      //Set the lat and long from the searched city
      var cityLon = response.coord.lon;
      // console.log(cityLon);
      var cityLat = response.coord.lat;
      // console.log(cityLat);
    });

    getFiveDay();
  }

  var fiveForecastEl = $('.fiveForecast');

  searchBtn.addEventListener('click', getApi);