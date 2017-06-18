import React from 'react';
import { hashHistory } from 'react-router';
import { Modal } from 'react-bootstrap';

import ClientActions from '../actions/clientActions';
import ServerActions from '../actions/serverActions';
import UserStore from '../stores/userStore';
import ErrorStore from '../stores/errorStore';

import SignUpForm from './navBarComponents/signUpForm';
import SignInForm from './navBarComponents/signInForm';

export default class NavBar extends React.Component {
  state = {
    currentUser: UserStore.currentUser(),
    showSignUpModal: false,
    showSignInModal: false,
    errors: ErrorStore.errors()
  }

  componentDidMount() {
    this.listener = UserStore.addListener(this.updateUser);
    ClientActions.fetchCurrentUser();
    this.errorsListener = ErrorStore.addListener(this._errorsChanged);
  }

  componentWillUnmount() {
    this.listener.remove();
    this.errorsListener.remove();
  }

  updateUser = () => this.setState({ currentUser: UserStore.currentUser() });

  _errorsChanged = () => this.setState({ errors: ErrorStore.errors() });

  clearErrors = () => ServerActions.clearErrors();

  openSignUpModal = () => this.setState({ showSignUpModal: true });
  closeSignUpModal = () => this.setState({ showSignUpModal: false });

  openSignInModal = () => this.setState({ showSignInModal: true });
  closeSignInModal = () => this.setState({ showSignInModal: false });

  signOut = () => {
    ClientActions.signOut();
    this.setState({
      showSignInModal: false,
      showSignOutModal: false
    });
  }

  showProfile = () => {
    if (this.state.currentUser.profile_id) {
      hashHistory.push({pathname: 'profile/' + this.state.currentUser.profile_id})
    }
  }

  handleCreateProfile = () => {
    hashHistory.push({pathname: 'profile/new'})
  }

  toggleCreateProfile = () => {
    if (this.state.currentUser.profile_id) {
      return <li onClick={this.showProfile}>Profile</li>;
    } else {
      return <li onClick={this.handleCreateProfile}>Create a Profile</li>;
    }
  }

  toggleNavBarRight = () => {
    if (this.state.currentUser && this.state.currentUser.email) {
      return(
        <div id="user-button" className="nav-bar-button">
          <img src='https://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif' />
          <ul className="user-menu">
            <li id='menu-name'>{this.state.currentUser.email}</li>
            {this.toggleCreateProfile()}
            <li onClick={this.signOut}>Log Out</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className='navBar-auth'>
          <div onClick={this.openSignUpModal}>Sign Up</div>
          <div onClick={this.openSignInModal}>Sign In</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className=''>
        <Modal show={this.state.showSignUpModal} onHide={this.closeSignUpModal} onExited={this.clearErrors}>
          <SignUpForm closeSignUpModal={this.closeSignUpModal} errors={this.state.errors}/>
        </Modal>

        <Modal show={this.state.showSignInModal} onHide={this.closeSignInModal} onExited={this.clearErrors}>
          <SignInForm closeSignInModal={this.closeSignInModal} errors={this.state.errors}/>
        </Modal>

        <div className='navBar'>

          <a id='navBar-logo' href="#">
            <img className='' src='https://res.cloudinary.com/ddodpmqri/image/upload/v1468453500/handshake_filled_bq49yt.png' alt='logo' height='40' width='40'/>
          </a>
          {this.toggleNavBarRight()}
        </div>
      </div>
    );
  }
}
