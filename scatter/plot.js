var data = DATA2;
console.log(data[0])

var selectorOptions = {
  buttons: [{
      step: 'month',
      stepmode: 'backward',
      count: 1,
      label: '1m'
  }, {
      step: 'month',
      stepmode: 'backward',
      count: 6,
      label: '6m'
  }, {
      step: 'year',
      stepmode: 'todate',
      count: 1,
      label: 'YTD'
  }, {
      step: 'year',
      stepmode: 'backward',
      count: 1,
      label: '1y'
  }, {
      step: 'all',
  }],
};

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

function makeTotal() {
var continent = checkContinent();
const date_list =[];
const total_vaccination_list =[];
const total_cases_list =[];

data.forEach(function(value, i) {
    if (value.country_name == continent) {
        date_list[i] = value.date;
        total_vaccination_list[i] = value.total_vaccinations_per_hundred
        total_cases_list[i] = value.total_cases_per_million
    }
});

console.log(date_list)
console.log(total_vaccination_list)

let trace1 = {
  x: date_list,
  y: total_vaccination_list,
  type: 'scatter',
  name: 'Total Vaccinations per hundred',
};

let trace2 = {
  x: date_list,
  y: total_cases_list,
  yaxis: 'y2',
  type: 'scatter',
  name: 'Total Cases per million',
};

let plot_data = [trace1,trace2];

let layout = {
  title: checkContinent(),
  xaxis: {rangeselector: selectorOptions,
          rangeslider: {}},
  yaxis: {title: "Total Vaccinations", range: [0, 125]},
  yaxis2: {title: "Total Cases", range: [0, 95000],
           overlaying: "y",
           side: "right"},
};

Plotly.newPlot("scatter", plot_data, layout);
}


function makeDaily() {
  var continent = checkContinent();
  const date_list =[];
  const new_cases_smoothed_per_million =[];
  const new_vaccinations_smoothed_per_million =[];
  
  data.forEach(function(value, i) {
      if (value.country_name == continent) {
          date_list[i] = value.date;
          new_vaccinations_smoothed_per_million[i] = value.new_vaccinations_smoothed_per_million
          new_cases_smoothed_per_million[i] = value.new_cases_smoothed_per_million
      }
  });
  
  console.log(date_list)
  console.log(new_vaccinations_smoothed_per_million)
  
  let trace1 = {
    x: date_list,
    y: new_vaccinations_smoothed_per_million,
    type: 'scatter',
    name: 'Daily Vaccinations Per Million',
  };
  
  let trace2 = {
    x: date_list,
    y: new_cases_smoothed_per_million,
    yaxis: 'y2',
    type: 'scatter',
    name: 'Daily Cases Per Milliom',
  };
  
  let plot_data = [trace1,trace2];
  
  let layout = {
    title: checkContinent(),
    xaxis: {rangeselector: selectorOptions,
            rangeslider: {}},
    yaxis: {title: "Daily Vaccinations Per Million", range: [0, 9500]},
    yaxis2: {title: "Daily Cases Per Million", range: [0, 471],
             overlaying: "y",
             side: "right"},
  };
  
  Plotly.newPlot("vaccine", plot_data, layout);
  }

function UpdateGraphs(){
  makeTotal(); 
  makeDaily();
}

d3.selectAll('input[name = scatter]').on("change", UpdateGraphs);

UpdateGraphs();






