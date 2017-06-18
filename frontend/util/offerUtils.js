import ServerActions from '../actions/serverActions';

const OfferUtils = {
  fetchOffers(profile_id) {
    $.ajax({
      url: "api/offers/" + profile_id,
      success(offers) {
        ServerActions.receiveOffers(offers)
      },
      error(e) {
        console.log(["Error", e.responseText]);
      },
    });
  }
}

export default OfferUtils;
