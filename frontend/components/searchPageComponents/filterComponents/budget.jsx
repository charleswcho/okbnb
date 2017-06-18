import React from 'react';
import ReactSlider from 'react-slider';

import FilterActions from '../../../actions/filterActions';

export default class BudgetOption extends React.Component {
  state = {
    min: 0,
    max: 100
  }

  updateBudget = (range) => {
    this.setState({
      min: range[0],
      max: range[1]
    });

    const adjustedRange = {
      min: range[0] * 20,
      max: range[1] * 20
    };

    FilterActions.updateBudget(adjustedRange);
  }

  render() {
    const { min, max } = this.state;

    return (
      <div className='budget-option'>
        <ReactSlider
          className="slider"
          withBars
          defaultValue={[this.state.min, this.state.max]}
          onAfterChange={this.updateBudget}>

          <div id="left-handle" className="my-handle">{this.state.min * 20}</div>
          <div id="right-handle" className="my-handle">{this.state.max * 20 + "+"}</div>
        </ReactSlider>
      </div>
    );
  }
}
