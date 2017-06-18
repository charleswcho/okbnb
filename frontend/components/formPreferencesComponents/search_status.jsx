import React from 'react';

import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class SearchStatus extends React.Component {
  state = {
    search_status: this.props.searchStatus
  }

  handleSearchStatusSelect = (eventKey, event) => {
    const statuses = ['Active', 'Passive', "Don't contact"]

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
    }
    this.props.updateSearchStatus(statuses[eventKey]);
  }

  render() {
    return (
      <div className="search_status-option">
        <DropdownButton className='filter-input' title='Search Status' onSelect={this.handleSearchStatusSelect}>
            <MenuItem eventKey="0" active={this.state.search_status === 'Active'}>
              Active</MenuItem>
            <MenuItem eventKey="1" active={this.state.search_status === 'Passive'}>
              Passive</MenuItem>
            <MenuItem eventKey="2" active={this.state.search_status === "Don't contact"}>
              Don't contact</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
