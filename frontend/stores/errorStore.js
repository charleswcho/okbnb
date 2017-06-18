import { Store } from 'flux/utils';

import AppDispatcher from '../dispatcher/dispatcher';
import ErrorConstants from '../constants/errorConstants';

const ErrorStore = new Store(AppDispatcher);

let _errors = [];

const setErrors = (errors) => {
  _errors = [];
  _errors = errors;
  console.log(_errors);
};

const clearErrors = () => {
  _errors = [];
};

ErrorStore.errors = () => _errors;

ErrorStore.__onDispatch = (payload) => {

  switch (payload.actionType) {
    case ErrorConstants.ERRORS:
      setErrors(payload.errors);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      ErrorStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = ErrorStore;
