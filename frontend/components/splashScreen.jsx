var React = require('react');

var SearchBar = require('./splashScreenComponents/searchBar');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <SearchBar/>
    );
  }
});
