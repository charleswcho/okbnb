var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;

var FilterActions = require('../../actions/filterActions');
var ProfileStore = require('../../stores/profileStore');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

module.exports = React.createClass({
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, this.props.mapOptions);
    this.markers = [];
    this.registerListeners();
  },

  componentWillReceiveProps: function (newProps) {
    if (this.props.mapOptions.center !== newProps.mapOptions.center) {
      var center = this.props.mapOptions.center;
      center = new google.maps.LatLng(center);
      this.map.panTo(center);
    }
  },

  componentDidUpdate: function () {
    if (!this.markers){
      this.eachProfile(this.createMarkerFromProfile) 
    }
    this._onChange();
  },

  componentWillUnmount: function () {
    this.profileListener.remove();
  },

  eachProfile: function (callback) {
    var profiles = this.props.profiles;
    var keys = Object.keys(profiles);
    keys.forEach(function(key){
      callback(profiles[key]);
    });
  },

  createMarkerFromProfile: function (profile) {
    var pos = new google.maps.LatLng(profile.lat, profile.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      profileId: profile.id
    });

    marker.addListener('click', function () {
      hashHistory.push("profile/" + profile.id );
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
      return marker.profileId;
    });
    this.eachProfile(function(profile){
      if (!currentProfileIds.includes(profile.id)){
        profilesToAdd.push(profile);
      }
    });
    //Do the adding / removing
    profilesToAdd.forEach(this.createMarkerFromProfile);
    markersToRemove.forEach(this.removeMarker);
  },

  updateHovered: function () {
    var hoveredProfileId = ProfileStore.hovered();
    this.markers.forEach(function (marker) {
      if (marker.profileId === hoveredProfileId) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        marker.setAnimation(null);
      }
    });
  },

  registerListeners: function(){
    var self = this;
    this.profileListener = ProfileStore.addListener(this.updateHovered);
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
