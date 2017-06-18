import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import FilterActions from '../../actions/filterActions';
import ProfileStore from '../../stores/profileStore';

const _getCoordsObj = latLng => {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

export default class Map extends React.Component {
  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(map, this.props.mapOptions);
    this.markers = [];
    this.registerListeners();
    this.props.renderedMap();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.mapOptions.center !== newProps.mapOptions.center) {
      let center = this.props.mapOptions.center;
      center = new google.maps.LatLng(center);
      this.map.panTo(center);
    }
  }

  componentDidUpdate() {
    if (!this.markers){
      this.eachProfile(this.createMarkerFromProfile)
    }
    this._onChange();
  }

  componentWillUnmount() {
    this.profileListener.remove();
  }

  eachProfile = callback => {
    let profiles = this.props.profiles;
    let keys = Object.keys(profiles);
    keys.forEach(function(key){
      callback(profiles[key]);
    });
  }

  createMarkerFromProfile = profile => {
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
  }

  _onChange = () => {
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
  }

  updateHovered = () => {
    let hoveredProfileId = ProfileStore.hovered();
    this.markers.forEach(marker => {
      if (marker.profileId === hoveredProfileId) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        marker.setAnimation(null);
      }
    });
  }

  registerListeners = () => {
    this.profileListener = ProfileStore.addListener(this.updateHovered);
    google.maps.event.addListener(this.map, 'idle', () => {
      let bounds = this.map.getBounds();
      let northEast = _getCoordsObj(bounds.getNorthEast());
      let southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      bounds = {
        northEast: northEast,
        southWest: southWest
      };
      FilterActions.updateBounds(bounds);
    });
  }

  removeMarker = marker => {
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].profileId === marker.profileId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  }

  render() {
    return ( <div className="half-map" ref="map">Map</div>);
  }
}
