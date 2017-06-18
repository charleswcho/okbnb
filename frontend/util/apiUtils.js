import ServerActions from '../actions/serverActions';
import OfferUtil from './offerUtils';

const ApiUtils = {
  fetchProfiles(filters) {
    console.log("Set Profiles request")
    $.ajax({
      url: "api/profiles",
      data: filters,
      success(profiles) {
        console.log("Received Profiles")
        ServerActions.receiveProfiles(profiles)
      },
      error(e) {
        console.log(e.responceText)
        // ServerActions.handleError(e)
      },
    });
  },

  fetchProfile(id) {
    $.ajax({
      url: "api/profiles/" + id,
      success(profile) {
        ServerActions.receiveProfile(profile)
      },
      error(e) {
        console.log(e.responceText)
        // ServerActions.handleError(e)
      },
    });
  },

  createProfile(profileParams, cb) {
    $.ajax({
      method: "POST",
      url: "api/profiles",
      data: profileParams,
      success(profile) {
        console.log("Created new Profile");
        ServerActions.receiveProfile(profile)
        cb(profile.id);
      },
      error(e) {
        ServerActions.handleError(e)
      },
    });
  },

  updateProfile(profileParams) {
    $.ajax({
      method: "PATCH",
      url: "api/profiles/" + profileParams.profile.id,
      data: profileParams,
      success(profile) {
        console.log("Updated Profile");
        ServerActions.receiveProfile(profile)
      },
      error(e) {
        console.log(e.responceText)
        // ServerActions.handleError(e)
      },
    });
  },

  deleteProfile(id) {
    $.ajax({
      method: "DELETE",
      url: "api/profiles/" + id,
      success(profile) {
        console.log("Deleted Profile");
        ServerActions.deleteProfile(profile.id)
      },
      error(e) {
        console.log(e.responceText)
        // ServerActions.handleError(e)
      },
    });
  },

  contactProfile(profile_id, user_id) {
    console.log('Sending contact request')
    $.ajax({
      method: "POST",
      url: "api/profiles/contact",
      data: {
        profile_id: profile_id,
        user_id: user_id
      },
      success() {
        console.log("Contacted Profile");
        OfferUtil.fetchOffers(profile_id);
      }
    });
  }
}

export default ApiUtils;
