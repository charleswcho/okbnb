var React = require('react');

var IndexItem = require('./indexItem');

module.exports = React.createClass({
  render: function () {
    return (
      <div>This is the top of the Index
        <IndexItem/>
      </div>
    );
  }
});
