var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileConstants = require('../constants/profileConstants');
var UserConstants = require('../constants/userConstants');
var OfferConstants = require('../constants/offerConstants');
var ErrorConstants = require('../constants/errorConstants');

module.exports = {
  // User and Session methods
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
  },

  handleError: function(error) {
		AppDispatcher.dispatch({
			actionType: UserConstants.ERRORS,
			errors: error.responseJSON
		});
	},

  clearErrors: function () {
    AppDispatcher.dispatch({
      actionType: UserConstants.CLEAR_ERRORS
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERRORS,
      errors: error.responseJSON
    });
  },

  clearErrors: function () {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  },

  // Profile methods
  receiveProfiles: function(profiles){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILES_RECEIVED,
      profiles: profiles
    });
  },

  receiveProfile: function(profile){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      profile: profile
    });
  },

  deleteProfile: function(profileId){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.DELETE_PROFILE,
      profileId: profileId
    });
  },

  clearProfiles: function () {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.CLEAR_PROFILES
    });
  },

  updateHovered: function(profileId) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.UPDATE_HOVERED,
      profileId: profileId
    });
  },

  updateLoc: function(loc) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.UPDATE_LOC,
      loc: loc
    });
  },

  // Offer methods
  receiveOffers: function(offers){
    AppDispatcher.dispatch({
      actionType: OfferConstants.UPDATE_OFFERS,
      offers: offers
    });
  }
};
