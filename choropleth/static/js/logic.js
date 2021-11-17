// Creating the map object
var myMap = L.map("map", {
    center: [37, -40],
    zoom: 2
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function checkButton() {    
  if(document.getElementById('cases').checked) {   
      return document.getElementById('cases').value;
  }   
  else if(document.getElementById('doses').checked) {   
    return document.getElementById('cases').value;
  }   
  else if(document.getElementById('deaths').checked) {   
    return document.getElementById('cases').value;
  }   
  else if(document.getElementById('gdp').checked) {   
    return document.getElementById('cases').value;
  }  
  else {   
    return document.getElementById('cases').value;
  }   
}   

d3.selectAll("input").on("change", function() {
  map.clearLayers(geojson);
  makeChoropleth(checkbutton());
});

  // Load the GeoJSON data.
  var data = DATA;

  var geojson;

  // Create a new choropleth layer.
  geojson = L.choropleth(data, {

    // Define which property in the features to use.
    valueProperty: checkButton(),

    // Set the color scale.
    scale: ["#ffffb2", "#b10026"],

    // The number of breaks in the step range
    steps: 20,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Country: " + feature.properties.country_name + "<br>Total Cases per million<br>" + feature.properties.total_cases_per_million);
    }
  })

  // Set up the legend.
  var legend = L.control();
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add the minimum and maximum.
    var legendInfo = "<h1>Total Cases</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + parseInt(limits[0]) + "</div>" +
        "<div class=\"max\">" + parseInt(limits[limits.length - 1]) + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  function makeChoropleth() {
      geojson.addTo(myMap);
      legend.addTo(myMap);
  }