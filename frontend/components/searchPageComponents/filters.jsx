var React = require('react');

var SearchStatusOption = require('./filterComponents/search_status');
var SmokerOption = require('./filterComponents/smoker');
var DietOption = require('./filterComponents/diet');
var PetOption = require('./filterComponents/pet');
var BudgetOption = require('./filterComponents/budget');

var Filters = React.createClass({
  render: function () {
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
          <BudgetOption/>
        </div>
      </div>
    );
  }
});

module.exports = Filters;
