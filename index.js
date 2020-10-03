var url = 'https://api.covidtracking.com/v1/us/daily.json'; //A local page

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
load(url);