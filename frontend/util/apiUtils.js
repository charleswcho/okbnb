var ServerActions = require('../actions/serverActions');
var OfferUtil = require('./offerUtils');

var ApiUtils = {
  fetchProfiles: function (filters) {
    console.log("Set Profiles request")
    $.ajax({
      url: "api/profiles",
      data: filters,
      success: function (profiles) {
        console.log("Received Profiles")
        ServerActions.receiveProfiles(profiles)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  },

  fetchProfile: function (id) {
    $.ajax({
      url: "api/profiles/" + id,
      success: function (profile) {
        ServerActions.receiveProfile(profile)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  },

  createProfile: function (profileParams) {
    $.ajax({
      method: "POST",
      url: "api/profiles",
      data: profileParams,
      success: function (profile) {
        console.log("Created new Profile");
        ServerActions.receiveProfile(profile)
      },
      error: function (e) {
        ServerActions.handleError(e)
      },
    });
  },

  updateProfile: function (profileParams) {
    $.ajax({
      method: "PATCH",
      url: "api/profiles/" + profileParams.profile.id,
      data: profileParams,
      success: function (profile) {
        console.log("Updated Profile");
        ServerActions.receiveProfile(profile)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  },

  deleteProfile: function (id) {
    $.ajax({
      method: "DELETE",
      url: "api/profiles/" + id,
      success: function (profile) {
        console.log("Deleted Profile");
        ServerActions.deleteProfile(profile.id)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  },

  contactProfile: function (profile_id, user_id) {
    console.log('Sending contact request')
    $.ajax({
      method: "POST",
      url: "api/profiles/contact",
      data: {
        profile_id: profile_id,
        user_id: user_id
      },
      success: function () {
        console.log("Contacted Profile");
        OfferUtil.fetchOffers(profile_id);
      }
    });
  }
}

 module.exports = ApiUtils;
