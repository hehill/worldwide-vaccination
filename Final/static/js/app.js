var sampledata = DATA1
// Use the D3 library to read in samples.json.
// d3.json(samples).then(function(data){console.log(data)});
function yButton() {    
  if(document.getElementById('total_vaccinations_per_hundred').checked) {   
    return [vaccination_list, "Total Vaccinations per hundred"]
  }   
  else if(document.getElementById('total_cases_per_million').checked) {   
    return [cases_list, "Total Cases per Million"]
  }   
  else if(document.getElementById('total_deaths_per_million').checked) {   
    return [death_list, "Total Deaths per Million"]
  }    
  else {   
    selected = document.getElementById('total_vaccinations_per_hundred').value;
    return [vaccination_list, "Total Vaccinations per hundred"]
  }   
}   

/////// Neda's Code /////////

const sample_list = []
const text_list=[];
const Country_name_list=[];
const gdp_list=[];
const cases_list=[];
const vaccination_list=[];
const death_list=[];
const mortality_list=[];
const life_expectancy_list=[];
const human_development_index_list=[];
const hospital_beds_per_thousand_list=[];

sampledata.forEach(function(value, i){
    text_list[i]={
    country: value.country_name,
    expectency : value.life_expectancy,
    hospital : value.hospital_beds_per_thousand,

    },
  
    sample_list[i]=Math.random();
    Country_name_list[i]=value.country_name;
    gdp_list[i]=value.gdp_per_capita;
    cases_list[i]=value.total_cases_per_million;
    vaccination_list[i]=value.total_vaccinations_per_hundred;
    death_list[i]=value.total_deaths_per_million;
    mortality_list[i]=value.excess_mortality_cumulative_per_million;
    life_expectancy_list[i]=value.life_expectancy;
    human_development_index_list[i]=value.human_development_index;
    hospital_beds_per_thousand_list[i]=value.hospital_beds_per_thousand;   
});

// console.log(hospital_beds_per_thousand_list);

function init() {
var trace1 = {
    x: gdp_list,
    y: yButton()[0],
    
    mode: 'markers',
    marker: {size:10},
    text:text_list,
 
    hovertemplate:
            "<b>%{text.country}</b><br><br>" +
            "%{yaxis.title.text}: %{y:.0}<br>" + 
            "%{xaxis.title.text}: %{x:$,.0f}<br>"+
            "Life_expectancy: %{text.expectency}<br>"
            // "Hospital_bed_per_thousands: %{text.hospital}<br>"
           
            
  };
  
  var data = [trace1];
  
  var layout = {
    showlegend: false,
    height: Math.max(yButton()),
    width: Math.max(yButton()),
    xaxis:{ hoverformat: '.2f', title: 'GDP per capita'},
    yaxis:{ hoverformat: '.2r', title: yButton()[1]},
  };
  
  Plotly.newPlot('bubble', data, layout);
}

function rand() {
  console.log("Hi!")
}

d3.selectAll('input[name = gdp-plot]').on("change", updatePlotly);

// Update the restyled plot's values
function updatePlotly() {
  var update = yButton()[0];
  console.log(yButton());
  Plotly.restyle('bubble', 'y', [update]);
  Plotly.relayout('bubble', {yaxis: {title: yButton()[1]}});
}

init();






