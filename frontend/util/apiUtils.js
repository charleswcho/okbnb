var ServerActions = require('../actions/serverActions');

module.exports = {
  fetchProfiles: function () {
    $.ajax({
      url: "api/profiles",
      success: function (profiles) {
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
    $.ajax({
      method: "POST",
      url: "api/profiles",
      data: {
        profile: profileParams
      },
      success: function (profile) {
        ServerActions.receiveProfile(profile)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  }
 }
