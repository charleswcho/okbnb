var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='filters'>
        Filter Component
        <div className='filter-heading'>Preferences</div>
        <div className='filter-heading'>Budget</div>
      </div>
    );
  }
});
