import { Store } from 'flux/utils';

import AppDispatcher from '../dispatcher/dispatcher';
import FilterConstants from '../constants/filterConstants';

const FilterParamsStore = new Store(AppDispatcher);

let params = { budget: { min: 0 } };

const reset = () => {
  const resetParams = {};

  resetParams.budget = params.budget;
  resetParams.bounds = params.bounds;

  params = resetParams;
};

FilterParamsStore.params = () => ({ ...params });

FilterParamsStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_BOUNDS:
      params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SEARCH_STATUS:
      if (payload.search_status) {
        params.search_status = payload.search_status;
      } else {
        reset();
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_SMOKER:
      if (payload.smoker) {
        if (payload.smoker === 'true') {
          params.smoker = true;
        } else {
          params.smoker = false;
        }
      } else {
        reset();
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_PET:
      if (payload.pet) {
        params.pet = payload.pet;
      } else {
        reset();
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DIET:
      if (payload.diet) {
        params.diet = payload.diet;
      } else {
        reset();
      }
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_BUDGET:
      params.budget = payload.budget;
      FilterParamsStore.__emitChange();
      break;
  }
};

export default FilterParamsStore;
