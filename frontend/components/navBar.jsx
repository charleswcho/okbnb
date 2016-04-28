var React = require('react');
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

  toggleNavBarRight: function () {
    if (this.state.currentUser && this.state.currentUser.username) {
      return (
        <Nav pullRight>
          <NavItem className='' onClick={this.signOut}>Sign Out</NavItem>
        </Nav>
      )
    } else {
      return (
        <Nav pullRight>
          <NavItem id='create-profile'>Create a Profile</NavItem>
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
          <SignUpForm closeSignUpModal={this.closeSignUpModal}/>
        </Modal>

        <Modal show={this.state.showSignInModal} onHide={this.closeSignInModal}>
          <SignInForm closeSignInModal={this.closeSignInModal}/>
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