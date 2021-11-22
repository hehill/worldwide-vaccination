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

function makeScatter() {
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
  yaxis: {title: "Total Vaccinations"},
  yaxis2: {title: "Total Cases",
           overlaying: "y",
           side: "right"},
};

Plotly.newPlot("scatter", plot_data, layout);
}

d3.selectAll('input[name = scatter]').on("change", makeScatter);

makeScatter();

// var rawDataURL = 'http://cors.io/?https://github.com/hehill/worldwide-vaccination/blob/main/data/owid-covid-data.csv';
// var xField = 'date';
// var yField = 'total_vaccinations_per_hundred';

// var selectorOptions = {
//     buttons: [{
//         step: 'month',
//         stepmode: 'backward',
//         count: 1,
//         label: '1m'
//     }, {
//         step: 'month',
//         stepmode: 'backward',
//         count: 6,
//         label: '6m'
//     }, {
//         step: 'year',
//         stepmode: 'todate',
//         count: 1,
//         label: 'YTD'
//     }, {
//         step: 'year',
//         stepmode: 'backward',
//         count: 1,
//         label: '1y'
//     }, {
//         step: 'all',
//     }],
// };

// d3.csv(rawDataURL, function(err, rawData) {
//     if(err) throw err;

//     var data = prepData(rawData);
//     var layout = {
//         title: 'Time series with range slider and selectors',
//         xaxis: {
//             rangeselector: selectorOptions,
//             rangeslider: {}
//         },
//         yaxis: {
//             fixedrange: true
//         }
//     };

//     Plotly.newPlot('scatter', data, layout);
// });

// function prepData(rawData) {
//     var x = [];
//     var y = [];

//     rawData.forEach(function(datum, i) {

//         x.push(new Date(datum[xField]));
//         y.push(datum[yField]);
//     });

//     return [{
//         mode: 'lines',
//         x: x,
//         y: y
//     }];
// }







