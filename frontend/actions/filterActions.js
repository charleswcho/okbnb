var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filterConstants');

module.exports = {
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
  updateBudget: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BUDGET,
      budget: value,
    });
  }
};
