const FilterConstants = {
  UPDATE_BOUNDS: 'UPDATE_BOUNDS',
  UPDATE_SEARCH_STATUS: 'UPDATE_SEARCH_STATUS',
  UPDATE_SMOKER: 'UPDATE_SMOKER',
  UPDATE_PET: 'UPDATE_PET',
  UPDATE_DIET: 'UPDATE_DIET',
  UPDATE_MIN: 'UPDATE_BUDGET',
};

export const FilterTypes = {
  search_status: ['Active', 'Passive', "Don't contact"],
  smoker: ['true', 'false'],
  diet: ['Vege', 'Vegan', 'Gluten', 'Other'],
  pet: ['Dog', 'Cat', 'Bird', 'Other'],
};

export default FilterConstants;
