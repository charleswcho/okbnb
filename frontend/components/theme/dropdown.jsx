import React from 'react';

import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class DropDown extends React.Component {
  handleSelect = value => this.props.updateValue(this.props.type, value)

  render() {
    const { type, value, values } = this.props;

    return (
      <DropdownButton className="filter-input" title={type[0].toUpperCase() + type.slice(1)} onSelect={this.handleSelect}>
        {
          values.map(v => <MenuItem eventKey={v} active={(v === value)}>{v}</MenuItem>)
        }

        <MenuItem divider />
        <MenuItem eventKey={null}>Clear</MenuItem>
      </DropdownButton>
    );
  }
}
