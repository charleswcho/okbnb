var UserApiUtil = require('../util/userApiUtil');
var ApiUtil = require('../util/apiUtils');

module.exports = {
  // User and Session methods
  create: UserApiUtil.create,
  login: UserApiUtil.login,
  logout: UserApiUtil.logout,
  fetchCurrentUser: UserApiUtil.fetchCurrentUser,

  // Profile methods
  fetchProfiles: ApiUtil.fetchProfiles,
  fetchProfile: ApiUtil.fetchProfile,
  createProfile: ApiUtil.createProfile
}
