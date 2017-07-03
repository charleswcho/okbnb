import React from 'react';

import BudgetOption from '../searchPageComponents/filterComponents/budget';
import DropDown from './dropdown';

import { FilterTypes } from '../../constants/filterConstants';

export default class Filters extends React.Component {
  renderBudget = () => {
    if (this.props.renderBudget) {
      return (<BudgetOption />);
    }

    return null;
  }

  render() {
    const { search_status, smoker, diet, pet, updateValue } = this.props;

    return (
      <div className="filters">
        <div className="filter-preferences">
          <div className="filter-heading">Preferences</div>
          <div className="filter-row">
            <DropDown type="search_status" value={search_status} values={FilterTypes.search_status} updateValue={updateValue} />
            <DropDown type="smoker" value={smoker} values={FilterTypes.smoker} updateValue={updateValue} />
            <DropDown type="diet" value={diet} values={FilterTypes.diet} updateValue={updateValue} />
            <DropDown type="pet" value={pet} values={FilterTypes.pet} updateValue={updateValue} />
          </div>
        </div>

        {this.renderBudget()}
      </div>
    );
  }
}
