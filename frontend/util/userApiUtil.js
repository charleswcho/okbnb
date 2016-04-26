var UserActions = require('../actions/userActions');

module.exports = {
  create: function (credentials) {
    console.log("1 Sent Create request");
    $.ajax({
      method: "POST",
      url: "api/user",
      data: { user: credentials },
      success: function (currentUser) {
        console.log(["2 Received responce", currentUser]);
        debugger;
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
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
  //     error: function (e) {
  //       console.log(["Error", e]);
  //     }
  //   });
  // }

  login: function (credentials) {
    $.ajax({
      method: "POST",
      url: "api/session",
      data: { user: credentials },
      success: function (currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
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
      error: function (e) {
        console.log(["Error", e.responseText]);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      success: function (currentUser) {
        UserActions.receiveCurrentUser(currentUser);
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      }
    });
  }
}
