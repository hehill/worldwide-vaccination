// Creating the map object
var myMap = L.map("map", {
    center: [30.5, -10.8],
    zoom: 3
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function checkButton() {    
  if(document.getElementById('Total Cases per Million').checked) {   
    selected = [document.getElementById('Total Cases per Million').value, document.getElementById('Total Cases per Million').id];
    return selected
  }   
  else if(document.getElementById('Total Vaccinations per Hundred').checked) {   
    selected = [document.getElementById('Total Vaccinations per Hundred').value, document.getElementById('Total Vaccinations per Hundred').id];
    return selected
  }   
  else if(document.getElementById('Total Deaths per Million').checked) {   
    selected = [document.getElementById('Total Deaths per Million').value, document.getElementById('Total Deaths per Million').id];
    return selected
  }   
  else if(document.getElementById('GDP per Capita').checked) {   
    selected = [document.getElementById('GDP per Capita').value, document.getElementById('GDP per Capita').id];
    return selected
  }  
  else {   
    selected = [document.getElementById('Total Cases per Million').value, document.getElementById('Total Cases per Million').id];
    return selected
  }   
}   

  // Load the GeoJSON data.
  var data = DATA;
  var geojson = L.geoJson(data).addTo(myMap);
  var legend = L.control({position: "bottomright"});

  function makeChoropleth(data) {
    myMap.removeLayer(geojson)
  // Create a new choropleth layer.
    geojson = L.choropleth(data, {

    // Define which property in the eatures to use.
    valueProperty: checkButton()[0],
    
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
      layer.bindPopup("Country: " + feature.properties.country_name +
          "<br>Total Cases per million: " + feature.properties.total_cases_per_million +
          "<br>Total Vaccinations per hundred: " + feature.properties.total_vaccinations_per_hundred +
          "<br>Total Deaths per million: " + feature.properties.total_deaths_per_million +
          "<br>GDP per capita: " + feature.properties.gdp_per_capita);
    }
  }).addTo(myMap);
  console.log('making map')
}

  function makelegend() {
    myMap.removeControl(legend);
  // Set up the legend.
    legend = L.control({position: 'bottomright'});
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var limits = geojson.options.limits;
      var colors = geojson.options.colors;
      var labels = [];

      // Add the minimum and maximum.
      var legendInfo = "<h2>" + checkButton()[1] + "</h2>" +
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
    legend.addTo(myMap);
    console.log('making legend')
}

makeChoropleth(data);
makelegend();

d3.selectAll("input").on("change", function() {
  checkButton();
  console.log(checkButton());
  makeChoropleth(data);
  makelegend();
});