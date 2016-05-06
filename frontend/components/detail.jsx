var React = require('react');
var hashHistory = require('react-router').hashHistory;

var UserStore = require('../stores/userStore');
var ProfileStore = require('../stores/profileStore');
var ClientActions = require('../actions/clientActions');

var Title = require('./detailsPageComponents/title');
var Description = require('./detailsPageComponents/description');
var Footer = require('./footer');

var Detail = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.currentUser(),
      profile: ProfileStore.find(this.props.params.id)
    };
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

  _deleteProfile: function () {
    ClientActions.deleteProfile(this.state.profile.id);
    hashHistory.goBack();
  },

  _editProfile: function (e) {
    e.preventDefault();
    hashHistory.push({pathname: 'profile/edit/' + this.state.profile.id})
  },

  render: function () {
    var currentUser = this.state.user;
    var profile = this.state.profile;
    var showEditDelete = false;
    if (currentUser.id === profile.user_id) {
      showEditDelete = true;
    }

    return (
      <div className='profile-detail'>
        <Title profile={this.state.profile}/>
        <Description user={this.state.user} profile={this.state.profile}
                     showEditDelete={showEditDelete}
                     editProfile={this._editProfile}
                     deleteProfile={this._deleteProfile}/>
        <Footer/>
      </div>
    );
  }
});

module.exports = Detail;
