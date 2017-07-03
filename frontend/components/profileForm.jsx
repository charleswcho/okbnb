import React from 'react';
import { hashHistory } from 'react-router';

import ErrorStore from '../stores/errorStore';

import { CreateProfile } from '../constants/profileConstants';

import Header from './theme/header';
import Form from './theme/form';

export default class ProfileForm extends React.Component {
  state = {
    errors: ErrorStore.errors(),
  }

  componentDidMount() {
    this.errorsListener = ErrorStore.addListener(this.errorsChanged);
  }

  componentWillUnmount() {
    this.errorsListener.remove();
  }

  errorsChanged = () => this.setState({ errors: ErrorStore.errors() });

  createdProfile = (id) => {
    hashHistory.push({ pathname: 'profile/' + id })
  }

  render() {
    return (
      <div className="new-profile-page">
        <div className="profile-form-container">
          <Header main={CreateProfile.main} sub={CreateProfile.sub} />
          <Form
            type="create"
            errors={this.state.errors}
            createdProfile={this.createdProfile}
          />
        </div>
        <div className="key-features">
          <div className="key-feature">
            <img src="https://res.cloudinary.com/ddodpmqri/image/upload/v1462379822/form-1_rumhly.png" alt="bird" width="100" height="100" />
            <div className="key-feature-description">Creating a profile takes 2 minutes and is totally free.</div>
          </div>
          <div className="key-feature">
            <img src="https://res.cloudinary.com/ddodpmqri/image/upload/v1462379822/form-2_mikape.png" alt="socks" width="100" height="100" />
            <div className="key-feature-description">We&#39;re 100% sure you&#39;ll find the perfect tenant.</div>
          </div>
          <div className="key-feature">
            <img src="https://res.cloudinary.com/ddodpmqri/image/upload/v1462379824/form-3_x8eslz.png" alt="coffee" width="100" height="100" />

            <div className="key-feature-description">We&#39;re quick and easy to use!</div>
          </div>
        </div>
      </div>
    );
  }
}
