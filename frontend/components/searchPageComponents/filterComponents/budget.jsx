var React = require('react');
var ReactSlider = require('react-slider');

var FilterActions = require('../../../actions/filterActions');

var BudgetOption = React.createClass({
  getInitialState: function () {
    return {
      min: 0,
      max: 100
    };
  },

  updateBudget: function (range) {
    this.setState({
      min: range[0],
      max: range[1]
    });
    var adjustedRange = {
      min: range[0] * 20,
      max: range[1] * 20
    };

    FilterActions.updateBudget(adjustedRange);
  },

  render: function() {
    var min = this.state.min;
    var max = this.state.max;
    return (
      <div className='budget-option'>
        <ReactSlider onAfterChange={this.updateBudget} withBars defaultValue={[this.state.min, this.state.max]} className="slider">
                <div id="left-handle" className="my-handle">{this.state.min*20}</div>
                <div id="right-handle" className="my-handle">{this.state.max*20 + "+"}</div>
        </ReactSlider>
      </div>
    );
  }
});

module.exports = BudgetOption;
