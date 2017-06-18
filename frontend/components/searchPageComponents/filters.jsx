import React from 'react';

import SearchStatusOption from './filterComponents/search_status';
import SmokerOption from './filterComponents/smoker';
import DietOption from './filterComponents/diet';
import PetOption from './filterComponents/pet';
import BudgetOption from './filterComponents/budget';

export default class Filters extends React.Component {
  renderBudget = () => {
    if (this.props.renderBudget) {
      return (<BudgetOption/>)
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='filters'>
        <div className='filter-preferences'>
          <div className='filter-heading'>Preferences</div>
          <div className='filter-row'>
            <SearchStatusOption/>
            <SmokerOption/>
            <DietOption/>
            <PetOption/>
          </div>
        </div>
        <div className='filter-budget'>
          <div className='filter-heading' id='budget'>Budget</div>
          {this.renderBudget()}
        </div>
      </div>
    );
  }
}
