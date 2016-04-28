var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ProfileStore = require('../stores/profileStore');
var ClientActions = require('../actions/clientActions');

// var FilterParamsStore = require('../stores/filter_params');
var Filters = require('./searchPageComponents/filters');

var Index = require('./searchPageComponents/index');
// var Map = require('./Map');

module.exports = React.createClass({
  _profilesChanged: function () {
    this.setState({profiles: ProfileStore.all()});
  },

  // _filtersChanged: function () {
  //   // var newParams = FilterParamsStore.params();
  //   // this.setState({ filterParams: newParams });
  //   ClientActions.fetchProfiles(newParams);
  // },

  getInitialState: function () {
    return {
      profiles: ProfileStore.all(),
      // filterParams: FilterParamsStore.params(),
      clickedLoc: null,
    };
  },
  componentDidMount: function () {
    this.profileListener = ProfileStore.addListener(this._profilesChanged);
    // this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    // var filterParams = FilterParamsStore.params();
    ClientActions.fetchProfiles();
    console.log("Client requested Profiles")
  },
  componentWillUnmount: function () {
    this.profileListener.remove();
    // this.filterListener.remove();
  },
  render: function(){
    return(
      <div>
        <div className="half">
          <Filters />
          <Index profiles={this.state.profiles}/>
        </div>
      </div>
    );
  }
});
