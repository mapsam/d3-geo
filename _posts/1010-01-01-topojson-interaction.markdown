---
layout: post
title: "Topojson Interaction"
example_desc: 'This is topojson interaction.'
d3_example: '10-topojson-interaction.html'
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

d3.json("data/us.json", function(error,state) {
  svg.selectAll(".state")   
    .data(topojson.feature(state, state.objects.usStates).features)  
    .enter().append("path") 
    .attr("class", "state") 
    .attr("d", path)
    .on('mouseover', function(d) {
      var abbreviation = d.properties.STATE_ABBR;
      return document.getElementById('name').innerHTML=abbreviation;
    })
});
{% endhighlight %}