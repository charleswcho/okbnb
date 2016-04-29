var ClientActions = require('../actions/clientActions');
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
      authErrors: UserStore.errors()
    });
  },

  componentDidMount: function () {
    this.listener = UserStore.addListener(this.updateUser);
		ClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  updateUser: function () {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.errors()
    })
  }
}
