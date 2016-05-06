var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileConstants = require('../constants/profileConstants');

var ProfileStore = new Store(AppDispatcher);

var _profiles = {};
var _hoveredProfileId = null;
var _currentLocation = null;

function resetProfiles (profiles) {
  _profiles = {};
  profiles.forEach(function (profile) {
    _profiles[profile.id] = profile;
  });
};

function addProfile (profile) {
  _profiles[profile.id] = profile;
};

function deleteProfile (id) {
  delete _profiles[id];
};

function clearProfiles () {
  _profiles = {};
};

function updateHovered (profileId) {
  if (_hoveredProfileId === profileId) {
    _hoveredProfileId = null;
  } else {
    _hoveredProfileId = profileId;
  }
};

function updateLoc (loc) {
  _currentLocation = loc;
};

ProfileStore.all = function () {
  return Object.assign({}, _profiles);
};

ProfileStore.find = function(id){
  return Object.assign({}, _profiles[id]);
};

ProfileStore.hovered = function () {
  return _hoveredProfileId;
};

ProfileStore.currentLoc = function () {
  return _currentLocation;
};

ProfileStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProfileConstants.PROFILES_RECEIVED:
      resetProfiles(payload.profiles);
      ProfileStore.__emitChange();
      break;
    case ProfileConstants.PROFILE_RECEIVED:
      addProfile(payload.profile);
      ProfileStore.__emitChange();
      break;
    case ProfileConstants.DELETE_PROFILE:
      deleteProfile(payload.profileId);
      ProfileStore.__emitChange();
      break;
    case ProfileConstants.CLEAR_PROFILES:
      clearProfiles();
      ProfileStore.__emitChange();
    case ProfileConstants.UPDATE_HOVERED:
      updateHovered(payload.profileId);
      ProfileStore.__emitChange();
      break;
    case ProfileConstants.UPDATE_LOC:
      updateLoc(payload.loc);
      ProfileStore.__emitChange();
      break;
  }
};

module.exports = ProfileStore;
