const customerCareLine = document.getElementById('customerCareLine');
const customerCareLink = document.getElementById('customerCareLink');

customerCareLink.addEventListener('mouseover', () => {
  customerCareLine.classList.add('custom-badge');
  customerCareLine.classList.add('text-nowrap');
});

if(customerCareLine.className = 'custom-bage') {
  customerCareLink.addEventListener('mouseout', ()=> {
    customerCareLine.classList.remove('custom-badge');
  })
}

// MAP READING
var lagosLatLng = [6.45407, 3.39467];
var mymap = L.map('motw').setView(lagosLatLng, 13);

var mapboxUrl = `
https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}
.png?access_token={sk.eyJ1IjoidWdvbm5hIiwiYSI6ImNrM2Q4YWJ1dTEzcDAzZW14Y3AyZDhiN3QifQ
.pi_vgMxDM09vWlwBjrVmvw}`;
mapboxAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

var circle = L.circle([6.45407, 3.39467], {
  color: 'grey',
  fillColor: '#fff',
  fillOpacity: 0.1,
  radius: 800
}).addTo(mymap);

var Lagos = L.marker(lagosLatLng).bindPopup('This is LAGOS NAIJA')
    
var cities = L.layerGroup([Lagos]);

var streets   = L.tileLayer(mapboxUrl, {id: 'mapbox.streets', attribution: mapboxAttribution});

L.tileLayer(mapboxUrl, {
    maxZoom: 18,
    attribution: mapboxAttribution,
    id: 'mapbox.streets',
    accessToken: 'sk.eyJ1IjoidWdvbm5hIiwiYSI6ImNrM2Q4YWJ1dTEzcDAzZW14Y3AyZDhiN3QifQ.pi_vgMxDM09vWlwBjrVmvw',
    layers: [streets, cities]
}).addTo(mymap);

L.control.scale(100, true, false, true).addTo(mymap);


lagosLatLng.getBounds();