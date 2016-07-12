var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var Navbar = require('react-bootstrap').Navbar,
    Nav = require('react-bootstrap').Nav,
    NavItem = require('react-bootstrap').NavItem;

var CurrentUserStateMixin = require('../mixins/currentUserState');

var ClientActions = require('../actions/clientActions');
var ServerActions = require('../actions/serverActions');
var UserStore = require('../stores/userStore');
var ErrorStore = require('../stores/errorStore');

var SignUpForm = require('./navBarComponents/signUpForm');
var SignInForm = require('./navBarComponents/signInForm');

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return {
      showSignUpModal: false,
      showSignInModal: false,
      errors: ErrorStore.errors()
    }
  },

  componentDidMount: function () {
    this.errorsListener = ErrorStore.addListener(this._errorsChanged);
  },

  componentWillUnmount: function () {
    this.errorsListener.remove();
  },

  _errorsChanged: function () {
    this.setState({ errors: ErrorStore.errors() });
  },

  clearErrors: function () {
    ServerActions.clearErrors();
  },

  openSignUpModal: function () {
    this.setState({ showSignUpModal: true })
  },

  closeSignUpModal: function () {
    this.setState({ showSignUpModal: false })
  },

  openSignInModal: function () {
    this.setState({ showSignInModal: true })
  },

  closeSignInModal: function () {
    this.setState({ showSignInModal: false })
  },

  signOut: function () {
    ClientActions.signOut();
    this.setState({
      showSignInModal: false,
      showSignOutModal: false
    });
  },

  showProfile: function () {
    if (this.state.currentUser.profile_id) {
      hashHistory.push({pathname: 'profile/' + this.state.currentUser.profile_id})
    }
  },

  handleCreateProfile: function () {
    hashHistory.push({pathname: 'profile/new'})
  },

  toggleCreateProfile: function () {
    if (this.state.currentUser.profile_id) {
      return null;
    } else {
      return (
        <div id='create-profile'onClick={this.handleCreateProfile}>
        Create a Profile</div>
      )
    }
  },

  toggleNavBarRight: function () {
    if (this.state.currentUser && this.state.currentUser.email) {
      return(
        <div id="user-button" className="nav-bar-button">
          <img src='https://res.cloudinary.com/ddodpmqri/image/upload/v1462480743/empty-profile_whfqjj.gif' />
          <ul className="user-menu">
            <li id='menu-name'>{this.state.currentUser.email}</li>
            <li onClick={this.showProfile}>Edit Profile</li>
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
      )
    }
  },

  render: function () {
    return (
      <div className=''>
        <Modal show={this.state.showSignUpModal} onHide={this.closeSignUpModal}
               onExited={this.clearErrors}>
          <SignUpForm closeSignUpModal={this.closeSignUpModal}
                      errors={this.state.errors}/>
        </Modal>

        <Modal show={this.state.showSignInModal} onHide={this.closeSignInModal}
               onExited={this.clearErrors}>
          <SignInForm closeSignInModal={this.closeSignInModal}
                      errors={this.state.errors}/>
        </Modal>

        <div className='navBar'>
          <a className='navBar-logo' href="#">okbnb</a>
          {this.toggleNavBarRight()}
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
