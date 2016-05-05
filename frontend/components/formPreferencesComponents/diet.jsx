var React = require('react');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var Diet = React.createClass({

  getInitialState: function () {
    return { diet: this.props.diet };
  },

  handleDietSelect: function (eventKey, event) {
    var diets = ['Vege', 'Vegan', 'Gluten', 'Other']
    eventKey = parseInt(eventKey);
    switch (eventKey) {
      case 0:
        this.setState({ diet: 'Vege' })
        break;
      case 1:
        this.setState({ diet: 'Vegan' })
        break;
      case 2:
        this.setState({ diet: 'Gluten' })
        break;
      case 3:
        this.setState({ diet: 'Other' })
        break;
    }
    this.props.updateDiet(diets[eventKey]);
  },

  render: function() {
    return (
      <div className="diet-option">
        <DropdownButton className='filter-input' title='Diet' onSelect={this.handleDietSelect}>
            <MenuItem eventKey="0" active={(this.state.diet === 'Vege')}>Vege</MenuItem>
            <MenuItem eventKey="1" active={(this.state.diet === 'Vegan')}>Vegan</MenuItem>
            <MenuItem eventKey="2" active={(this.state.diet === 'Gluten')}>Gluten</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3" active={(this.state.diet === 'Other')}>Other</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = Diet;
