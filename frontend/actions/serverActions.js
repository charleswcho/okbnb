import AppDispatcher from '../dispatcher/dispatcher';
import ProfileConstants from '../constants/profileConstants';
import UserConstants from '../constants/userConstants';
import OfferConstants from '../constants/offerConstants';
import ErrorConstants from '../constants/errorConstants';

const ServerActions = {
  // User and Session methods
  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      currentUser,
    });
  },

  removeCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVE_CURRENT_USER,
      currentUser,
    });
  },

  handleError(error) {
		AppDispatcher.dispatch({
			actionType: UserConstants.ERRORS,
			errors: error.responseJSON
		});
	},

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: UserConstants.CLEAR_ERRORS
    });
  },

  handleError(error) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERRORS,
      errors: error.responseJSON
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  },

  // Profile methods
  receiveProfiles(profiles) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILES_RECEIVED,
      profiles,
    });
  },

  receiveProfile(profile) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile,
    });
  },

  deleteProfile(profileId) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.DELETE_PROFILE,
      profileId,
    });
  },

  clearProfiles() {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.CLEAR_PROFILES,
    });
  },

  updateHovered(profileId) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.UPDATE_HOVERED,
      profileId,
    });
  },

  updateLoc(loc) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.UPDATE_LOC,
      loc,
    });
  },

  // Offer methods
  receiveOffers(offers) {
    AppDispatcher.dispatch({
      actionType: OfferConstants.UPDATE_OFFERS,
      offers,
    });
  },
};

export default ServerActions;
