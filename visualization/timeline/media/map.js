(function () {
  function initialize() {
    var center = new google.maps.LatLng(0, 0);
    var mapOptions = {
      zoom: 3,
      center: center
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var icons = {
        'Clear': './media/sun.png',
        'Cloudy': './media/cloud.png',
        'Foggy': './media/cloud.png',
        'Precipitation': './media/rain.png',
        'Severe': './media/severe.png',
        'Thunderstorm': './media/storm.png'
    }


    for (var condition_i in CONDITIONS_DATA) {
        var condition = CONDITIONS_DATA[condition_i];
        var position = new google.maps.LatLng(condition.latitude, condition.longitude);
        var condition_icon = icons[condition.general_condition];
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: condition.general_condition,
            icon: condition_icon
        });
    }
  }

  google.maps.event.addDomListener(window, 'load', initialize);
})();
