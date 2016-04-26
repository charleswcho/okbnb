var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/sessionConstants.js');

var UserStore = new Store(AppDispatcher);

var _currentUsers = {};
var _authErrors = [];

var addCurrentUser = function(user) {
  _currentUser = user;
};

var deleteCurrentUser = function() {
  _currentUser = {};
};

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.authErrors = function () {
  return _authErrors;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_CURRENT_USER:
      setCurrentUser(payload.currentUser);
      UserStore.__emitChange();
      break;
    case UserConstants.REMOVE_CURRENT_USER:
      deleteCurrentUser();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
