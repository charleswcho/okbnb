var AppDispatcher = require('../dispatcher/dispatcher');
var OfferConstants = require('../constants/offerConstants');
var Store = require('flux/utils').Store;

var OfferStore = new Store(AppDispatcher);
var _currentOffer = {};
var _errors = [];

var setCurrentOffer = function(offer) {
  _currentOffer = offer;
};

setErrors = function (errors) {
  _errors = errors;
};

OfferStore.currentOffer = function () {
  return _currentOffer;
};

OfferStore.errors = function () {
  return _errors;
};

OfferStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case OfferConstants.UPDATE_OFFER:
      setCurrentOffer(payload.offer);
      OfferStore.__emitChange();
      break;
  }
};

module.exports = OfferStore;
