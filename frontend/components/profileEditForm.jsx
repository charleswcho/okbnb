var React = require('react');
var hashHistory = require('react-router').hashHistory;

var UserStore = require('../stores/userStore');
var ProfileStore = require('../stores/profileStore');
var ClientActions = require('../actions/clientActions');

var Header = require('./profileEditFormComponents/header');
var EditForm = require('./profileEditFormComponents/editForm');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.currentUser(),
      profile: ProfileStore.find(this.props.params.id)
    }
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    ClientActions.fetchCurrentUser();
    ClientActions.fetchProfile(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.profileListener.remove();
  },

  _userChanged: function () {
    this.setState({ user: UserStore.currentUser() });
  },

  _profileChanged: function () {
    this.setState({ profile: ProfileStore.find(this.props.params.id) });
  },

  _updatedProfile: function () {
    hashHistory.push({pathname: 'profile/' + this.state.profile.id})
  },

  render: function () {
    return (
      <div className='new-profile-page'>
        <div className='profile-form-container'>
          <Header/>
          <EditForm user={this.state.user} profile={this.state.profile}
                    updatedProfile={this._updatedProfile}/>
        </div>
      </div>

    );
  }
});
