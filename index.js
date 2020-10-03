var url = 'https://api.covidtracking.com/v1/us/daily.json';

function load(url) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
console.log("text");

window.setInterval(function(){
    load(url)
  }, 10000);