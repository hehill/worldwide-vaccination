var data = DATA2;
console.log(data[0])

function checkContinent() {    
  if(document.getElementById('asia').checked) {   
    selected = document.getElementById('asia').value;
    return selected
  }   
  else if(document.getElementById('europe').checked) {   
    selected = document.getElementById('europe').value;
    return selected
  }   
  else if(document.getElementById('africa').checked) {   
    selected = document.getElementById('africa').value;
    return selected
  }   
  else if(document.getElementById('north_am').checked) {   
    selected = document.getElementById('north_am').value;
    return selected
  }  
  else if(document.getElementById('south_am').checked) {   
    selected = document.getElementById('south_am').value;
    return selected
  }
  else if(document.getElementById('oceania').checked) {   
    selected = document.getElementById('oceania').value;
    return selected
  }  
  else {
    return "Asia"
  }
}   

function makeDaily() {
var continent = checkContinent();
const date_list =[];
const new_cases =[];
const new_vaccinations =[];

data.forEach(function(value, i) {
    if (value.country_name == continent) {
        date_list[i] = value.date;
        new_vaccinations[i] = value.new_vaccinations
        new_cases[i] = value.new_cases
    }
});

console.log(date_list)
console.log(new_vaccinations)

let trace1 = {
  x: date_list,
  y: new_vaccinations,
  type: 'scatter',
  name: 'Daily Vaccinations',
};

let trace2 = {
  x: date_list,
  y: new_cases,
  yaxis: 'y2',
  type: 'scatter',
  name: 'Daily Cases',
};

let plot_data = [trace1,trace2];

let layout = {
  title: checkContinent(),
  yaxis: {title: "Daily Vaccinations"},
  yaxis2: {title: "Daily Cases",
           overlaying: "y",
           side: "right"},
};

Plotly.newPlot("vaccine", plot_data, layout);
}

d3.selectAll('input[name = scatter]').on("change", makeDaily);

makeDaily();
