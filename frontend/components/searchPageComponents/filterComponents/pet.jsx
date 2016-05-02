var React = require('react');
var FilterActions = require('../../../actions/filterActions');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var PetOption = React.createClass({

  getInitialState: function () {
    return { pet: '' };
  },

  handlePetSelect: function (eventKey, event) {
    switch (parseInt(eventKey)) {
      case 1:
        this.setState({ pet: 'Dog' })
        break;
      case 2:
        this.setState({ pet: 'Cat' })
        break;
      case 3:
        this.setState({ pet: 'Bird' })
        break;
      case 4:
        this.setState({ pet: 'Other' })
        break;
    }
    FilterActions.updatePet(this.state.pet);
  },

  render: function() {
    return (
      <div className="diet-option">
        <DropdownButton className='filter-input' title='Pet' onSelect={this.handlePetSelect}>
            <MenuItem eventKey="1" active={(this.state.pet === 'Dog')}>Dog</MenuItem>
            <MenuItem eventKey="2" active={(this.state.pet === 'Cat')}>Cat</MenuItem>
            <MenuItem eventKey="3" active={(this.state.pet === 'Bird')}>Bird</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4" active={(this.state.pet === 'Other')}>Other</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = PetOption;
