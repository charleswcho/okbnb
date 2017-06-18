import React from 'react';
import { hashHistory } from 'react-router';

import ProfileStore from '../stores/profileStore';
import ErrorStore from '../stores/errorStore';

import Header from './profileFormComponents/header';
import Form from './profileFormComponents/form';

import Errors from '../mixins/errors';

export default class ProfileForm extends React.Component {
  state = {
    errors: ErrorStore.errors()
  }

  componentDidMount() {
    this.errorsListener = ErrorStore.addListener(this._errorsChanged);
  }

  componentWillUnmount() {
    this.errorsListener.remove();
  }

  _errorsChanged = () => this.setState({ errors: ErrorStore.errors() });

  createdProfile(id) {
    hashHistory.push({pathname: 'profile/' + id})
  }

  render() {
    return (
      <div className='new-profile-page'>
        <div className='profile-form-container'>
          <Header/>
          <Form createdProfile={this.createdProfile}
                errors={this.state.errors}/>
        </div>
        <div className='key-features'>
          <div className='key-feature'>
            <img src="https://res.cloudinary.com/ddodpmqri/image/upload/v1462379822/form-1_rumhly.png" alt="bird" width='100' height='100'/>
            <div className='key-feature-description'>Creating a profile takes 2 minutes and is totally free.</div>
          </div>
          <div className='key-feature'>
            <img src="https://res.cloudinary.com/ddodpmqri/image/upload/v1462379822/form-2_mikape.png" alt="socks" width='100' height='100'/>
            <div className='key-feature-description'>We're 100% sure you'll find the perfect tenant.</div>
          </div>
          <div className='key-feature'>
            <img src="https://res.cloudinary.com/ddodpmqri/image/upload/v1462379824/form-3_x8eslz.png" alt="coffee" width='100' height='100'/>

            <div className='key-feature-description'>We're quick and easy to use!  </div>
          </div>
        </div>
      </div>
    );
  }  
}
