---
layout: post
title: "TopoJSON Basemap"
example_desc: 'Topojson Basemap.'
d3_example: '02-topojson-basemap.html'
---
&nbsp;

{% highlight javascript %}
var width = 900, 
  height = 480;  

projection = d3.geo.albersUsa() 
  .scale(1000)
  .translate([width / 2, height / 2])
  .precision(.1);

path = d3.geo.path()  
  .projection(projection);  

svg = d3.select("#map").append("svg")   
  .attr("width", width)
  .attr("height", height);

d3.json("data/admin1_poly_topo.json", function(error,state) {
  svg.selectAll(".county")   
    .data(topojson.feature(state, state.objects.admin1_poly).features)  
    .enter().append("path") 
    .attr("class", "county") 
    .attr("d", path);
});
{% endhighlight %}