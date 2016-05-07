var React = require('react');
var FilterActions = require('../../../actions/filterActions');

// var Rcslider = require('rc-slider');
// <Rcslider className='budget-slider' allowCross={false} range={true}/>

var BudgetOption = React.createClass({
  getInitialState: function () {
    return {
      min: '',
      max: ''
    };
  },

  minChanged: function (e) {
    e.preventDefault();
    this.setState({ min: e.target.value })
    FilterActions.updateMin(parseInt(e.target.value))
  },

  maxChanged: function (e) {
    e.preventDefault();
    this.setState({ max: e.target.value })
    FilterActions.updateMax(parseInt(e.target.value))
  },

  render: function() {
    var min = this.state.min;
    var max = this.state.max;
    return (
      <div className='budget-option'>
        <label className='budget-option-label'>Min
          <input className='budget-input' type='number'
                 onChange={this.minChanged} value={min}/>
        </label>
        <label className='budget-option-label'>Max
          <input className='budget-input' type='number'
                 onChange={this.maxChanged} value={max}/>
        </label>
      </div>
    );
  }
});

module.exports = BudgetOption;
