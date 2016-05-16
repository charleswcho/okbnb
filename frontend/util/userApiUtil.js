var ServerActions = require('../actions/serverActions');

module.exports = {
  create: function (credentials) {
    console.log(credentials)
    $.ajax({
      method: "POST",
      url: "api/user",
      data: { user: credentials },
      success: function (currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error: function (e) {
        ServerActions.handleError(e)
      }
    });
  },

  signIn: function (credentials) {
    $.ajax({
      method: "POST",
      url: "api/session",
      data: { user: credentials },
      success: function (currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error: function (e) {
        ServerActions.handleError(e)
      }
    });
  },

  signOut: function () {
    $.ajax({
      method: "DELETE",
      url: "api/session",
      success: function (currentUser) {
        ServerActions.removeCurrentUser(currentUser);
      },
      error: function (e) {
        ServerActions.handleError(e)
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      success: function (currentUser) {
        ServerActions.receiveCurrentUser(currentUser);
      },
      error: function (e) {
        ServerActions.handleError(e);
      }
    });
  },

  clearErrors: function () {
    ServerActions.clearErrors();
  }
}
