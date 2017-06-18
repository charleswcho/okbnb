import React from 'react';
import FilterActions from '../../../actions/filterActions';

import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class PetOption extends React.Component {
  state = {
    pet: null
  }

  handlePetSelect = (eventKey, event) => {
    const pets = ['Dog', 'Cat', 'Bird', 'Other'];

    eventKey = parseInt(eventKey);

    switch (eventKey) {
      case 0:
        this.setState({ pet: 'Dog' })
        break;
      case 1:
        this.setState({ pet: 'Cat' })
        break;
      case 2:
        this.setState({ pet: 'Bird' })
        break;
      case 3:
        this.setState({ pet: 'Other' })
        break;
      case 4:
        this.setState({ pet: null })
        break;
    }
    FilterActions.updatePet(pets[eventKey]);
  }

  render() {
    return (
      <div className="pet-option">
        <DropdownButton className='filter-input' title='Pet' onSelect={this.handlePetSelect}>
          <MenuItem eventKey="0" active={(this.state.pet === 'Dog')}>Dog</MenuItem>
          <MenuItem eventKey="1" active={(this.state.pet === 'Cat')}>Cat</MenuItem>
          <MenuItem eventKey="2" active={(this.state.pet === 'Bird')}>Bird</MenuItem>
          <MenuItem eventKey="3" active={(this.state.pet === 'Other')}>Other</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Clear</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
