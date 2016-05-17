var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ProfileStore = require('../stores/profileStore');
var ErrorStore = require('../stores/errorStore');

var Header = require('./profileFormComponents/header');
var Form = require('./profileFormComponents/form');

var Errors = require('../mixins/errors');

module.exports = React.createClass({
  mixins: [Errors],

  createdProfile: function (id) {
    hashHistory.push({pathname: 'profile/' + id})
  },

  render: function () {
    return (
      <div className='new-profile-page'>
        <div className='profile-form-container'>
          <Header/>
          <Form createdProfile={this.createdProfile}
                errors={this.state.errors}/>
        </div>
        <div className='key-features'>
          <div className='key-feature'>
            <img src="http://res.cloudinary.com/ddodpmqri/image/upload/v1462379822/form-1_rumhly.png" alt="bird" width='100' height='100'/>
            <div className='key-feature-description'>Creating a profile takes 2 minutes and is totally free.</div>
          </div>
          <div className='key-feature'>
            <img src="http://res.cloudinary.com/ddodpmqri/image/upload/v1462379822/form-2_mikape.png" alt="socks" width='100' height='100'/>
            <div className='key-feature-description'>We're 100% sure you'll find the perfect tenant.</div>
          </div>
          <div className='key-feature'>
            <img src="http://res.cloudinary.com/ddodpmqri/image/upload/v1462379824/form-3_x8eslz.png" alt="coffee" width='100' height='100'/>

            <div className='key-feature-description'>We're quick and easy to use!  </div>
          </div>
        </div>
      </div>
    );
  }
});
