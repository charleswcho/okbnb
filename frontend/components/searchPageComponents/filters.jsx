var React = require('react');

var SmokerOption = require('./filterComponents/smoker');
var DietOption = require('./filterComponents/diet');
var PetOption = require('./filterComponents/pet');
// var BudgetOption = require('./filterComponents/budget');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='filters'>
        <div className='filter-heading'>Preferences</div>
        <div className='filter-row'>
          <SmokerOption/>
        </div>
        <div className='filter-row'>
          <DietOption/>
          <PetOption/>
        </div>
        <div className='filter-heading'>Budget</div>
      </div>
    );
  }
});
