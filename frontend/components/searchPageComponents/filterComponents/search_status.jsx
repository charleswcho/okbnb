var React = require('react');
var FilterActions = require('../../../actions/filterActions');

var DropdownButton = require('react-bootstrap').DropdownButton
var MenuItem = require('react-bootstrap').MenuItem

var SearchStatusOption = React.createClass({
  getInitialState: function () {
    return { search_status: null };
  },

  handleSearchStatusSelect: function (eventKey, event) {
    var statuses = ['Active', 'Passive', "Don't contact"]
    eventKey = parseInt(eventKey);
    switch (eventKey) {
      case 0:
        this.setState({ search_status: statuses[0] })
        break;
      case 1:
        this.setState({ search_status: statuses[1] })
        break;
      case 2:
        this.setState({ search_status: statuses[2] })
        break;
      case 3:
        this.setState({ search_status: null })
        break;
    }
    console.log('1 Triggered Filter Action - updateSearchState')
    FilterActions.updateSearchState(statuses[eventKey]);
  },

  render: function() {
    return (
      <div className="search_status-option">
        <DropdownButton className='filter-input' title='Search Status' onSelect={this.handleSearchStatusSelect}>
            <MenuItem eventKey="0" active={this.state.search_status === 'Active'}>
              Active</MenuItem>
            <MenuItem eventKey="1" active={this.state.search_status === 'Passive'}>
              Passive</MenuItem>
            <MenuItem eventKey="2" active={this.state.search_status === "Don't contact"}>
              Don't contact</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3">Clear</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});

module.exports = SearchStatusOption;
