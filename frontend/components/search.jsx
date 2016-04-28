var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ProfileStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');

// var FilterParamsStore = require('../stores/filter_params');
// var Filters = require('./Filters');

var Index = require('./searchPageComponents/index');
// var Map = require('./Map');

module.exports = React.createClass({
  _profilesChanged: function () {
    this.setState({profiles: ProfileStore.all()});
  },

  _filtersChanged: function () {
    // var newParams = FilterParamsStore.params();
    // this.setState({ filterParams: newParams });
    ClientActions.fetchProfiles();
  },

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
  },
  componentWillUnmount: function () {
    this.profileListener.remove();
    // this.filterListener.remove();
  },
  render: function(){
    return(
      <div>
        <div className="half">
          <Filters/>
          <Index profiles={this.state.profiles}/>
        </div>
      </div>
    );
  }
});
