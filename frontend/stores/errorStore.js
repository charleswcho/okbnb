var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/errorConstants');
var Store = require('flux/utils').Store;

var ErrorStore = new Store(AppDispatcher);

var _errors = [];

var setErrors = function (errors) {
  _errors = [];
  _errors = errors;
  console.log(_errors);
};

var clearErrors = function () {
  _errors = [];
};

ErrorStore.errors = function () {
  return _errors;
};

ErrorStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ErrorConstants.ERRORS:
      setErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
