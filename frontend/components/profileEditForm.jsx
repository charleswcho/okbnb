import React from 'react';
import { hashHistory } from 'react-router';

import UserStore from '../stores/userStore';
import ProfileStore from '../stores/profileStore';
import ClientActions from '../actions/clientActions';

import Header from './profileEditFormComponents/header';
import EditForm from './profileEditFormComponents/editForm';

export default class ProfileEditForm extends React.Component {
  state = {
    user: UserStore.currentUser(),
    profile: ProfileStore.find(this.props.params.id)
  }

  componentDidMount() {
    this.userListener = UserStore.addListener(this._userChanged);
    this.profileListener = ProfileStore.addListener(this._profileChanged);
    ClientActions.fetchCurrentUser();
    ClientActions.fetchProfile(this.props.params.id);
  }

  componentWillUnmount() {
    this.userListener.remove();
    this.profileListener.remove();
  }

  _userChanged = () => {
    this.setState({ user: UserStore.currentUser() });
  }

  _profileChanged = () => {
    this.setState({ profile: ProfileStore.find(this.props.params.id) });
  }

  _updatedProfile = () => {
    hashHistory.push({pathname: 'profile/' + this.state.profile.id})
  }

  render() {
    const { user, profile } = this.state;

    return (
      <div className='new-profile-page'>
        <div className='profile-form-container'>
          <Header/>
          <EditForm user={user} profile={profile} updatedProfile={this._updatedProfile}/>
        </div>
      </div>

    );
  }
}
