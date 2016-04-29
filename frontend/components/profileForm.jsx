var React = require('react');

var Header = require('./profileFormComponents/header');
var Form = require('./profileFormComponents/form');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='new-profile-page'>
        <Header/>
        <Form/>
      </div>
    );
  }
});
