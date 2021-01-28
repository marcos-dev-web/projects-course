import api_key from '../../key.js';

const key = api_key();

console.log(key)
var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
script.defer = true;

const map_view = document.querySelector('.map__container');

let map;

window.initMap = function() {
  map = new google.maps.Map(map_view, {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  })
  
};

document.head.appendChild(script);
      
