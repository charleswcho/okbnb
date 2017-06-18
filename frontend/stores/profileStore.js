import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/dispatcher';
import ProfileConstants from '../constants/profileConstants';

const ProfileStore = new Store(AppDispatcher);

let profiles = {};
let hoveredProfileId = null;
let currentLocation = null;

function resetProfiles(newProfiles) {
  profiles = {};
  newProfiles.forEach((profile) => {
    profiles[profile.id] = profile;
  });
}

function addProfile(profile) {
  profiles[profile.id] = profile;
}

function deleteProfile(id) {
  delete profiles[id];
}

function clearProfiles() {
  profiles = {};
}

function updateHovered(profileId) {
  if (hoveredProfileId === profileId) {
    hoveredProfileId = null;
  } else {
    hoveredProfileId = profileId;
  }
}

function updateLoc(loc) {
  currentLocation = loc;
}

ProfileStore.all = () => {
  return Object.assign({}, profiles);
};

ProfileStore.find = (id) => {
  return Object.assign({}, profiles[id]);
};

ProfileStore.hovered = () => {
  return hoveredProfileId;
}

ProfileStore.currentLoc = () => {
  return currentLocation;
};

ProfileStore.__onDispatch = (payload) => {
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

export default ProfileStore;
