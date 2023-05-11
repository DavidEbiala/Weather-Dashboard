var location = document.getElementById('location-name');
var searchBtn = document.getElementById('search-btn');

function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e113290cd8d9061903268496570d5a18';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }


  searchBtn.addEventListener('click', getApi);