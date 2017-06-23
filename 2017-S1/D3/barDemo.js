var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
var w = 720;
var h = 120;

var svg = d3.select("body").select("svg")
    .attr("width", w)
    .attr("height", h)

svg.select("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x: function(d, i) { return i * (w / dataset.length); },
        y: function(d) { return h - (d * 4) },
        width: w / dataset.length,
        height: function(d) { return d * 4 },
        fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"; }
    })