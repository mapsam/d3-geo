<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>d3: Geojson Basemap</title>
	<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	<script src="http://d3js.org/topojson.v1.min.js"></script>
	<style>
		#map {
			display:block;
			width:900px;
			height:500px;
		}
		.stroke {
			fill:none;
			stroke:#666;
			stroke-width:2px;
		}
		.graticule {
			fill:none;
			stroke:#c0c0c0;
			stroke-width:1px;
			stroke-opacity:0.5;
		}
		.state {
			fill:#c0c0c0;
			stroke:white;
			stroke-width:1px;
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
	var width = 900, 
		height = 480;  

	projection = d3.geo.albers() 
		.scale(1000)
		.translate([width / 2, height / 2])
		.precision(.1);

	path = d3.geo.path()  
		.projection(projection);  

	svg = d3.select("#map").append("svg")   
		.attr("width", width)
		.attr("height", height);

	d3.json("data/admin1_poly_topo.json", function(error,state) {
		svg.selectAll(".state")   
			.data(topojson.feature(state, state.objects.admin1_poly).features)  
			.enter().append("path") 
			.attr("class", "state") 
			.attr("d", path);
	});
	</script>
</body>
</html>