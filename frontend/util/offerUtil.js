var ServerActions = require('../actions/serverActions');

var OfferUtils = {
  fetchOffer: function (profile_id) {
    console.log("Set Offer request")
    $.ajax({
      url: "api/offers/" + profile_id,
      success: function (offer) {
        console.log("Received offer")
        ServerActions.receiveOffer(offer)
      },
      error: function (e) {
        console.log(["Error", e.responseText]);
      },
    });
  }
}

 module.exports = OfferUtils;
