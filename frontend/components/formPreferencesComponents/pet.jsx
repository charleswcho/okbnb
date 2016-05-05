var React = require('react');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var Pet = React.createClass({

  getInitialState: function () {
    return { pet: this.props.pet };
  },

  handlePetSelect: function (eventKey, event) {
    var pets = ['Dog', 'Cat', 'Bird', 'Other']
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
    }
    this.props.updatePet(pets[eventKey]);
  },

  render: function() {
    return (
      <div className="pet-option">
        <DropdownButton className='filter-input' title='Pet' onSelect={this.handlePetSelect}>
            <MenuItem eventKey="0" active={(this.state.pet === 'Dog')}>Dog</MenuItem>
            <MenuItem eventKey="1" active={(this.state.pet === 'Cat')}>Cat</MenuItem>
            <MenuItem eventKey="2" active={(this.state.pet === 'Bird')}>Bird</MenuItem>
              <MenuItem divider />
            <MenuItem eventKey="3" active={(this.state.pet === 'Other')}>Other</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = Pet;
