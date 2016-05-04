var React = require('react');

var UserStore = require('../stores/userStore');
var ProfileStore = require('../stores/profileStore');
var ClientActions = require('../actions/clientActions');

var Title = require('./detailsPageComponents/title');
var Description = require('./detailsPageComponents/description');

var Detail = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.currentUser(),
      profile: ProfileStore.find(this.props.params.id)
    };
  },

  _userChanged: function () {
    this.setState({ user: UserStore.currentUser() });
  },

  _profileChanged: function () {
    this.setState({ profile: ProfileStore.find(this.props.params.id) });
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    ClientActions.fetchCurrentUser();
    ClientActions.fetchProfiles();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.profileListener.remove();
  },

  render: function () {
    return (
      <div className='profile-detail'>
        <Title profile={this.state.profile}/>
        <Description user={this.state.user} profile={this.state.profile}/>
      </div>
    );
  }
});

module.exports = Detail;
