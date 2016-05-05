var ServerActions = require('../actions/serverActions');

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
      url: "api/profile/" + id,
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
        console.log(["Error", e.responseText]);
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
  }
 }

 module.exports = ApiUtils;
