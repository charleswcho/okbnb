var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var Navbar = require('react-bootstrap').Navbar,
    Nav = require('react-bootstrap').Nav,
    NavItem = require('react-bootstrap').NavItem;

var CurrentUserStateMixin = require('../mixins/currentUserState');

var ClientActions = require('../actions/clientActions');
var UserStore = require('../stores/userStore');

var SignUpForm = require('./navBarComponents/signUpForm');
var SignInForm = require('./navBarComponents/signInForm');

module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return {
      showSignUpModal: false,
      showSignInModal: false
    }
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

  handleCreateProfile: function () {
    hashHistory.push({pathname: 'profile/new'})
  },

  toggleNavBarRight: function () {
    if (this.state.currentUser && this.state.currentUser.username) {
      return (
        <Nav pullRight>
          <NavItem id='create-profile'
                   onClick={this.handleCreateProfile}>Create a Profile</NavItem>
                 <NavItem className='' id='username'>{this.state.currentUser.username}</NavItem>
          <NavItem className='' onClick={this.signOut}>Sign Out</NavItem>
        </Nav>
      )
    } else {
      return (
        <Nav pullRight>
          <NavItem className='' onClick={this.openSignUpModal}>Sign Up</NavItem>
          <NavItem className='' onClick={this.openSignInModal}>Sign In</NavItem>
        </Nav>
      )
    }
  },

  render: function () {
    return (
      <div className='navBar'>
        <Modal show={this.state.showSignUpModal} onHide={this.closeSignUpModal}>
          <SignUpForm closeSignUpModal={this.closeSignUpModal}
                      errors={this.state.authErrors}/>
        </Modal>

        <Modal show={this.state.showSignInModal} onHide={this.closeSignInModal}>
          <SignInForm closeSignInModal={this.closeSignInModal}
                      errors={this.state.authErrors}/>
        </Modal>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">okbnb</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {this.toggleNavBarRight()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
});
