var ServerActions = require('../actions/serverActions');

var OfferUtils = {
  fetchOffers: function (profile_id) {
    console.log("Set Offer request")
    $.ajax({
      url: "api/offers/" + profile_id,
      success: function (offers) {
        console.log("Received offers")
        ServerActions.receiveOffers(offers)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  }
}

 module.exports = OfferUtils;
