var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;

var FilterActions = require('../../actions/filterActions');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, //San Francisco
  zoom: 13
};

module.exports = React.createClass({

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, mapOptions);
    this.markers = [];
    this.registerListeners();
  },

  componentDidUpdate: function () {
    this.eachProfile(this.parseAddress)
    this._onChange();
  },

  eachProfile: function (callback) {
    var profiles = this.props.profiles;
    var keys = Object.keys(profiles);
    keys.forEach(function(key){
      callback(profiles[key]);
    });
  },

  parseAddress: function (profile) {
    var self = this;
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode({"address": profile.location}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        var coords = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        self.createMarkerFromProfile(profile.id, coords)
      } else {
        console.log(status)
      }
    });
   },

  createMarkerFromProfile: function (id, coords) {
    var pos = new google.maps.LatLng(coords.lat, coords.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      profileId: id
    });
    marker.addListener('click', function () {
      hashHistory.push("profile/" + id );
    });

    this.markers.push(marker);
  },

  _onChange: function(){
    var profilesToAdd = [];
    var markersToRemove = [];
    // Collect markers to remove
    this.markers.forEach(function(marker){
      if (!this.props.profiles.hasOwnProperty(marker.profileId)){
        markersToRemove.push(marker);
      }
    }.bind(this));
    //Collect profiles to add
    var currentProfileIds = this.markers.map(function(marker){
      return marker.benchId;
    });
    this.eachProfile(function(bench){
      if (!currentProfileIds.includes(bench.id)){
        profilesToAdd.push(bench);
      }
    });
    //Do the adding / removing
    profilesToAdd.forEach(this.createMarkerFromProfile);
    markersToRemove.forEach(this.removeMarker);
  },

  registerListeners: function(){
    var self = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = self.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      bounds = {
        northEast: northEast,
        southWest: southWest
      };
      FilterActions.updateBounds(bounds);
    });
  },

  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].profileId === marker.profileId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },
  render: function(){
    return ( <div className="half-map" ref="map">Map</div>);
  }
});
