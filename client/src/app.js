const Cryptid = require('./models/cryptid.js');
const CryptidView = require('./views/cryptid_view.js');
const MapView = require('./views/map_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const url = 'http://localhost:3000/api/cryptids';
  const cryptid = new Cryptid(url);
  cryptid.getData();

  const mapView = new MapView();
  mapView.renderMap();
  mapView.renderSidebar();
  mapView.bindEvents();
});
