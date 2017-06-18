import AppDispatcher from '../dispatcher/dispatcher';
import FilterConstants from '../constants/filterConstants';


const ClientActions = {
  updateBounds(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: value,
    });
  },
  updateSearchState(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_SEARCH_STATUS,
      search_status: value,
    });
  },
  updateSmoker(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_SMOKER,
      smoker: value,
    });
  },
  updatePet(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PET,
      pet: value,
    });
  },
  updateDiet(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_DIET,
      diet: value,
    });
  },
  updateBudget(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BUDGET,
      budget: value,
    });
  },
};

export default ClientActions;
