function init() {
	setMap();
}

function setMap() {

	var width = 960, 
		height = 580;  

	projection = d3.geo.albersUsa() 
		.scale(1000)
		.translate([width / 2, height / 2])
		.precision(.1);

	path = d3.geo.path()  
		.projection(projection);  

	graticule = d3.geo.graticule(); 

	svg = d3.select("#map").append("svg")   
		.attr("width", width)
		.attr("height", height);

	svg.append("path")    
		.datum(graticule)
		.attr("class", "graticule")
		.attr("d", path);

	d3.json("data/usaCounty.json", function(error,state) {
		svg.selectAll(".county")   
			.data(topojson.feature(state, state.objects.usaGeo).features)  
			.enter().append("path") 
			.attr("class", "county") 
			.attr("d", path);
	});
}

window.onload = init();