var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileConstants = require('../constants/profileConstants');

var ProfileStore = new Store(AppDispatcher);

var _profiles = {};

function resetProfiles (profiles) {
  _profiles = {};
  console.log("Set Profiles into Store")
  profiles.forEach(function (profile) {
    _profiles[profile.id] = profile;
  });
};

function addProfile (profile) {
  console.log("Added Profile to store");
  _profiles[profile.id] = profile;
};

ProfileStore.all = function () {
  return Object.assign({}, _profiles);
};

ProfileStore.find = function(id){
  return Object.assign({}, _profiles[id]);
};

ProfileStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProfileConstants.PROFILES_RECEIVED:
      console.log("Received Profiles at store");
      resetProfiles(payload.profiles);
      ProfileStore.__emitChange();
      break;
    case ProfileConstants.PROFILE_RECEIVED:
      console.log("Received Profile at store");
      addProfile(payload.profile);
      ProfileStore.__emitChange();
      break;
  }
};

module.exports = ProfileStore;
