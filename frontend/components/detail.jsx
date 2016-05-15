var React = require('react');
var hashHistory = require('react-router').hashHistory;

var UserStore = require('../stores/userStore');
var ProfileStore = require('../stores/profileStore');
var OfferStore = require('../stores/offerStore');
var ClientActions = require('../actions/clientActions');

var Title = require('./detailsPageComponents/title');
var Description = require('./detailsPageComponents/description');
var Footer = require('./footer');

var Detail = React.createClass({
  getInitialState: function () {
    return {
      user: UserStore.currentUser(),
      profile: ProfileStore.find(this.props.params.id),
      offered: OfferStore.offered(UserStore.currentUser().id)
    };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    this.offerListener = OfferStore.addListener(this._offersChanged);
    ClientActions.fetchCurrentUser();
    ClientActions.fetchProfile(this.props.params.id);
    ClientActions.fetchOffers(this.state.profile.id);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.profileListener.remove();
    this.offerListener.remove();
  },

  _userChanged: function () {
    this.setState({ user: UserStore.currentUser() });
  },

  _profileChanged: function () {
    this.setState({ profile: ProfileStore.find(this.props.params.id) });
  },

  _offersChanged: function () {
    this.setState({ offered: OfferStore.offered(UserStore.currentUser().id) });
  },

  _editProfile: function (e) {
    e.preventDefault();
    hashHistory.push({pathname: 'profile/edit/' + this.state.profile.id})
  },

  _deleteProfile: function () {
    ClientActions.deleteProfile(this.state.profile.id);
    hashHistory.push({ pathname: 'search/' + ProfileStore.currentLoc() })
  },

  _handleContact: function () {
    ClientActions.contactProfile(
      this.state.profile.id, this.state.user.id,
      ClientActions.fetchOffers(this.state.profile.id)
    );
  },

  render: function () {
    var currentUser = this.state.user;
    var profile = this.state.profile;
    var showEditDelete = false;
    if (currentUser.id === profile.user_id) {
      showEditDelete = true;
    }
    console.log(this.state.offered);

    return (
      <div className='profile-detail'>
        <Title profile={this.state.profile}
               user={this.state.user}
               handleContact={this._handleContact}
               offered={this.state.offered}/>
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
