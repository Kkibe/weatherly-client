	// Geolocation API
	// -----------------
	function getCurrentLocation() {
		// If geolocation is not supported, output msg and exit out of function
		if (!navigator.geolocation){
			showStatus('error', 'ERROR: Geolocation is not supported by this browser');
			return;
		}
		function showPosition(position) {
			var location  = position.coords.latitude + ',' + position.coords.longitude;
			getWeather(location); // Get weather after getting position
			showStatus('success', 'Success! Location found.');
		}
		function showError(error) {
			switch(error.code) {
        case error.PERMISSION_DENIED:
					showStatus('error', 'ERROR: Geolocation request denied. Try visiting the HTTPS site: <a href="https://codepen.io/tiffanyadu/pen/qryXBo" target="_blank">https://codepen.io/tiffanyadu/pen/qryXBo</a>');
					break;
        case error.POSITION_UNAVAILABLE:
					showStatus('error', 'ERROR: Location information is unavailable.');
					break;
        case error.TIMEOUT:
					showStatus('error', 'ERROR: The request to get user location timed out.');
					break;
        case error.UNKNOWN_ERROR:
					showStatus('error', 'ERROR: An unknown error occurred.');
					break;
    	}
		}
		showStatus('', 'Locating…'); // In progress text
		navigator.geolocation.getCurrentPosition(showPosition, showError, {enableHighAccuracy: true});
	}
	