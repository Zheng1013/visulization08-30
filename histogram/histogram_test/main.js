let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "histogram";
trace1.x = set1;

let trace2 = {};
trace2.type = 'histogram'
trace2.x = set2

let data = [];
data.push(trace1);
data.push(trace2);

let layout = {
    margin: {
        t: 0
    },
    // barmode : 'stack'
    // barmode : 'overlay'
};


Plotly.newPlot(myGraph, data, layout);