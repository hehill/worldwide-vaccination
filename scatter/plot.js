var data = DATA2;

let trace1 = {
  x: date,
  y: yData
};

// let data = [trace1];

// let layout = {
//   title: "A Plotly plot"
// };

// Plotly.newPlot("plot", data, layout);

// var rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';
// var xField = 'Date';
// var yField = 'Mean_TemperatureC';

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

//     Plotly.newPlot('myDiv', data, layout);
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







