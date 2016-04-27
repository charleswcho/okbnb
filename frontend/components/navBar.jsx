var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Navbar = require('react-bootstrap').Navbar,
    Nav = require('react-bootstrap').Nav,
    NavItem = require('react-bootstrap').NavItem;


var CurrentUserStateMixin = require('../mixins/currentUserState');

var ClientActions = require('../actions/clientActions');
var UserStore = require('../stores/userStore');

module.exports = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function () {
    return {
      showSignUpModal: false,
      showLoginModal: false
    }
  },

  openSignUpModal: function () {
    this.setSate({ showSignUpModal: true })
  },

  closeSignUpModal: function () {
    this.setSate({ showSignUpModal: false })
  },

  openLoginModal: function () {
    this.setSate({ showLoginModal: true })
  },

  closeLoginModal: function () {
    this.setSate({ showLoginModal: false })
  },

  render: function () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">okbnb</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

            <NavItem id='create-profile' eventKey={1} href="#">Create a Profile</NavItem>
            <NavItem className='' eventKey={2} href="#">Sign Up</NavItem>
            <NavItem className='' eventKey={2} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});
