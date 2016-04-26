var UserApiUtil = require('../util/userApiUtil');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

module.exports = {
  // Client Actions

  fetchCurrentUser: UserApiUtil.fetchCurrentUser,
  login: UserApiUtil.login,
  logout: UserApiUtil.logout,
  create: UserApiUtil.create,
  destroy: UserApiUtil.destroy,

  // Server Actions

  receiveCurrentUser: function (currentUser) {
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
