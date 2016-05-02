var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var _params = { budget: 0 };

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

      _params.search_status = payload.search_status;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SMOKER:
      _params.smoker = payload.smoker;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_PET:
      _params.pet = payload.pet;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DIET:
      _params.diet = payload.diet;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_BUDGET:
      _params.budget = payload.budget;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
