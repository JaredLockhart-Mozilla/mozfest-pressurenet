(function () {
  // Adding 500 Data Points
  var map, heatmap;

  var heatmap_data = [];

  for (var reading_i in READINGS_DATA) {
      var reading = READINGS_DATA[reading_i];
      var weighted_location = {
          location: new google.maps.LatLng(reading.latitude, reading.longitude),
          weight: reading.reading
      };
      heatmap_data.push(weighted_location);
  }

  function initialize() {
    var mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(51.5072, 0.1275)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var pointArray = new google.maps.MVCArray(heatmap_data);

    heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmap_data 
    });

    heatmap.setMap(map);
    heatmap.set('radius', 20); 
    heatmap.set('opacity', 1.0); 
  }

  google.maps.event.addDomListener(window, 'load', initialize);

})();
