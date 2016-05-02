var React = require('react');
var FilterActions = require('../../../actions/filterActions');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var DietOption = React.createClass({

  getInitialState: function () {
    return { diet: '' };
  },

  handlePetSelect: function (eventKey, event) {
    switch (parseInt(eventKey)) {
      case 1:
        this.setState({ diet: 'Vege' })
        break;
      case 2:
        this.setState({ diet: 'Vegan' })
        break;
      case 3:
        this.setState({ diet: 'Gluten' })
        break;
      case 4:
        this.setState({ diet: 'Other' })
        break;
    }

    FilterActions.updateDiet(this.state.diet);
  },

  render: function() {
    return (
      <div className="diet-option">
        <DropdownButton className='filter-input' title='Diet' onSelect={this.handlePetSelect}>
            <MenuItem eventKey="1" active={(this.state.diet === 'Vege')}>Dog</MenuItem>
            <MenuItem eventKey="2" active={(this.state.diet === 'Vegan')}>Cat</MenuItem>
            <MenuItem eventKey="3" active={(this.state.diet === 'Gluten')}>Bird</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4" active={(this.state.diet === 'Other')}>Other</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = DietOption;
