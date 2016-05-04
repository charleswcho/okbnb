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
        <div className='profile-form-container'>
          <Header/>
          <Form/>
        </div>
        <div className='key-features'>
          <div className='key-feature'>You can do this
          </div>
          <div className='key-feature'>You can do that</div>
          <div className='key-feature'>You can even do this</div>
        </div>
      </div>
    );
  }
});
