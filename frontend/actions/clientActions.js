import UserApiUtil from '../util/userApiUtil';
import ApiUtil from '../util/apiUtils';
import OfferUtil from '../util/offerUtils';

const ClientActions = {
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

export default ClientActions;
