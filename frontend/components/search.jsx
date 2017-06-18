import React from 'react';
import { hashHistory } from 'react-router';

import ClientActions from '../actions/clientActions';
import ServerActions from '../actions/serverActions';
import ProfileStore from '../stores/profileStore';
import FilterParamsStore from '../stores/filterParams';

import Filters from './searchPageComponents/filters';
import Index from './searchPageComponents/index';
import Map from './searchPageComponents/Map';

import GeoUtils from '../util/geoUtils';

export default class Search extends React.Component {
  state = {
    profiles: ProfileStore.all(),
    filterParams: FilterParamsStore.params(),
    mapOptions: {},
    renderMap: false,
    renderBudget: false
  }

  _profilesChanged = () => {
    this.setState({profiles: ProfileStore.all()});
  }

  _filtersChanged = () => {
    var newParams = FilterParamsStore.params();
    this.setState({ filterParams: newParams });
    ClientActions.fetchProfiles(newParams);
    console.log(newParams);
  }

  componentDidMount() {
    window.scroll(0,0);
    // Start parse request
    var loc = this.props.params.loc;
    GeoUtils.parseLoc(loc, this.locationChanged);
    ServerActions.updateLoc(loc);

    this.profileListener = ProfileStore.addListener(this._profilesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    var filterParams = FilterParamsStore.params();
    ServerActions.clearProfiles();
  }

  componentWillUnmount() {
    this.profileListener.remove();
    this.filterListener.remove();
  }

  // Callback that is called after the location has been parsed
  locationChanged = coords => {
    var newMapOptions = {
      center: coords,
      zoom: 12,
      scrollwheel: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
       position: google.maps.ControlPosition.LEFT_TOP
      },
      scaleControl: false,
      streetViewControl: false,
    }

    this.setState({
      mapOptions: newMapOptions,
      renderMap: true
    });
  }

  renderMap = () => {
    const { renderMap, profiles, mapOptions } = this.state;

    if (renderMap) {
      return (<Map profiles={profiles} mapOptions={mapOptions} renderedMap={this.renderedMap}/>);
    } else {
      return null
    }
  }

  renderedMap = () => this.setState({ renderBudget: true });

  render() {
    return(
      <div className='search-page'>
        <div className="half-filter-index">
          <Filters renderBudget={this.state.renderBudget}/>
          <Index profiles={this.state.profiles} renderMap={this.state.renderMap}/>
        </div>
        {this.renderMap()}
      </div>
    );
  }
}
