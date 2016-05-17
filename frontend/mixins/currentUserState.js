var ClientActions = require('../actions/clientActions');
var UserStore = require('../stores/userStore');

var currentUserState = {
  getInitialState: function () {
    this.setState({
      currentUser: UserStore.currentUser()
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
      currentUser: UserStore.currentUser()
    })
  }
}

module.exports = currentUserState;
