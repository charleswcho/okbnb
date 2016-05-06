var React = require('react');

var SearchBar = require('./splashScreenComponents/searchBar');
var Cities = require('./splashScreenComponents/cities');
var Footer = require('./footer');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (
      <div className='splash-page'>
        <div className='splash-image-container'>
          <div className='splash-image'>
            <div className='splash-image-greeting'>
              <div id='splash-image-title'>MEET HERE</div>
              <div id='splash-image-subtitle'>Find tenants from 191+ countries and experience diversity in a whole new way.</div>
            </div>
            <SearchBar/>
          </div>
        </div>
        <Cities/>
        <Footer/>
      </div>
    );
  }
});
