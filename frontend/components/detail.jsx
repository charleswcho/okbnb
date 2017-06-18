import React from 'react';
import { hashHistory } from 'react-router';

import UserStore from '../stores/userStore';
import ProfileStore from '../stores/profileStore';
import OfferStore from '../stores/offerStore';
import ClientActions from '../actions/clientActions';

import Title from './detailsPageComponents/title';
import Description from './detailsPageComponents/description';
import Footer from './footer';

export default class Detail extends React.Component {
  state = {
    user: UserStore.currentUser(),
    profile: ProfileStore.find(this.props.params.id),
    offered: OfferStore.offered(UserStore.currentUser().id)
  }

  componentDidMount() {
    window.scroll(0,0);

    this.userListener = UserStore.addListener(this._userChanged);
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    this.offerListener = OfferStore.addListener(this._offersChanged);

    ClientActions.fetchCurrentUser();
    ClientActions.fetchProfile(this.props.params.id);
    ClientActions.fetchOffers(this.state.profile.id);
  }

  componentWillUnmount() {
    this.userListener.remove();
    this.profileListener.remove();
    this.offerListener.remove();
  }

  _userChanged = () => {
    this.setState({ user: UserStore.currentUser() });
  }

  _profileChanged = () => {
    this.setState({ profile: ProfileStore.find(this.props.params.id) });
  }

  _offersChanged = () => {
    this.setState({ offered: OfferStore.offered(UserStore.currentUser().id) });
  }

  _editProfile = (e) => {
    e.preventDefault();
    hashHistory.push({pathname: 'profile/edit/' + this.state.profile.id})
  }

  _deleteProfile = () => {
    ClientActions.deleteProfile(this.state.profile.id);
    hashHistory.push({ pathname: 'search/' + ProfileStore.currentLoc() })
  }

  _handleContact = () => {
    const { user, profile } = this.state;

    ClientActions.contactProfile(
      profile.id,
      user.id,
      ClientActions.fetchOffers(profile.id)
    );
  }

  render() {
    const { user, profile, offered } = this.state;

    let showEditDelete = false;

    if (user.id === profile.user_id) {
      showEditDelete = true;
    }

    return (
      <div className='profile-detail'>
        <Title
          user={user}
          profile={profile}
          offered={offered}
          handleContact={this._handleContact}/>

        <Description
          user={user}
          profile={profile}
          showEditDelete={showEditDelete}
          editProfile={this._editProfile}
          deleteProfile={this._deleteProfile}/>

        <Footer/>
      </div>
    );
  }
}
