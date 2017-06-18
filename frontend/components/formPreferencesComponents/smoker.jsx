import React from 'react';

import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Smoker extends React.Component {
  state = {
    smoker: this.props.smoker
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
    }

    this.props.updateSmoker(smoker[eventKey]);
  }

  render() {
    return (
      <div className="smoker-option">
        <DropdownButton className='filter-input' title='Smoker' onSelect={this.handleSmokerSelect}>
          <MenuItem eventKey="0" active={this.state.smoker === true}>Yes</MenuItem>
          <MenuItem eventKey="1" active={this.state.smoker === false}>No</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
