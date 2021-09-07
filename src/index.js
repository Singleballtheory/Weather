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
    };

    request.open("GET", url, true);
    request.send();
    
    function getElements(response) {
      
      
      // const result = Object.entries(response.list[0].main);
      // console.log(result);
      // console.log(response.list[0].main);

      // $('.main').text(result);
      $('.time').text(`The forcast for ${city} on ${response.list[2].dt_txt}`);
      $('.showHumidity').text(`The humidity in ${city} will be ${response.list[2].main.humidity}%`);
      $('.showTemp').text(`The temperature in fahrenheit will be ${response.list[2].main.temp} degrees.`);
      $('.showClouds').text(`The cloud coverage today will be ${response.list[2].clouds.all}%.`);
      
      $('.time1').text(`The forcast for ${city} on ${response.list[10].dt_txt}`);
      $('.showHumidity1').text(`The humidity in ${city} will be ${response.list[10].main.humidity}%`);
      $('.showTemp1').text(`The temperature in fahrenheit will be ${response.list[10].main.temp} degrees.`);
      $('.showClouds1').text(`The cloud coverage today will be ${response.list[10].clouds.all}%.`);

      $('.time2').text(`The forcast for ${city} on ${response.list[18].dt_txt}`);
      $('.showHumidity2').text(`The humidity in ${city} will be ${response.list[18].main.humidity}%`);
      $('.showTemp2').text(`The temperature in fahrenheit will be ${response.list[18].main.temp} degrees.`);
      $('.showClouds2').text(`The cloud coverage today will be ${response.list[18].clouds.all}%.`);
    }
  });
});


