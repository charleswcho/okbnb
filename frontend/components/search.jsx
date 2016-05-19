var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../actions/clientActions');
var ServerActions = require('../actions/serverActions');
var ProfileStore = require('../stores/profileStore');
var FilterParamsStore = require('../stores/filterParams');

var Filters = require('./searchPageComponents/filters');
var Index = require('./searchPageComponents/index');
var Map = require('./searchPageComponents/Map');

var GeoUtils = require('../util/geoUtils');

var Search = React.createClass({
  _profilesChanged: function () {
    this.setState({profiles: ProfileStore.all()});
  },

  _filtersChanged: function () {
    var newParams = FilterParamsStore.params();
    this.setState({ filterParams: newParams });
    ClientActions.fetchProfiles(newParams);
    console.log(newParams);
  },

  getInitialState: function () {
    return {
      profiles: ProfileStore.all(),
      filterParams: FilterParamsStore.params(),
      mapOptions: {},
      renderMap: false,
      renderBudget: false
    };
  },

  componentDidMount: function () {
    window.scroll(0,0);
    // Start parse request
    var loc = this.props.params.loc;
    GeoUtils.parseLoc(loc, this.locationChanged);
    ServerActions.updateLoc(loc);

    this.profileListener = ProfileStore.addListener(this._profilesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    var filterParams = FilterParamsStore.params();
    ServerActions.clearProfiles();
  },

  componentWillUnmount: function () {
    this.profileListener.remove();
    this.filterListener.remove();
  },

  // Callback that is called after the location has been parsed
  locationChanged: function (coords) {
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
    console.log(this.state.renderMap)
  },

  renderMap: function () {
    if (this.state.renderMap) {
      return(
        <Map profiles={this.state.profiles} mapOptions={this.state.mapOptions}
             renderMap={this.state.renderMap} renderedMap={this.renderedMap}/>
      );
    } else {
      return null
    }
  },

  renderedMap: function () {
    this.setState({ renderBudget: true })
  },

  render: function() {
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
});

module.exports = Search;
