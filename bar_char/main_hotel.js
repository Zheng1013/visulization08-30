let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "January";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "General_Hotel";
trace1.x[1] = "Tourist_Hotel";
trace1.y[0] = General_Hotel[0]['Room'];
trace1.y[1] = Tourist_Hotel[0]['Room'];
trace1.text = trace1.y;
trace1.textfont ={
    color : 'yellow',
    size : 20
};
trace1.marker = {
    color:'blue'
};


let trace2 = {};
trace2.type = "bar";
trace2.name = "February";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "General_Hotel";
trace2.x[1] = "Tourist_Hotel";
trace2.y[0] = General_Hotel[1]['Room'];
trace2.y[1] = Tourist_Hotel[1]['Room'];
trace2.text = trace2.y;
trace2.textfont ={
    color : 'yellow',
    size : 20
};
trace2.marker = {
    color:'red'
};

let trace3 = {};
trace3.type = "bar";
trace3.name = "March";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "General_Hotel";
trace3.x[1] = "Tourist_Hotel";
trace3.y[0] = General_Hotel[2]['Room'];
trace3.y[1] = Tourist_Hotel[2]['Room'];
trace3.text = trace3.y;
trace3.textfont ={
    color : 'yellow',
    size : 20
};
trace3.marker = {
    color:'green'
};

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin: {
        t: 50
    },
    barmode : "stack",
    title : "新竹市旅宿業住宿率"
    
};


Plotly.newPlot(myGraph, data, layout);