$(window).resize(function(){
	setMap();
});

function setMap() {

	var pageWidth = $("#wrap").width(),
		width = pageWidth,
		height = 580,
		scale = width * .96;  

	projection = d3.geo.albersUsa() 
		.scale(scale)
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

	loadData();
}

function loadData() {
	queue()   
		.defer(d3.json, "data/usaCounty.json") 
		//load more data here 
		.await(drawMap);   
}

function drawMap(error,state) {
	svg.selectAll(".county")   
		.data(topojson.feature(state, state.objects.usaGeo).features)  
		.enter().append("path") 
		.attr("class", "county") 
		.attr("d", path);
}