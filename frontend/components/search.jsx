var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../actions/clientActions');
var ProfileStore = require('../stores/profileStore');
var FilterParamsStore = require('../stores/filterParams');

var Filters = require('./searchPageComponents/filters');
var Index = require('./searchPageComponents/index');
var Map = require('./searchPageComponents/Map');

var GeoUtils = require('../util/geoUtils');

module.exports = React.createClass({
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
      mapOptions: {
        center: {lat: 37.773972, lng: -122.431297}, //San Francisco
        zoom: 13
      }
    };
  },

  componentDidMount: function () {
    // Start parse request
    var loc = this.props.params.loc;
    GeoUtils.parseLoc(loc, this.locationChanged);

    this.profileListener = ProfileStore.addListener(this._profilesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    var filterParams = FilterParamsStore.params();
    ClientActions.fetchProfiles();
  },

  componentWillUnmount: function () {
    this.profileListener.remove();
    this.filterListener.remove();
  },

  // Callback that is called after the location has been parsed
  locationChanged: function (coords) {
    var newMapOptions = {
      center: coords,
      zoom: 13
    }

    this.setState({
      // setting new mapOptions - should trigger a componentWillReceiveProps in maps and reload the map
      mapOptions: newMapOptions,
    });
  },

  render: function() {
    return(
      <div className='search-page'>
        <div className="half-filter-index">
          <Filters />
          <Index profiles={this.state.profiles}/>
        </div>
        <Map profiles={this.state.profiles}
             mapOptions={this.state.mapOptions}/>
      </div>
    );
  }
});
