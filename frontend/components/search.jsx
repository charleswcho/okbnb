import React from 'react';

import ClientActions from '../actions/clientActions';
import FilterActions from '../actions/filterActions';
import ServerActions from '../actions/serverActions';
import ProfileStore from '../stores/profileStore';
import FilterParamsStore from '../stores/filterParams';

import Index from './searchPageComponents/index';
import Map from './searchPageComponents/map';
import Filters from './theme/filters';

import GeoUtils from '../util/geoUtils';

export default class Search extends React.Component {
  state = {
    profiles: ProfileStore.all(),
    filterParams: FilterParamsStore.params(),
    mapOptions: {},
    renderMap: false,
    renderBudget: false,
    search_status: null,
    smoker: null,
    diet: null,
    pet: null,
  }

  componentDidMount() {
    window.scroll(0, 0);
    // Start parse request
    const loc = this.props.params.loc;
    GeoUtils.parseLoc(loc, this.locationChanged);
    ServerActions.updateLoc(loc);

    this.profileListener = ProfileStore.addListener(this.profilesChanged);
    this.filterListener = FilterParamsStore.addListener(this.filtersChanged);

    ServerActions.clearProfiles();
  }

  componentWillUnmount() {
    this.profileListener.remove();
    this.filterListener.remove();
  }

  profilesChanged = () => {
    this.setState({ profiles: ProfileStore.all() });
  }

  filtersChanged = () => {
    const newParams = FilterParamsStore.params();

    ClientActions.fetchProfiles(newParams);

    this.setState({ filterParams: newParams });
  }

  // Callback that is called after the location has been parsed
  locationChanged = (coords) => {
    const newMapOptions = {
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
    };

    this.setState({
      mapOptions: newMapOptions,
      renderMap: true,
    });
  }

  updateValue = (type, value) => {
    switch (type) {
      case 'search_status':
        FilterActions.updateSearchState(value);
        break;
      case 'smoker':
        FilterActions.updateSmoker(value);
        break;
      case 'diet':
        FilterActions.updateDiet(value);
        break;
      case 'pet':
        FilterActions.updatePet(value);
        break;
      default:
        break;
    }

    this.setState({ [type]: value });
  }

  renderMap = () => {
    const { renderMap, profiles, mapOptions } = this.state;

    if (renderMap) {
      return (<Map profiles={profiles} mapOptions={mapOptions} renderedMap={this.renderedMap} />);
    }

    return null;
  }

  renderedMap = () => this.setState({ renderBudget: true });

  render() {
    const { search_status, smoker, diet, pet } = this.state;

    return (
      <div className="search-page">
        <div className="half-filter-index">
          <Filters
            search_status={search_status}
            smoker={smoker}
            diet={diet}
            pet={pet}
            renderBudget={this.state.renderBudget}
            updateValue={this.updateValue}
          />
          <Index profiles={this.state.profiles} renderMap={this.state.renderMap} />
        </div>
        {this.renderMap()}
      </div>
    );
  }
}
