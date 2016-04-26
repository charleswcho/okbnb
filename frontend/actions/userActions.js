var UserApiUtil = require('../util/userApiUtil');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

module.exports = {
  // Client Actions

  create: UserApiUtil.create,
  login: UserApiUtil.login,
  logout: UserApiUtil.logout,
  fetchCurrentUser: UserApiUtil.fetchCurrentUser,
  // destroy: UserApiUtil.destroy,

  // Server Actions

  receiveCurrentUser: function (currentUser) {
    console.log("3 Sending currentUser to store")
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },

  removeCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};
