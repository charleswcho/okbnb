var UserApiUtil = require('../util/userApiUtil');
var ApiUtil = require('../util/apiUtils');
var OfferUtil = require('../util/offerUtils');

module.exports = {
  // User and Session methods
  create: UserApiUtil.create,
  signIn: UserApiUtil.signIn,
  signOut: UserApiUtil.signOut,
  fetchCurrentUser: UserApiUtil.fetchCurrentUser,
  clearErrors: UserApiUtil.clearErrors,

  // Profile methods
  fetchProfiles: ApiUtil.fetchProfiles,
  fetchProfile: ApiUtil.fetchProfile,
  createProfile: ApiUtil.createProfile,
  updateProfile: ApiUtil.updateProfile,
  deleteProfile: ApiUtil.deleteProfile,
  contactProfile: ApiUtil.contactProfile,

  // Offer methods
  fetchOffers: OfferUtil.fetchOffers
}
