import React from 'react';
import FilterActions from '../../../actions/filterActions';

import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class SmokerOption extends React.Component {
  state = {
    smoker: null
  }

  handleSmokerSelect = (eventKey, event) => {
    const smoker = [true, false]

    eventKey = parseInt(eventKey)

    switch (eventKey) {
      case 0:
        this.setState({ smoker: true })
        break;
      case 1:
        this.setState({ smoker: false })
        break;
      case 2:
        this.setState({ smoker: null })
        break;
    }
    FilterActions.updateSmoker(smoker[eventKey]);
  }

  render() {
    return (
      <div className="smoker-option">
        <DropdownButton className='filter-input' title='Smoker' onSelect={this.handleSmokerSelect}>
          <MenuItem eventKey="0" active={this.state.smoker === true}>Yes</MenuItem>
          <MenuItem eventKey="1" active={this.state.smoker === false}>No</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2">Clear</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
