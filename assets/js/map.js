var map = L.map('map', {
  center: [-14.034845, -73.100096],
  zoom: 5,
  minZoom: 8,
  maxZoom: 20,
  maxBounds: [[-14.9128758864, -73.929108989], [-13.1008169864,-71.907624614]]
  });
  

  L.control.scale({
      imperial: false
      }).addTo(map);

     

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:clinicas_apurimac", //gisweb:clinicas_apurimac
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
clinicas.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:farmacias", //gisweb:farmacias
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacias.addTo(map);

var iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:inglesias", //gisweb:iglesias
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
iglesias.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:mercados", //gisweb:mercados
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:restaurantes", //gisweb:restaurantes
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
restaurantes.addTo(map);

var iniciales = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:colegios_inicial_apurimac", //gisweb:colegios_inicial_apurimac
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
iniciales.addTo(map);

var secundarios = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:colegios_segundaria_apurimac", //gisweb:colegios_segundaria_apurimac
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
secundarios.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:distrito_apurimac", //gisweb:distrito_apurimac
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
distritos.addTo(map);

var departamento = L.tileLayer.wms("http://localhost:8080/geoserver/webapurimac/wms?", {
layers: "webapurimac:departamento_apurimac", //gisweb:departamento_apurimac
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
departamento.addTo(map);

var baseMaps = {
  "OSM": basemapOSM,
  "Base Satelite": googleSat,
  "Base Hybrid:":googleHybrid,
  "Base Terrain:":googleTerrain,

  };
  var overlayMaps = {
  "Clinicas": clinicas,
  "Farmacias": farmacias,
  "Iglesias": iglesias,
  "Mercados": mercados,
  "Restaurantes": restaurantes,
  "Colegios iniciales": iniciales,
  "Colegios secundarios": secundarios,
  "Distritos": distritos,
  "Departamento": departamento,

  };
  L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
  }).addTo(map);


  