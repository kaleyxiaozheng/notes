window.onload = function() {
    var dataset = [5, 10, 15, 20, 25, 30];
    var w = 1500;
    var h = 50;
    var svg = d3.select("svg")
        .attr("width", w)
        .attr("height", h)

    svg.selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .style("height", function(d) {
            console.log(" bar " + d);
            var barHeight = d * 5;
            return barHeight + "px";
        });

    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("stroke-width", function(d) {
            console.log(" circle " + d);
            return d / 2;
        })
        .attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
        .attr("cy", h / 2)
        .attr("r", function(d) {
            return d / 2;
        });
};