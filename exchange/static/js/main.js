let twd_jpy_line = document.getElementById('Line-char');
let twd_jpy_data = JSON.parse(document.getElementById('exchangeData').innerHTML);

let xData = [];
let yData = [];

console.log('[twd_jpy_data]',twd_jpy_data);

for (let x = 0; x < twd_jpy_data.length; x++) {
    xData.push(twd_jpy_data[x].Date);
    yData.push(twd_jpy_data[x]["TWD-JPY"]);
    
}

console.log("[xData]",xData);
console.log("[yData]",yData);

let LineCharData = [
    {
        x:xData,
        y:yData
    }
];

let layout = {
    showlgend:false,
    height:600,
    width:600,
    xaxis:{
        showLine:true,
        showgrid:true,
        showticklabels:true,
        Linecolor : 'rgb(204,204,204)',
        Linewidth:2,
        autotick:true,
        ticks : 'outside',
        tickcolor : 'rgb(204,204,204)',
        tickwidth : 2 ,
        ticklen : 5,
        tickfont:{
            family:'Arial',
            size:12,
            color:'rgb(82,82,82)'
        }
    },
    yaxis:{
        showgrid:true,
        zeroline:false,
        showLine:true,
        showticklabels:true
    }
}

Plotly.newPlot(twd_jpy_line,LineCharData,layout)