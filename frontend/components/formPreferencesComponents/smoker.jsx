var React = require('react');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var Smoker = React.createClass({
  getInitialState: function () {
    return { smoker: this.props.smoker };
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
    }

    this.props.updateSmoker(smoker[eventKey]);
  },

  render: function() {
    return (
      <div className="smoker-option">
        <DropdownButton className='filter-input' title='Smoker' onSelect={this.handleSmokerSelect}>
            <MenuItem eventKey="0" active={this.state.smoker === true}>Yes</MenuItem>
            <MenuItem eventKey="1" active={this.state.smoker === false}>No</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = Smoker;
