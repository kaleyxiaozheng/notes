window.onload = function() {
    var dataset = [5, 10, 15, 20, 25, 30];
    var w = 1500;
    var h = 50;

    var circles = d3.select("svg").selectAll(".circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("stroke-width", function(d) {
            return d / 2;
        })
        .attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
        .attr("cy", h / 2)
        .attr("r", function(d) {
            return d / 2;
        });

    var rectangles = d3.select("svg").selectAll(".bar")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d) {
            return d * 10;
        })
        .attr("y", h / 2)
        .attr("width", function(d) {
            return d;
        })
        .attr("height", 100);

};