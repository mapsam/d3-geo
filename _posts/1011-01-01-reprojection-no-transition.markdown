---
layout: post
title: "Reprojection (Destructive)"
d3_example: '11-reprojection.html'
---

This example allows the user to choose between two projections. Each time the projeciton is chosen the *svg* space is removed and redrawn, therefore doesn't allow for a smooth transition. For a smooth reprojection, one must interpolate between the two projections. *Note: This is still pretty hacky*

<div class="code-example">
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>d3: Reprojection (no transition)</title>
  <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
  <script src="http://d3js.org/topojson.v1.min.js"></script>
  <style>
  body { margin:0; padding:0; }
  #map {
    display:block;
    width:900px;
    height:500px;
  }
  .county {
    fill:#c0c0c0;
    stroke:white;
    stroke-width:1px;
  }
  #projections {
    list-style-type: none;
  }
  #projections li {
    display:inline-block;
    margin-right:10px;
    border:1px solid #333;
    padding:10px;
  }
  #projections li:hover {
    cursor:pointer;
  }
  </style>
</head>

<body>
  <ul id="projections">
    <li id="conicEqui">Conic Equidistant</li>
    <li id="azimuthal">Azimuthal Equidistant</li>
  </ul>
  <div id="map"></div>

  <script>

  var width = 900, 
    height = 480;  

  conicEqui = d3.geo.conicEquidistant() 
    .scale(200)
    .translate([width / 2, height / 2])
    .precision(.1);

  azimuthal = d3.geo.azimuthalEquidistant()
    .scale(200)
    .translate([width / 2, height / 2])
    .precision(.1);

  projection = getActiveProjection();

  function drawMap(projection) {
    console.log('reprojected!');
    path = d3.geo.path()  
      .projection(projection);  

    svg = d3.select("#map").append("svg")   
      .attr("width", width)
      .attr("height", height);

    d3.json("data/world_topo.json", function(error,countries) {
      svg.selectAll(".county")   
        .data(topojson.feature(countries, countries.objects.world).features)  
        .enter().append("path") 
        .attr("class", "county") 
        .attr("d", path);
    });
  }
  
  function init() {
    drawMap(conicEqui);
    var projections = document.getElementById('projections').childNodes;
    for (i = 0, len = projections.length; i < len; i++){
      projections[i].onclick=function() {
        var id = this.id;
        if(id=='azimuthal') {
          proj = azimuthal;
        } else {
          proj = conicEqui;
        }
        d3.select('svg').remove();
        drawMap(proj);
      }
    }

  }
  window.onload = init();

  }
  
  </script>
</body>
</html>
{% endhighlight %}
</div>