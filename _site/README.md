D3.geo Cookbook
===============

This is an outline for specific steps when using D3 to create maps. Each .html file is added as a specific step or tool you may find yourself using when making an svg-based web map. Beyond the first boilerplate file, each file will use similar data and processes.

Examples
--------

1. **Setup:** D3 boilerplate
2. **Topojson:** basemap
3. **Geojson:** basemap _**in progress_
4. **Graticule:** on your map extent
5. **Queue:** using the file loader manager
6. **Point Data:** - geojson on topojson basemap
7. **Proportional Symbols:** from point data
8. **Labels:** on point data 

GOTCHAS
-------

**ONE**: In order for these files to work properly on a local machine you will need to run these .html files on a locally hosted server environment. This will come up when you plan on using data files that exist within another directory or file, which results in cross origin request issues. You may see something like 

```Javascript
XMLHttpRequest cannot load file:/../admin1_poly_topo.json.
Cross origin requests are only supported for HTTP.
```

I suggest [MAMP](http://www.mamp.info/en/index.html) for Mac or [WAMP](http://www.wampserver.com/en/) for PC so you can effectively grab your data.

**TWO**: All of these examples use CDN scripts hosted remotely instead of their own self-hosted versions (i.e. d3.js). If you are building an application with D3, it is wise to use your own source instead of relying on another server.  

