import { Store } from 'flux/utils';

import AppDispatcher from '../dispatcher/dispatcher';
import OfferConstants from '../constants/offerConstants';

const OfferStore = new Store(AppDispatcher);
let _offers = {};
let _errors = [];

function resetOffers(offers) {
  _offers = {};
  offers.forEach(offer => {
    _offers[offer.user_id] = offer;
  });
};

const setErrors = (errors) => {
  _errors = errors;
};

OfferStore.offered = (user_id) => {
  console.log(_offers);
  if (_offers[user_id]) {
    return true;
  }
  return false;
};

OfferStore.errors = () => _errors;

OfferStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case OfferConstants.UPDATE_OFFERS:
      resetOffers(payload.offers);
      OfferStore.__emitChange();
      break;
  }
};

module.exports = OfferStore;
