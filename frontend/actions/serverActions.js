var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileConstants = require('../constants/profileConstants');

module.exports = {
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
};
