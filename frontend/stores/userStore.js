var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);
var _currentUser = {};
var _errors = [];

var setCurrentUser = function(user) {
  _currentUser = user;
};

var deleteCurrentUser = function() {
  _currentUser = {};
};

var setErrors = function (errors) {
  _errors = [];
  _errors = errors;
  console.log(_errors);
};

var clearErrors = function () {
  _errors = {};
};

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.errors = function () {
  return _errors;
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
    case UserConstants.ERRORS:
      setErrors(payload.errors);
      UserStore.__emitChange();
      break;
    case UserConstants.CLEAR_ERRORS:
      clearErrors();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
