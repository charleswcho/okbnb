var UserActions = require('../actions/userActions');
var UserStore = require('../stores/userStore');

// We can add this mixin to any component by requiring it and adding it under the property mixins like so:
//
// var Component = React.createClass({
//     mixins: [CurrentUserStateMixin],
//     //other methods go here
// })

module.exports = {
  getInitialState: function () {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  },

  componentDidMount: function () {
    UserStore.addListener(updateUser);
    if (!UserStore.currentUser()) {
      UserActions.fetchCurrentUser()
    }
  },

  updateUser: function () {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    })
  }
}
