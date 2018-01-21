var latitude = Number;
var longitude = Number;

$('#getWeather').click(function() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		  latitude = position.coords.latitude;
		  longitude = position.coords.longitude;
		});
		console.log(latitude)
		console.log(lontitude)
	} else {
		console.log("No geolocation available");
	}

 	$.getJSON("http://api.apixu.com/v1/current.json?key=52bc1474354b48da843180020170110&q=" + latitude +','+longitude, function(weather){
      	console.log(weather)
      	$("#currentCondition").children("img").attr("src", "../assets/images/(04)Weather" + weather.current.condition.icon.slice(29, 43) );
      	$("#locationName").text(String(weather.location.name));
      	$("#currentTemperature").text(String(weather.current.temp_c) + " ˚ C");
	});
});

