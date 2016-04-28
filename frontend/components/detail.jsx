var React = require('react');

var ProfileStore = require('../stores/profileStore');
var ClientActions = require('../actions/clientActions');

var Splash = require('./detailsPageComponents/splash');
var Title = require('./detailsPageComponents/title');
var Description = require('./detailsPageComponents/description');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      profile: ProfileStore.find(this.props.params.id)
    };
  },

  _profileChanged: function () {
    this.setState({profile: ProfileStore.find(this.props.params.id)});
  },

  componentDidMount: function () {
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    ClientActions.fetchProfiles();
  },
  componentWillUnmount: function () {
    this.profileListener.remove();
  },

  render: function () {
    return (
      <div className='profile-detail'>
        <Splash img={this.state.profile.profilePicURL}/>
        <Title profile={this.state.profile}/>
        <Description profile={this.state.profile}/>
      </div>
    );
  }
});
