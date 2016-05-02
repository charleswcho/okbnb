var ServerActions = require('../actions/serverActions');

module.exports = {
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
      url: "api/profile" + id,
      success: function (profile) {
        ServerActions.receiveProfile(profile)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  },

  createProfile: function (profileParams) {
    console.log("Sent profile POST request");
    $.ajax({
      method: "POST",
      url: "api/profiles",
      data: {
        profile: profileParams
      },
      success: function (profile) {
        console.log("Created new Profile");
        ServerActions.receiveProfile(profile)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  }
 }
