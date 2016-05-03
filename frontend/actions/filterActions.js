var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filterConstants');

module.exports = {
  updateBounds: function (value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: value
    });
  },
  updateSearchState: function (value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_SEARCH_STATUS,
      search_status: value
    });
  },
  updateSmoker: function (value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_SMOKER,
      smoker: value
    });
  },
  updatePet: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PET,
      pet: value,
    });
  },
  updateDiet: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_DIET,
      diet: value,
    });
  },
  updateMin: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN,
      min: value,
    });
  },
  updateMax: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX,
      max: value,
    });
  }
};
