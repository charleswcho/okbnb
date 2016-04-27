var UserApiUtil = require('../util/userApiUtil');
var ApiUtil = require('../util/apiUtils');

module.exports = {
  // User and Session methods
  create: UserApiUtil.create,
  signIn: UserApiUtil.signIn,
  signOut: UserApiUtil.signOut,
  fetchCurrentUser: UserApiUtil.fetchCurrentUser,

  // Profile methods
  fetchProfiles: ApiUtil.fetchProfiles,
  fetchProfile: ApiUtil.fetchProfile,
  createProfile: ApiUtil.createProfile
}
