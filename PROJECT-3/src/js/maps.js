import api_key from "../../key.js";

const key = api_key();

var script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
script.defer = true;

const map_view = document.querySelector(".map__container");



let LatLng = {lat: -4.2970899,lng: -38.5729892}


const addMarker = (location, map) => {
  let label = 'C';

  return new google.maps.Marker({
    position: location,
    label,
    map: map
  })
}

const addInfo = (marker, map, html) => {
  let infowindow = new google.maps.InfoWindow({
    content: html,
    value: html,
  })

  marker.addListener('click', () => {
    infowindow.open(map, marker)
  })
}

window.initMap = function () {
  let map = new google.maps.Map(map_view, {
    center: LatLng,
    zoom: 16,
  });
  
  let marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    title: "Córrego"
  });

  let html = 
  "<div id='content'>"+
  "<h1 id='firstHeading' class='firstHeading'><b>Barreira</b></h1>" +
  "<p>Córrego</p>" +
  "</div>"
  

  
  addInfo(marker, map, html)
};

document.head.appendChild(script);
