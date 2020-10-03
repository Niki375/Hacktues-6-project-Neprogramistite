var url = 'https://api.covidtracking.com/v1/us/daily.json'; //A local page

function load(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      var dataGet = JSON.parse(xhr.responseText);
      document.getElementById("TotalInfected").innerHTML = dataGet.death;
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
load(url);