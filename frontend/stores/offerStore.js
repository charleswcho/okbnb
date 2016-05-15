var AppDispatcher = require('../dispatcher/dispatcher');
var OfferConstants = require('../constants/offerConstants');
var Store = require('flux/utils').Store;

var OfferStore = new Store(AppDispatcher);
var _offers = {};
var _errors = [];

function resetOffers (offers) {
  _offers = {};
  offers.forEach(function (offer) {
    _offers[offer.user_id] = offer;
  });
};

setErrors = function (errors) {
  _errors = errors;
};

OfferStore.offered = function (user_id) {
  console.log(_offers);
  if (_offers[user_id]) {
    return true;
  }
  return false;
};

OfferStore.errors = function () {
  return _errors;
};

OfferStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case OfferConstants.UPDATE_OFFERS:
      resetOffers(payload.offers);
      OfferStore.__emitChange();
      break;
  }
};

module.exports = OfferStore;
