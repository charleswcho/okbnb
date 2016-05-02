var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../actions/clientActions');
var ProfileStore = require('../stores/profileStore');
var FilterParamsStore = require('../stores/filterParams');

var Filters = require('./searchPageComponents/filters');
var Index = require('./searchPageComponents/index');
var Map = require('./searchPageComponents/Map');

module.exports = React.createClass({
  _profilesChanged: function () {
    this.setState({profiles: ProfileStore.all()});
  },

  _filtersChanged: function () {
    var newParams = FilterParamsStore.params();
    this.setState({ filterParams: newParams });
    ClientActions.fetchProfiles(newParams);
    console.log('5 Sent request with filters');
  },

  getInitialState: function () {
    return {
      profiles: ProfileStore.all(),
      filterParams: FilterParamsStore.params()
    };
  },

  componentDidMount: function () {
    this.profileListener = ProfileStore.addListener(this._profilesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    var filterParams = FilterParamsStore.params();
    ClientActions.fetchProfiles();
  },

  componentWillUnmount: function () {
    this.profileListener.remove();
    this.filterListener.remove();
  },

  render: function(){
    return(
      <div className='search-page'>
        <div className="half-filter-index">
          <Filters />
          <Index profiles={this.state.profiles}/>
        </div>
        <Map profiles={this.state.profiles} />
      </div>
    );
  }
});
