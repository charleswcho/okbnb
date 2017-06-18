const GeoUtils = {
  parseAddress(params, callback, cbArg) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode(
      { "address": params.location },
      (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          params.lat = results[0].geometry.location.lat();
          params.lng = results[0].geometry.location.lng();
          callback({ profile: params }, cbArg);
        } else {
          callback({ profile: params });
          console.log(status)
        }
      }
    );
  },

  parseLoc(loc, callback) {
    this.geocoder = new google.maps.Geocoder();

    this.geocoder.geocode(
      { "address": loc },
      (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          var coords = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          callback(coords);
        }
      }
    );
  }
}

export default GeoUtils;
