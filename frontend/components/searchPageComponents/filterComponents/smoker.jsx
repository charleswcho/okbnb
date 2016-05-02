var React = require('react');
var FilterActions = require('../../../actions/filterActions');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var SmokerOption = React.createClass({
  getInitialState: function () {
    return { smoker: '' };
  },

  handleSmokerSelect: function (eventKey, event) {
    switch (parseInt(eventKey)) {
      case 1:
        this.setState({ smoker: true })
        break;
      case 2:
        this.setState({ smoker: false })
        break;
    }
    FilterActions.updateSmoker(this.state.smoker);
  },

  render: function() {
    return (
      <div className="smoker-option">
        <DropdownButton className='filter-input' title='Smoker' onSelect={this.handleSmokerSelect}>
            <MenuItem eventKey="1" active={this.state.smoker === true}>Yes</MenuItem>
            <MenuItem eventKey="2" active={this.state.smoker === false}>No</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = SmokerOption;
