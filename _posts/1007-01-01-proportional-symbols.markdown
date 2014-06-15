---
layout: post
title: "Proportional Symbols"
d3_example: '07-proportional-symbols.html'
---

Add a graticule to the map svg space.

<div class="code-example">
{% highlight HTML %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>d3: Point Data</title>
  <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
  <script src="http://d3js.org/topojson.v1.min.js"></script>
  <script src="http://d3js.org/queue.v1.min.js"></script>
  <style>
  #map {
    display:block;
    width:900px;
    height:500px;
  }
  .states {
    fill: #e5e5e5;
    stroke: #fff;
    stroke-width:1px;
  }
  .cities {
    fill:red;
    fill-opacity:0.5;
    stroke:#fff;
    stroke-width:2px;
  }
  </style>
  <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>


<body>
  <a href="index.html">List</a>
  <div id="map"></div>
  
  <script>
  var width = 960,
    height = 500;
   
  var svg = d3.select('#map').append('svg')
    .attr('width', width)
    .attr('height', height);
   
  var projection = d3.geo.albers()
    .scale(1000)
    .translate([width / 2, height / 2]);
   
  var path = d3.geo.path()
    .projection(projection);
    
  queue()
    .defer(d3.json, 'data/admin1_poly_topo.json')
    .defer(d3.json, 'data/usa_cities.json')
    .await(makeMyMap);
   
  function makeMyMap(error, states, cities) {
    
    var length = cities.features.length;
    var pops = [];
    for (var mug=0; mug<length; mug++) {
      var pop = cities.features[mug].properties.POPULATION;
      pops.push(Number(pop));
    }
    var min = Math.min.apply(Math, pops);
    var max = Math.max.apply(Math, pops);
    
    var radius = d3.scale.sqrt()
      .domain([min, max])
      .range([10, 30]);
    
    svg.append('path')
      .datum(topojson.feature(states, states.objects.admin1_poly))
      .attr('d', path)
      .attr('class', 'states');
      
    svg.selectAll('.cities')
      .data(cities.features)
      .enter().append('path')
      .attr('class', 'cities')
      .attr('d', path.pointRadius(function(d) { return radius(d.properties.POPULATION); }));
      
  }
  </script>
</body>
</html>
{% endhighlight %}
</div>