import { Store } from 'flux/utils';

import AppDispatcher from '../dispatcher/dispatcher';
import FilterConstants from '../constants/filterConstants';

const FilterParamsStore = new Store(AppDispatcher);

const _params = { budget: { min: 0 } };

FilterParamsStore.params = () => {
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SEARCH_STATUS:
      if (payload.search_status) {
        _params.search_status = payload.search_status;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SMOKER:
      if (payload.smoker) {
        _params.smoker = payload.smoker;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_PET:
      if (payload.pet) {
        _params.pet = payload.pet;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DIET:
      if (payload.diet) {
        _params.diet = payload.diet;
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_BUDGET:
      _params.budget = payload.budget;
      FilterParamsStore.__emitChange();
      break;
  }
};

export default FilterParamsStore;
