var url = 'https://api.covidtracking.com/v1/us/daily.json'; //A local page

function load(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      var dataGet = JSON.parse(xhr.response);
      document.getElementById("TotalInfected").innerHTML = dataGet[0].positive;
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}

window.setInterval(function(){
    load(url)
  }, 500);

//////////////////////////////////////////////////////////
function load1(url) {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        var dataGet = JSON.parse(xhr.response);
        document.getElementById("TotalDeaths").innerHTML = dataGet[0].death;
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send('');
  }
  
  window.setInterval(function(){
      load1(url)
    }, 500);

//////////////////////////////////////////////////////////////
function load2(url) {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        var dataGet = JSON.parse(xhr.response);
        document.getElementById("TotalRecovered").innerHTML = dataGet[0].recovered;
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send('');
  }
  
  window.setInterval(function(){
      load2(url)
    }, 500);

////////////////////////////////////////////
function load3(url) {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        var dataGet = JSON.parse(xhr.response);
        document.getElementById("InfectedPerDay").innerHTML = dataGet[188].positive;
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send('');
  }
  
  window.setInterval(function(){
      load3(url)
    }, 500);

//////////////////////////////////////////////////
function load4(url) {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        var dataGet = JSON.parse(xhr.response);
        document.getElementById("DeathsPerDay").innerHTML = dataGet[188].death;
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send('');
  }
  
  window.setInterval(function(){
      load4(url)
    }, 500);

////////////////////////////////////////////////////
function load5(url) {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        var dataGet = JSON.parse(xhr.response);
        document.getElementById("RecoveredPerDay").innerHTML = dataGet[188].recovered;
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send('');
  }
  
  window.setInterval(function(){
      load5(url)
    }, 500);