var ServerActions = require('../actions/serverActions');

var OfferUtils = {
  fetchOffers: function (profile_id) {
    $.ajax({
      url: "api/offers/" + profile_id,
      success: function (offers) {
        ServerActions.receiveOffers(offers)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  }
}

 module.exports = OfferUtils;
