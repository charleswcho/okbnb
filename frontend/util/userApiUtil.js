var UserActions = require('../actions/userActions');

module.exports = {

  create: function () {
    $.ajax({
      method: "POST",
      url: "api/user",
      success: function (currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function (e, s) {
        console.log(["Error", e, "Status", s]);
      }
    });
  },

  // TODO: SFEATURE - Delete profile
  // destroy: function () {
  //   $.ajax({
  //     method: "POST",
  //     url: "api/user",
  //     success: function (currentUser) {
  //       UserActions.receiveCurrentUser(currentUser);
  //     },
  //     error: function (e, s) {
  //       console.log(["Error", e, "Status", s]);
  //     }
  //   });
  // }

  login: function (credentials) {
    $.ajax({
      method: "POST",
      url: "api/session",
      data: { user: credentials }
      success: function (currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function (e, s) {
        console.log(["Error", e, "Status", s]);
      }
    });
  },

  logout: function () {
    $.ajax({
      method: "DELETE",
      url: "api/session",
      success: function (currentUser) {
        UserActions.removeCurrentUser(currentUser);
      },
      error: function (e, s) {
        console.log(["Error", e, "Status", s]);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      success: function (currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function (e, s) {
        console.log(["Error", e, "Status", s]);
      }
    });
  }
}
