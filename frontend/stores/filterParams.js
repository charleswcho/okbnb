var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var _params = { budget: { min: 0 } };

var FilterConstants = require('../constants/filterConstants');

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function () {
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SEARCH_STATUS:
      if (payload.search_status !== null) {
        _params.search_status = payload.search_status;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SMOKER:
      if (payload.smoker !== null) {
        _params.smoker = payload.smoker;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_PET:
      if (payload.pet !== null) {
        _params.pet = payload.pet;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DIET:
      if (payload.diet !== null) {
        _params.diet = payload.diet;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_MIN:
      _params.budget.min = payload.min;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_MAX:
      _params.budget.max = payload.max;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
