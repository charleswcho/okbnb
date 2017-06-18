import { Store } from 'flux/utils';

import AppDispatcher from '../dispatcher/dispatcher';
import UserConstants from '../constants/userConstants';

const UserStore = new Store(AppDispatcher);
let _currentUser = {};

function setCurrentUser(user) {
  _currentUser = user;
}

function deleteCurrentUser() {
  _currentUser = {};
}

UserStore.currentUser = () => _currentUser;

UserStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
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

export default UserStore;
