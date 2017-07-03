import React from 'react';
import { hashHistory } from 'react-router';

import UserStore from '../stores/userStore';
import ProfileStore from '../stores/profileStore';
import ClientActions from '../actions/clientActions';

import { EditProfile } from '../constants/profileConstants';

import Header from './theme/header';
import Form from './theme/form';

export default class ProfileEditForm extends React.Component {
  state = {
    user: UserStore.currentUser(),
    profile: ProfileStore.find(this.props.params.id)
  }

  componentDidMount() {
    this.userListener = UserStore.addListener(this.userChanged);
    this.profileListener = ProfileStore.addListener(this.profileChanged);
    ClientActions.fetchCurrentUser();
    ClientActions.fetchProfile(this.props.params.id);
  }

  componentWillUnmount() {
    this.userListener.remove();
    this.profileListener.remove();
  }

  userChanged = () => {
    this.setState({ user: UserStore.currentUser() });
  }

  profileChanged = () => {
    this.setState({ profile: ProfileStore.find(this.props.params.id) });
  }

  updatedProfile = () => {
    hashHistory.push({ pathname: 'profile/' + this.state.profile.id });
  }

  render() {
    const { user, profile } = this.state;

    return (
      <div className="new-profile-page">
        <div className="profile-form-container">
          <Header main={EditProfile.main} sub={EditProfile.sub} />
          <Form
            type="edit"
            user={user}
            profile={profile}
            updatedProfile={this.updatedProfile}
          />
        </div>
      </div>
    );
  }
}
