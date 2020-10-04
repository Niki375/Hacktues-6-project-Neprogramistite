var url = 'https://api.covidtracking.com/v1/us/daily.json';

function load(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      var dataGet = JSON.parse(xhr.response);
      document.getElementById("TotalInfected").innerHTML = dataGet[0].positive;
      document.getElementById("TotalDeaths").innerHTML = dataGet[0].death;
      document.getElementById("TotalRecovered").innerHTML = dataGet[0].recovered;
      document.getElementById("InfectedPerDay").innerHTML = dataGet[188].positive;
      document.getElementById("DeathsPerDay").innerHTML = dataGet[188].death;
      document.getElementById("RecoveredPerDay").innerHTML = dataGet[188].recovered;
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
load(url);

window.setInterval(function(){
    load(url)
  }, 500);
