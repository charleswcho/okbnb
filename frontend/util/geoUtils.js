
var geoUtils = {
  parseAddress: function (params, callback) {
    var self = this;
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode({"address": params.location}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        params.lat = results[0].geometry.location.lat();
        params.lng = results[0].geometry.location.lng();
        debugger;
        callback({ profile: params });
      } else {
        console.log(status)
      }
    });
  },

  parseLoc: function(loc, callback) {
    this.geocoder = new google.maps.Geocoder();
    this.geocoder.geocode({"address": loc}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        var coords = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        callback(coords);
      }
    });
  }
}

module.exports = geoUtils;
