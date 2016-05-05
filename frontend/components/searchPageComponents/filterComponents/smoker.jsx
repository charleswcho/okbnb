var React = require('react');
var FilterActions = require('../../../actions/filterActions');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var SmokerOption = React.createClass({
  getInitialState: function () {
    return { smoker: null };
  },

  handleSmokerSelect: function (eventKey, event) {
    var smoker = [true, false]
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
  },

  render: function() {
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
});

module.exports = SmokerOption;
