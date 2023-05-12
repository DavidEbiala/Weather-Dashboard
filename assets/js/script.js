var location = document.getElementById('location-name');
var searchBtn = document.getElementById('search-btn');

function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }


  searchBtn.addEventListener('click', getApi);