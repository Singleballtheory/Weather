import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.time').text(`The forcast for ${city} on ${response.list[0].dt_txt}`);
      $('.showHumidity').text(`The humidity in ${city} is ${response.list[0].main.humidity}%`);
      $('.showTemp').text(`The temperature in fahrenheit is ${response.list[0].main.temp} degrees.`);
      $('.showVis').text(`The visibility in feet is ${response.list[0].visibility}.`);
      $('.showClouds').text(`The cloud coverage today is ${response.list[0].clouds.all}%.`);
      
      $('.time1').text(`The forcast for ${city} on ${response.list[8].dt_txt}`);
      $('.showHumidity1').text(`The humidity in ${city} is ${response.list[8].main.humidity}%`);
      $('.showTemp1').text(`The temperature in fahrenheit is ${response.list[8].main.temp} degrees.`);
      $('.showVis1').text(`The visibility in feet is ${response.list[8].visibility}.`);
      $('.showClouds1').text(`The cloud coverage today is ${response.list[8].clouds.all}%.`);
    }
  });
});


